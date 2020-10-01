import React from "react";
import Image from "./image";

export default Pronouns = ({ children }) => (
  <Image width="256" height="256">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.5,
          color: "#24292e",
        }}
      >
        My pronouns are
      </p>

      <h2
        style={{
          fontWeight: 600,
          fontSize: "26px",
          lineHeight: 1.25,
        }}
      >
        {children}
      </h2>
    </div>
  </Image>
);
