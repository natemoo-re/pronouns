import React from "react";
import Image from "./image";

const Pronouns = ({ children, image }: { children: any; image?: string }) => (
  <Image width="256" height="64">
    <style>{`
      h2 {
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        background-size: 200% auto;
        background-color: inherit;
        background-image: ${
          image ? image : "linear-gradient(#24292e 0%, #24292e 100%)"
        };
        animation: wipe 5s linear infinite;
      }

      @keyframes wipe {
        to {
          background-position: 200% center;
        }
      }
    `}</style>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
        color: "#24292e",
      }}
    >
      <p
        style={{
          fontSize: "16px",
          lineHeight: 1.5,
        }}
      >
        My pronouns are
      </p>

      <h2
        style={{
          fontWeight: image ? 800 : 700,
          letterSpacing: 0.2,
          fontSize: "26px",
          lineHeight: 1.25,
        }}
      >
        {children}
      </h2>
    </div>
  </Image>
);

export default Pronouns;
