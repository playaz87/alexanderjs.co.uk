import { useEffect, useRef, useState } from 'react';

export const useScrollToSection = <T extends HTMLElement>() => {
  const navList = useRef<T>(null);
  const [visible, setVisible] = useState<string>();
  const observers = useRef<IntersectionObserver[] | null>(null);

  useEffect(() => {
    if (!navList.current) return;

    const anchors = navList.current.querySelectorAll('a');

    for (const anchor of anchors) {
      anchor.addEventListener('click', handleClick);

      const href = anchor.getAttribute('href');
      if (!href) continue;

      const target = document.querySelector(href);
      if (!target) continue;

      const parent = target.parentElement;
      if (!parent) continue;

      let threshold = target.getBoundingClientRect().height / parent.getBoundingClientRect().height;

      if (threshold < 1) {
        threshold = 1;
      } else if (threshold > 1) {
        threshold = 0.4;
      }

      console.log(target, threshold);

      const observer = new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
              setVisible(href.substring(1));
            }
          }),
        { threshold, rootMargin: `${parent.getBoundingClientRect().top}px 0px 0px 0px` },
        // { threshold },
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

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    document.querySelector((e.target as HTMLAnchorElement).getAttribute('href')!)?.scrollIntoView({ behavior: 'smooth' });
  };

  return { ref: navList, visible };
};
