import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  size,
  type Strategy,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import type { StringKeyOfStrict } from '../types/utils';
import { IconInput } from './IconInput';
import styled from 'styled-components';

interface Props<T extends object> {
  data: T[];
  strategy?: Strategy;
  renderer: (item: T) => React.ReactElement;
  searchKeys: string[];
  selectKey: StringKeyOfStrict<T>;
  placeholder?: string;
  onSelect: (item: T) => void;
}

export const Search = <T extends { id: string }>({ data, strategy, renderer, searchKeys, placeholder, selectKey, onSelect }: Props<T>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (searchTerm) {
      setIsOpen(true);
      setActiveIndex(0);
    }
  }, [searchTerm]);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      flip(),
      offset(6),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
            maxWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
    placement: 'bottom-start',
    strategy,
    whileElementsMounted: autoUpdate,
  });

  const listRef = useRef<(HTMLDivElement | null)[]>([]);

  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  // const click = useClick(context);
  const dismiss = useDismiss(context, { referencePress: false });
  const role = useRole(context, { role: 'listbox' });
  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([role, dismiss, listNavigation]);

  const testItem = useCallback(
    (d: T) => {
      for (const key of searchKeys) {
        const subkeys = key.split('.');
        let val: string | object | null = d[subkeys[0] as keyof T] as string | object;

        for (let i = 1; i < subkeys.length; i++) {
          const k = subkeys[i];
          // apparently typeof null == 'object'...
          if (!val || typeof val !== 'object') break;
          if (!Object.hasOwn(val, k)) break;
          val = val[k as keyof typeof val];
        }

        if (typeof val !== 'string') {
          continue;
        }

        if (val.toLowerCase().includes(searchTerm)) {
          return val;
        }
      }
      return null;
    },
    [searchKeys, searchTerm],
  );

  const filtered = useMemo(() => {
    listRef.current = [];
    if (!searchTerm || !searchKeys.length) return data;

    const filtered: T[] = [];

    for (const d of data) {
      if (testItem(d)) {
        filtered.push(d);
      }
    }

    return filtered;
  }, [searchTerm, testItem]);

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing) return;
    if (activeIndex === null || !filtered.at(activeIndex)) return;
    const val = testItem(filtered[activeIndex]);
    if (val) {
      setSearchTerm(val);
      setIsOpen(false);
      setActiveIndex(null);
      onSelect(filtered[activeIndex]);
    }
  };

  const handleClick = (item: T) => {
    setSearchTerm(item[selectKey] as string);
    setIsOpen(false);
    setActiveIndex(null);
    onSelect(item);
  };

  return (
    <>
      <IconInput
        value={searchTerm}
        onChange={term => setSearchTerm(term.toLowerCase())}
        ref={refs.setReference}
        inputProps={getReferenceProps({ onKeyDown: handleEnter })}
        icons={{
          start: { src: '/icons/search.svg' },
          end2: { src: '/icons/close_circle.svg', needsInput: true, onClick: () => setSearchTerm('') },
        }}
        placeholder={placeholder}
        containerStyle={{ maxWidth: '500px' }}
      />
      {isOpen && (
        <FloatingFocusManager context={context} initialFocus={-1} visuallyHiddenDismiss>
          <DropContainer
            {...getFloatingProps({
              ref: refs.setFloating,
              style: floatingStyles,
            })}
          >
            {filtered.map((item, i) => (
              <div key={item.id} ref={node => (listRef.current[i] = node)} style={{ display: 'contents' }}>
                {React.cloneElement(renderer(item), {
                  ...getItemProps({
                    // tabIndex: activeIndex === i ? 0 : -1,
                    style: {
                      outline: 0,
                      backgroundColor: activeIndex === i ? 'var(--mono-op-08)' : 'white',
                      cursor: 'pointer',
                    },
                  }),
                  onClick: () => handleClick(item),
                })}
              </div>
            ))}
          </DropContainer>
        </FloatingFocusManager>
      )}
    </>
  );
};

export const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  max-height: inherit;
  border-radius: 4px;
  overflow: auto;
  background-color: white;
  box-shadow: var(--elevation);
  color: black;
  padding-block: 0.2rem;
  font-family: 'Roboto Slab', serif;
  z-index: 10;
`;
