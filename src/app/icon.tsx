import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 20,
            fontWeight: 800,
            fontFamily: "system-ui, sans-serif",
            color: "#f2f2f2",
          }}
        >
          H
          <span style={{ color: "#ff6a1a" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
