
    import * as React from 'react';

    import { IconType } from '../types';

    type SiNintendoProps = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * The title provides an accessible short text description to the SVG
       */
      title?: string;
      /**
       * Hex color or color name or "default" to use the default hex for each icon
       */
      color?: string;
      /**
       * The size of the Icon.
       */
      size?: string | number;
    }

    const defaultColor = '#8F8F8F';

    const SiNintendo: IconType = React.forwardRef<SVGSVGElement, SiNintendoProps>(function SiNintendo({title = 'Nintendo', color = 'currentColor', size = 24, ...others }, ref) {
      if (color === 'default') {
        color = defaultColor;
      }

      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={size}
          height={size}
          fill={color}
          viewBox='0 0 24 24'
          ref={ref}
          {...others}
        >
          <title>{title}</title>
          <path d='M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6' />
        </svg>
      );
    });

    export { SiNintendo as default, defaultColor };
  