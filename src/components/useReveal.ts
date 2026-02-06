"use client";

import { useEffect, useRef } from "react";

/**
 * セクション単位でスクロールアニメーションを制御するhook
 * セクションがビューポートに入ったら、中の .reveal 要素を一括で表示する
 */
export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const showAll = () => {
      el.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
      ).forEach((t) => t.classList.add("is-visible"));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showAll();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    // 1フレーム待ってレイアウト確定後に判定
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // 既にビューポート内 → 即座に表示
        showAll();
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
