"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * HP準拠: 有機的ブロブがゆっくり変形・回転しながら漂う背景
 * Lottie の代わりに Canvas 2D で再現
 */

interface Blob {
  cx: number;
  cy: number;
  baseR: number;
  points: number;
  phase: number;
  speed: number;
  rotSpeed: number;
  rotation: number;
  color: string;
  driftX: number;
  driftY: number;
  scalePhase: number;
  scaleSpeed: number;
}

/** ブロブの頂点を滑らかに変形させながら描画 */
function drawBlob(
  ctx: CanvasRenderingContext2D,
  blob: Blob,
  time: number,
) {
  const { cx, cy, baseR, points, phase, rotation, color } = blob;
  const scale = 0.85 + 0.2 * Math.sin(time * blob.scaleSpeed + blob.scalePhase);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  ctx.beginPath();

  const angleStep = (Math.PI * 2) / points;
  const coords: { x: number; y: number }[] = [];

  for (let i = 0; i < points; i++) {
    const angle = angleStep * i;
    // 各頂点を sin で揺らして有機的な形に
    const wobble =
      Math.sin(time * 0.4 + phase + i * 1.8) * 0.22 +
      Math.sin(time * 0.25 + phase * 0.7 + i * 2.5) * 0.15;
    const r = baseR * (1 + wobble);
    coords.push({
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
    });
  }

  // Catmull-Rom → cubic bezier で滑らかに閉じたパスを描く
  for (let i = 0; i < points; i++) {
    const p0 = coords[(i - 1 + points) % points];
    const p1 = coords[i];
    const p2 = coords[(i + 1) % points];
    const p3 = coords[(i + 2) % points];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    if (i === 0) ctx.moveTo(p1.x, p1.y);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
  }

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  const resize = useCallback((canvas: HTMLCanvasElement) => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const ctx = canvas.getContext("2d");
    ctx?.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      canvas.style.background =
        "linear-gradient(135deg, #F0F8FD 0%, #FFFFFF 50%, #F0F8FD 100%)";
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize(canvas);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    /* HP準拠: 白・ライトブルーの大きなブロブを複数配置 */
    const createBlobs = (): Blob[] => {
      const W = w();
      const H = h();
      const size = Math.max(W, H);
      return [
        {
          cx: W * 0.3,
          cy: H * 0.3,
          baseR: size * 0.38,
          points: 8,
          phase: 0,
          speed: 0.15,
          rotSpeed: 0.08,
          rotation: 0,
          color: "rgba(168, 214, 237, 0.22)",
          driftX: 0.12,
          driftY: 0.08,
          scalePhase: 0,
          scaleSpeed: 0.12,
        },
        {
          cx: W * 0.7,
          cy: H * 0.5,
          baseR: size * 0.32,
          points: 7,
          phase: 2.1,
          speed: 0.12,
          rotSpeed: -0.06,
          rotation: 0.5,
          color: "rgba(255, 255, 255, 0.65)",
          driftX: -0.1,
          driftY: 0.06,
          scalePhase: 1.5,
          scaleSpeed: 0.1,
        },
        {
          cx: W * 0.5,
          cy: H * 0.7,
          baseR: size * 0.35,
          points: 9,
          phase: 4.2,
          speed: 0.1,
          rotSpeed: 0.05,
          rotation: 1.2,
          color: "rgba(168, 214, 237, 0.16)",
          driftX: 0.08,
          driftY: -0.1,
          scalePhase: 3.0,
          scaleSpeed: 0.08,
        },
        {
          cx: W * 0.15,
          cy: H * 0.8,
          baseR: size * 0.28,
          points: 8,
          phase: 1.0,
          speed: 0.18,
          rotSpeed: -0.04,
          rotation: 2.5,
          color: "rgba(240, 248, 253, 0.5)",
          driftX: 0.06,
          driftY: 0.05,
          scalePhase: 2.0,
          scaleSpeed: 0.14,
        },
        {
          cx: W * 0.85,
          cy: H * 0.2,
          baseR: size * 0.25,
          points: 7,
          phase: 3.5,
          speed: 0.13,
          rotSpeed: 0.07,
          rotation: 0.8,
          color: "rgba(200, 230, 244, 0.2)",
          driftX: -0.07,
          driftY: 0.09,
          scalePhase: 4.5,
          scaleSpeed: 0.11,
        },
      ];
    };

    let blobs = createBlobs();

    const onResize = () => {
      resize(canvas);
      blobs = createBlobs();
    };
    window.addEventListener("resize", onResize);

    let startTime = 0;

    const draw = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const time = (timestamp - startTime) / 1000; // 秒

      const W = w();
      const H = h();

      // ペールブルー背景
      ctx.fillStyle = "#F0F8FD";
      ctx.fillRect(0, 0, W, H);

      for (const blob of blobs) {
        // ゆっくり回転
        blob.rotation += blob.rotSpeed * 0.016;
        // ゆっくりドリフト
        blob.cx += blob.driftX * Math.sin(time * 0.15 + blob.phase);
        blob.cy += blob.driftY * Math.cos(time * 0.12 + blob.phase);

        drawBlob(ctx, blob, time, );
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
