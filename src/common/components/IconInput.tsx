import React, { forwardRef, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { RegEx } from '../../common/utils/RegEx';
import { Body, Label } from '../styled-components/styled_text';

interface Icon {
  src: string;
  onClick?: () => void;
  width?: string;
  needsInput?: boolean;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  onFile?: (file: FileList | null) => void;
  label?: string | React.ReactNode;
  pattern?: RegExp | ((value: string) => boolean | undefined);
  patternMessage?: string;
  type?: string;
  hint?: string;
  errorMessage?: string;
  icons?: {
    start?: Icon;
    end1?: Icon;
    end2?: Icon;
  };
  autocomplete?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  min?: number | string;
  max?: number | string;
  showMaxCount?: boolean;
  initialValue?: string;
  id?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  asFile?: boolean;
  onEnterKey?: () => void;
  highlightRequired?: boolean;
  readonly?: boolean;
  inputProps?: React.HTMLProps<HTMLInputElement>;
}

export const IconInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    label,
    value,
    onChange,
    onFile,
    pattern,
    hint,
    errorMessage,
    icons,
    autocomplete,
    placeholder,
    style,
    containerStyle,
    disabled,
    patternMessage,
    type,
    required,
    min,
    max,
    showMaxCount,
    initialValue,
    id,
    onBlur,
    onFocus,
    onClick,
    asFile,
    onEnterKey,
    highlightRequired,
    readonly,
    inputProps,
  } = props;
  // returns false for invalid, true for valid, and undefined for not checked (default state)
  const isValid = useMemo(() => {
    if (!pattern && !!value) return true;
    if (!pattern && !value) return undefined;
    if (!value) return undefined;
    if (value === initialValue) return false;

    if (typeof pattern === 'function') {
      return pattern(value);
    } else {
      return pattern!.test(value);
    }
  }, [pattern, value]);

  const handleChange = (val: string) => {
    const cleaned = val.replaceAll(' ', '').replaceAll('-', '');
    if (type === 'tel') {
      if (typeof max === 'number' && max && cleaned.length > max) return;
      if (cleaned.length && !RegEx.Numeric.test(cleaned)) return;
      return onChange(cleaned);
    }

    if (typeof max === 'number' && val.length > max) return;
    onChange(val);
  };

  return (
    <Container style={containerStyle} ref={ref}>
      {label && <Label $size={'s'}>{label}</Label>}
      <Wrapper
        style={style}
        $isValid={isValid}
        $hasError={!!errorMessage?.trim()}
        disabled={disabled}
        $asFile={asFile}
        $highlightRequired={!!highlightRequired}
        onClick={onClick}
        $maxCountColor={getMaxCountColor(max, value)}
      >
        {icons?.start && (icons.start.needsInput ? !!value : true) && (
          <Icon $src={icons.start.src} onClick={icons.start.onClick} $asStart={true} $width={icons.start.width} />
        )}
        <Input
          id={id}
          value={value ? value : initialValue ? initialValue : ''}
          onChange={e => (type === 'file' ? onFile!(e.target.files) : handleChange(e.target.value))}
          autoComplete={autocomplete ? 'on' : 'one-time-code'}
          placeholder={placeholder}
          disabled={disabled || asFile}
          required={required}
          type={type ?? 'text'}
          min={min}
          max={max}
          onBlur={onBlur}
          onFocus={onFocus}
          readOnly={readonly}
          onKeyDown={e => {
            console.log(e);
            if (e.nativeEvent.isComposing) return;
            console.log(e.key, onEnterKey);
            if (onEnterKey && e.key === 'Enter') onEnterKey();
          }}
          {...inputProps}
        />
        {max && showMaxCount && (
          <Body $size={'s'} className={'max-count'}>
            {value.length}/{max}
          </Body>
        )}
        {icons?.end1 && (icons.end1.needsInput ? !!value : true) && (
          <Icon $src={icons.end1.src} onClick={icons.end1.onClick} style={{ marginRight: '12px' }} $width={icons.end1.width} />
        )}
        {icons?.end2 && (icons.end2.needsInput ? !!value : true) && (
          <Icon $src={icons.end2.src} onClick={icons.end2.onClick} $width={icons.end2.width} />
        )}
      </Wrapper>
      {(errorMessage || (isValid === false && patternMessage) || hint) && (
        <HelperText $hasError={!!errorMessage || isValid === false}>
          {errorMessage ?? (isValid === false ? patternMessage : undefined) ?? hint}
        </HelperText>
      )}
    </Container>
  );
});

IconInput.displayName = 'IconName';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  overflow: hidden;
`;

const inputBorderColor = (hasError: boolean, isValid?: boolean, highlightRequired?: boolean) => {
  if (hasError || isValid === false) return '--error';
  if (isValid !== true && highlightRequired === true) return '--error';
  if (isValid === true) return '--primary';
  return '--light';
};

const Wrapper = styled.div<{
  $isValid?: boolean;
  $hasError: boolean;
  disabled?: boolean;
  $asFile?: boolean;
  $highlightRequired: boolean;
  $maxCountColor: 'placeholder' | 'warning-40' | 'error';
}>`
  width: 100%;
  min-height: 3.8rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0 1.2rem;
  background-color: #fdfdfd;
  border: 1px solid var(${props => inputBorderColor(props.$hasError, props.$isValid, props.$highlightRequired)});
  border-radius: 4px;
  box-sizing: border-box;

  .max-count {
    color: var(--placeholder);
  }

  &:focus-within {
    border-color: ${props => (props.$isValid === false ? 'var(--error)' : 'var(--primary)')};

    .max-count {
      color: var(--${props => props.$maxCountColor});
    }
  }

  ${({ disabled, $asFile }) =>
    disabled &&
    !$asFile &&
    css`
      border-color: var(--light);
      color: var(--mono-60);
      background-color: var(--light-1);
    `}
`;

const Icon = styled.img<{ $asStart?: boolean; $width?: string; $src: string }>`
  height: 2rem;
  width: ${props => props.$width ?? '2rem'};
  mask: url(${props => props.$src});
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  background-color: var(--placeholder);
  object-fit: cover;
  flex-shrink: 0;

  ${({ $asStart }) =>
    !$asStart &&
    css`
      cursor: pointer;
    `}
`;

//@formatter:off
const Input = styled.input<{ $asFile?: boolean }>`
  flex-grow: 1;
  flex-shrink: 1;
  border: none;
  outline: none;
  height: 2.2rem;
  font-weight: 400;
  font-size: 1.4rem;
  max-width: 100%;
  min-width: 0;

  &::placeholder {
    color: var(--placeholder);
    font-weight: 400;
    font-size: 1.4rem;
    padding: 0;
  }

  ${({ $asFile }) =>
    !$asFile &&
    css`
      &:disabled {
        color: var(--mono-60);
        background-color: var(--light-1);
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

const HelperText = styled.div<{ $hasError: boolean }>`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 160%;
  color: var(--${props => (props.$hasError ? 'error' : 'placeholder')});
  white-space: pre-wrap;
  padding-left: 1rem;
`;

const getMaxCountColor = (max: string | number | undefined, value: string): 'placeholder' | 'warning-40' | 'error' => {
  if (typeof max !== 'number') return 'placeholder';
  if (value.length < max / 2) return 'placeholder';
  if (max - value.length > 4) return 'warning-40';
  return 'error';
};
