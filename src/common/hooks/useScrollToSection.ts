import { useEffect, useRef, useState } from 'react';

export const useScrollToSection = <T extends HTMLElement>() => {
  const navList = useRef<T>(null);
  const [allVisible, setAllVisible] = useState<string[]>([]);
  const sections = useRef<string[]>([]);
  const [visible, setVisible] = useState<string>();
  const observers = useRef<IntersectionObserver[] | null>(null);

  useEffect(() => {
    if (!navList.current) return;

    const anchors = navList.current.querySelectorAll('a');

    for (const anchor of anchors) {
      anchor.addEventListener('click', handleClick);

      const href = anchor.getAttribute('href');
      if (!href) continue;
      sections.current = [...sections.current, href.substring(1)];

      const section = document.querySelector(href);
      if (!section) continue;

      const target = document.createElement('span');
      target.style.position = 'absolute';
      target.style.top = '0';
      target.style.width = '1px';
      target.style.height = '1px';
      target.style.backgroundColor = 'transparent';
      section.appendChild(target);

      const parent = section.parentElement;
      if (!parent) continue;

      const observer = new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setAllVisible(prev => (prev.includes(href.substring(1)) ? prev : [...prev, href.substring(1)]));
            } else {
              setAllVisible(prev => prev.filter(id => id !== href.substring(1)));
            }
          }),
        { threshold: 1, root: null, rootMargin: `-${parent.getBoundingClientRect().top}px 0px 0px 0px` },
      );
      observers.current?.push(observer);
      observer.observe(target);
    }

    return () => {
      navList.current?.querySelectorAll('a').forEach(a => {
        a.removeEventListener('click', handleClick);
      });
      observers.current?.forEach(o => o.disconnect());
    };
  }, []);

  useEffect(() => {
    if (!sections.current.length || !allVisible.length) return;

    console.log(allVisible);

    if (allVisible.length === 1) {
      return setVisible(allVisible[0]);
    }

    if (allVisible.includes(sections.current[0])) {
      return setVisible(sections.current[0]);
    }

    if (allVisible.includes(sections.current.at(-1)!)) {
      return setVisible(sections.current.at(-1));
    }

    setVisible(allVisible[0]);
  }, [allVisible]);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    document.querySelector((e.target as HTMLAnchorElement).getAttribute('href')!)?.scrollIntoView({ behavior: 'smooth' });
  };

  return { ref: navList, visible };
};
