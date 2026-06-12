import { Suspense, useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export default function LazySection({ children, rootMargin = '280px 0px', minHeight = '1px', className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={cn('content-auto', className)} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? (
        <Suspense fallback={<div aria-hidden style={{ minHeight }} />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}
