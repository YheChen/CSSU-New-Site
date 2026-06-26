import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.fullName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0b",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(127,184,158,0.22), transparent 70%)",
          padding: "80px",
          color: "#f2f2f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "1px solid rgba(127,184,158,0.4)",
              background: "#18181b",
              fontSize: 34,
              fontWeight: 700,
              color: "#7fb89e",
            }}
          >
            {"</>"}
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
            CSSU
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Computer Science Student Union
          </div>
          <div style={{ fontSize: 32, color: "#8c8c92", maxWidth: 820 }}>
            {`Representing ${siteConfig.studentCount} CS students at the University of Toronto.`}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#5f5f66" }}>cssu.ca</div>
      </div>
    ),
    { ...size },
  );
}
