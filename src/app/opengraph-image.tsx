import { ImageResponse } from "next/og";

export const alt = "ArgeNext — Software Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const monoFont = await fetch(
    "https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/ttf/JetBrainsMono-Medium.ttf"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15), transparent 60%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        {/* Top — badge */}
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: "22px",
            color: "#71717a",
          }}
        >
          <span style={{ color: "#3b82f6", marginRight: "12px" }}>//</span>
          software studio · ist
        </div>

        {/* Middle — logo + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Logo + brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: "56px",
                color: "#fafafa",
                fontWeight: 500,
              }}
            >
              argenext
              <span style={{ color: "#3b82f6" }}>.</span>
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              fontSize: "60px",
              color: "#fafafa",
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: "12px",
              maxWidth: "900px",
            }}
          >
            Modern dünyaya yetişen yazılım.
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: "60px",
              color: "#3b82f6",
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            Tasarla. Kodla. Yayınla.
          </div>
        </div>

        {/* Bottom — URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontFamily: "JetBrains Mono",
            fontSize: "22px",
            color: "#71717a",
          }}
        >
          argenext.com →
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "JetBrains Mono",
          data: monoFont,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}