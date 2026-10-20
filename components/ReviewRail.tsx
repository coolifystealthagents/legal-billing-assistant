'use client';

import { useEffect, useRef } from 'react';
import reviews from '@/app/review-provenance.json';

export function ReviewRail() {
  const windowRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const hovered = useRef(false);
  const focused = useRef(false);

  useEffect(() => {
    const viewport = windowRef.current;
    if (!viewport) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;

    let frame = 0;
    let last = performance.now();
    let position = viewport.scrollLeft;
    const tick = (now: number) => {
      const elapsed = Math.min(now - last, 50);
      last = now;
      if (!paused.current) {
        position += elapsed * 0.026;
        const track = viewport.firstElementChild as HTMLElement | null;
        let first = track?.firstElementChild as HTMLElement | null;
        while (track && first) {
          const gap = parseFloat(getComputedStyle(track).columnGap || '0');
          const step = first.getBoundingClientRect().width + gap;
          if (position < step) break;
          track.appendChild(first);
          position -= step;
          first = track.firstElementChild as HTMLElement | null;
        }
        viewport.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const syncPaused = () => { paused.current = hovered.current || focused.current; };
  return <div
    ref={windowRef}
    className="review-window"
    aria-label="StealthAgents client reviews. Focus or hover to pause automatic movement."
    tabIndex={0}
    onMouseEnter={() => { hovered.current = true; syncPaused(); }}
    onMouseLeave={() => { hovered.current = false; syncPaused(); }}
    onFocus={() => { focused.current = true; syncPaused(); }}
    onBlur={() => { focused.current = false; syncPaused(); }}
  >
    <div className="review-track">
      {reviews.records.map((review) => <article className="review-card" data-reviewer={review.name} key={review.name}><p className="stars"><span aria-hidden="true">★★★★★</span><span className="sr-only">Five out of five stars</span></p><h3>{review.headline}</h3><blockquote>{review.body}</blockquote><p><strong>{review.name}</strong><span>{review.detail}</span></p></article>)}
    </div>
  </div>;
}
