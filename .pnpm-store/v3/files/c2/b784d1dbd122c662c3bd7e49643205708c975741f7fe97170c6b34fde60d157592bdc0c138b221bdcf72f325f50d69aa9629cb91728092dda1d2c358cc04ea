import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';

const defaultColor = "#FCC21B";
const SiRuff = React.forwardRef(function SiRuff2({ title = "Ruff", color = "currentColor", size = 24, ...others }, ref) {
  if (color === "default") {
    color = defaultColor;
  }
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      fill: color,
      viewBox: "0 0 24 24",
      ref,
      ...others,
      children: [
        /* @__PURE__ */ jsx("title", { children: title }),
        /* @__PURE__ */ jsx("path", { d: "m21.683 11.593-8.51-2.14 8.34-9.066a.23.23 0 0 0-.29-.352L2.252 11.62a.227.227 0 0 0-.108.226.23.23 0 0 0 .164.19l8.497 2.497-8.35 9.08a.228.228 0 0 0-.007.303.227.227 0 0 0 .3.047l19-11.953a.228.228 0 0 0 .105-.23.225.225 0 0 0-.172-.187z" })
      ]
    }
  );
});

export { SiRuff as default, defaultColor };
