import { useState } from 'react';
import { cn } from '../../lib/utils';

/** Image with gradient fallback if asset missing */
export default function MockImage({
  src,
  alt = '',
  className,
  fallback,
  priority = false,
}) {
  const [ok, setOk] = useState(true);

  if (!ok && fallback) {
    return (
      <div className={cn('absolute inset-0', className)} style={{ background: fallback }} aria-hidden />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setOk(false)}
    />
  );
}
