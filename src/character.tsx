// ...existing code...
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  photoUrl: string;
  borderPhotoUrl: string;
  href?: string;
  shift?: number;
  top?: number;
};

export default function CharacterButton(Props: Props) {
  const { photoUrl, borderPhotoUrl, href, shift = 0, top = 0 } = Props;
  const navigate = useNavigate();

  const [opacity, setOpacity] = useState<number>(0);
  const [cursor, seCursor] = useState<string>("default");

  const imgRef = useRef<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const naturalSizeRef = useRef<{ w: number; h: number } | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    const alpha = sampleAlphaAtEvent(e);
    const visible = alpha > 10;
    if (!visible) {
      e.preventDefault();
      e.stopPropagation();
      setOpacity(0);
      return;
    }
    if (href && href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
  };

  const prepareCanvas = (img: HTMLImageElement) => {
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    naturalSizeRef.current = { w, h };
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    canvasRef.current = canvas;
  };

  const sampleAlphaAtEvent = (e: React.MouseEvent) => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const nat = naturalSizeRef.current;
    if (!img || !canvas || !nat) return 0;
    const rect = img.getBoundingClientRect();
    const px = Math.floor(((e.clientX - rect.left) / rect.width) * nat.w);
    const py = Math.floor(((e.clientY - rect.top) / rect.height) * nat.h);
    if (px < 0 || py < 0 || px >= nat.w || py >= nat.h) return 0;
    const ctx = canvas.getContext("2d");
    if (!ctx) return 0;
    return ctx.getImageData(px, py, 1, 1).data[3];
  };

  const handleMove = (e: React.MouseEvent) => {
    const alpha = sampleAlphaAtEvent(e);
    setOpacity(alpha > 10 ? 1 : 0);
    seCursor(alpha > 10 ? "pointer" : "default");
  };

  const onLeave = () => setOpacity(0);

  const content = (
    <div
      style={{
        position: "relative",
        cursor: "default",
        width: 100,
        height: 100,
      }}
    >
      <img
        src={borderPhotoUrl}
        alt="character border"
        style={{
          position: "absolute",
          inset: 0,
          objectFit: "cover",
          left: shift,
          top: top,
          opacity,
          pointerEvents: "none",
          cursor: cursor,
        }}
      />
      <img
        ref={imgRef}
        src={photoUrl}
        alt="character"
        crossOrigin="anonymous"
        style={{
          position: "absolute",
          left: shift,
          top: top,
          objectFit: "cover",
          zIndex: 1,
          cursor: cursor,
        }}
        onLoad={(e) => prepareCanvas(e.currentTarget)}
        onMouseMove={handleMove}
        onMouseLeave={onLeave}
      />
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          display: "inline-block",
          width: 180,
          height: 180,
        }}
        aria-label="character link"
      >
        {content}
      </a>
    );
  }

  return (
    <div onClick={handleClick} role="button" tabIndex={0}>
      {content}
    </div>
  );
}
