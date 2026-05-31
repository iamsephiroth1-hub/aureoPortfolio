import { ImageResponse } from "next/og";
import { siteConfig } from "@/src/data/metadata";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.author}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 148, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 148, 0.05) 0%, transparent 50%)
          `,
          padding: "60px",
          fontFamily: '"Space Grotesk", "Segoe UI", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(20, 20, 20, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 20, 20, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.1,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#f0ede8",
              letterSpacing: "-2px",
              lineHeight: "1.1",
              maxWidth: "900px",
              fontFamily: '"Space Grotesk", "Segoe UI", system-ui, sans-serif',
            }}
          >
            {siteConfig.author}
          </div>

          <div
            style={{
              fontSize: "32px",
              color: "#00ff94",
              fontWeight: "600",
              letterSpacing: "0.5px",
              fontFamily: '"Space Grotesk", "Segoe UI", system-ui, sans-serif',
            }}
          >
            Full-Stack Engineer
          </div>

          <div
            style={{
              fontSize: "20px",
              color: "#999999",
              maxWidth: "800px",
              lineHeight: "1.6",
              marginTop: "20px",
              fontFamily: '"DM Mono", "SFMono-Regular", Consolas, monospace',
            }}
          >
            {siteConfig.description.slice(0, 120)}…
          </div>

          <div
            style={{
              fontSize: "16px",
              color: "#666666",
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(20, 20, 20, 0.8)",
              fontFamily: '"DM Mono", "SFMono-Regular", Consolas, monospace',
            }}
          >
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
