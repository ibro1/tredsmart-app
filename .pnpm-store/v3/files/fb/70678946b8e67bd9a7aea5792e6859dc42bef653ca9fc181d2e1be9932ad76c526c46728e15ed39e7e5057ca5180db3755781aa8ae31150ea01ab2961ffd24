
    import * as React from 'react';

    import { IconType } from '../types';

    type SiGooglechatProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const defaultColor = '#00AC47';

    const SiGooglechat: IconType = React.forwardRef<SVGSVGElement, SiGooglechatProps>(function SiGooglechat({title = 'Google Chat', color = 'currentColor', size = 24, ...others }, ref) {
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
          <path d='M7.533 0a1.816 1.816 0 0 0-1.816 1.816v2.832h11.178c1.043 0 1.888.855 1.888 1.91v8.204h2.906a1.816 1.816 0 0 0 1.817-1.817V1.816A1.816 1.816 0 0 0 21.689 0H7.533zM2.311 5.148A1.816 1.816 0 0 0 .494 6.965V23.09c0 .81.979 1.215 1.55.642l3.749-3.748h10.674a1.816 1.816 0 0 0 1.816-1.816V6.965a1.816 1.816 0 0 0-1.816-1.817H2.31Z' />
        </svg>
      );
    });

    export { SiGooglechat as default, defaultColor };
  