/**
 * Signature motif: a fine-line eight-point geometric rose.
 * Reads simultaneously as a classical Islamic geometric pattern and a data
 * network diagram, the two traditions this site is built to bridge.
 */
export function EightPointRose({
  size = 420,
  className = "",
  opacity = 0.3,
}: {
  size?: number;
  className?: string;
  opacity?: number;
}) {
  const points = (n: number, r: number, offset = 0) =>
    Array.from({ length: n }).map((_, i) => {
      const a = (Math.PI * 2 * i) / n + offset;
      return [r * Math.cos(a), r * Math.sin(a)];
    });

  const outer = points(8, size * 0.46, -Math.PI / 8);
  const inner = points(8, size * 0.2, Math.PI / 8);
  const path = outer.map((p, i) => `${p[0]},${p[1]} ${inner[i][0]},${inner[i][1]}`).join(" ");

  return (
    <svg
      viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <circle r={size * 0.46} fill="none" stroke="currentColor" strokeOpacity={opacity} strokeWidth="0.75" />
      <circle r={size * 0.2} fill="none" stroke="currentColor" strokeOpacity={opacity} strokeWidth="0.75" />
      <polygon points={path} fill="none" stroke="currentColor" strokeOpacity={opacity} strokeWidth="0.75" />
      {outer.map((p, i) => (
        <line key={i} x1={0} y1={0} x2={p[0]} y2={p[1]} stroke="currentColor" strokeOpacity={opacity * 0.6} strokeWidth="0.5" />
      ))}
    </svg>
  );
}
