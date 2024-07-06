import { useEffect, useRef, useState } from 'react';

export const useScrollToSection = <T extends HTMLElement>() => {
  const parent = useRef<T>(null);
  const [visible, setVisible] = useState<string>();
  const observers = useRef<IntersectionObserver[] | null>(null);

  useEffect(() => {
    if (!parent.current) return;

    const anchors = parent.current.querySelectorAll('a');

    for (const anchor of anchors) {
      anchor.addEventListener('click', handleClick);

      const href = anchor.getAttribute('href');
      if (!href) continue;

      const target = document.querySelector(href);
      if (!target) continue;

      let threshold = target.getBoundingClientRect().height / window.innerHeight;

      if (threshold >= 1) {
        threshold = 0.9;
      }

      const observer = new IntersectionObserver(
        entries =>
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setVisible(href.substring(1));
            }
          }),
        { threshold },
      );
      observers.current?.push(observer);
      observer.observe(target);
    }

    return () => {
      parent.current?.querySelectorAll('a').forEach(a => {
        a.removeEventListener('click', handleClick);
      });
      observers.current?.forEach(o => o.disconnect());
    };
  }, []);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    document.querySelector((e.target as HTMLAnchorElement).getAttribute('href')!)?.scrollIntoView({ behavior: 'smooth' });
  };

  return { ref: parent, visible };
};
