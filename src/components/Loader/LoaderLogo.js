import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    return (
      <svg
        id="logo"
        className="raw_logo"
        width="100%"
        height="100%"
        viewBox="0 0 800 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#1A2F60"
          fontSize="80"
          fontFamily="'Dancing Script', cursive"
          fontWeight="bold"
          className="signature-text"
        >
          Harsha Portfolio
        </text>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .signature-text {
                  opacity: 0;
                  animation: fadein 3s ease-in-out forwards 0.5s;
                }
                @keyframes fadein {
                  from { opacity: 0; transform: scale(0.9) translateY(10px); }
                  to { opacity: 1; transform: scale(1) translateY(0); }
                }
              `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
