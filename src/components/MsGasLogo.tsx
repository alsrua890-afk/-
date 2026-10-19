import React from 'react';

interface MsGasLogoProps {
  className?: string;
  showStripe?: boolean;
  height?: number | string;
  variant?: 'color' | 'white';
}

export const MsGasLogo: React.FC<MsGasLogoProps> = ({
  className = '',
  showStripe = true,
  height = 42,
  variant = 'color',
}) => {
  const blueColor = variant === 'white' ? '#FFFFFF' : '#004B87';
  const blackColor = variant === 'white' ? '#FFFFFF' : '#231F20';
  const orangeColor = variant === 'white' ? '#5bd8fe' : '#F39800';

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      <svg
        viewBox="0 0 760 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        style={{ aspectRatio: '760 / 250' }}
      >
        <g id="OFFICIAL-MS-GAS-LOGO">
          {/* ==================================================== */}
          {/* SECTION 1: SLANTED "MS" WITH DYNAMIC ORBITAL SWOOSH   */}
          {/* ==================================================== */}
          <g id="MS-SYMBOL">
            {/* Dynamic Orbital Crescent / Swoosh */}
            {/* Starts thin at lower-left, arches up over the M, tapers down */}
            <path
              d="M 52 186
                 C 48 152 56 112 76 74
                 C 100 30 142 8 196 3
                 C 222 0 244 5 258 16
                 C 263 20 262 25 256 26
                 C 248 27 236 26 220 28
                 C 176 34 136 62 108 106
                 C 86 142 74 174 62 195
                 C 58 201 54 200 52 186 Z"
              fill={blueColor}
            />

            {/* Inner secondary crescent highlight */}
            <path
              d="M 126 84
                 C 152 46 186 28 226 22
                 C 246 19 256 22 250 28
                 C 242 34 228 38 212 43
                 C 178 54 148 76 128 108
                 L 126 84 Z"
              fill={blueColor}
            />

            {/* Letter 'M' with forward dynamic slant */}
            {/* Left upright / slanted stem */}
            <path
              d="M 104 54
                 L 138 54
                 L 106 172
                 L 72 172
                 Z"
              fill={blueColor}
            />
            {/* Left serif flare on top of M */}
            <path
              d="M 134 54
                 L 102 54
                 C 94 48 95 42 106 40
                 L 134 40
                 Z"
              fill={blueColor}
            />
            {/* Center V & Right Stem of M */}
            <path
              d="M 136 54
                 L 174 144
                 L 186 144
                 L 224 54
                 L 262 54
                 L 230 172
                 L 194 172
                 L 214 98
                 L 178 172
                 L 152 172
                 L 114 84
                 L 124 54
                 Z"
              fill={blueColor}
            />

            {/* Letter 'S' in MS (Slanted, Bold, Modern) */}
            <path
              d="M 374 65
                 C 362 50 344 40 318 40
                 C 284 40 262 56 262 82
                 C 262 104 278 116 308 122
                 L 326 126
                 C 346 130 354 138 354 150
                 C 354 168 334 178 308 178
                 C 280 178 258 164 248 148
                 L 222 165
                 C 238 188 268 202 308 202
                 C 354 202 388 180 388 146
                 C 388 118 368 106 332 98
                 L 316 94
                 C 298 90 292 84 292 74
                 C 292 62 304 56 320 56
                 C 336 56 352 64 362 76
                 L 374 65 Z"
              fill={blueColor}
            />
          </g>

          {/* ==================================================== */}
          {/* SECTION 2: WORD "GAS" (Solid Heavy Charcoal Black)    */}
          {/* ==================================================== */}
          <g id="GAS-TYPOGRAPHY">
            {/* Letter 'G' */}
            <path
              d="M 508 66
                 C 490 48 466 38 436 38
                 C 382 38 344 76 344 122
                 C 344 168 382 204 436 204
                 C 472 204 500 190 514 170
                 L 514 128
                 L 444 128
                 L 444 152
                 L 484 152
                 L 484 158
                 C 474 172 458 180 436 180
                 C 400 180 374 156 374 122
                 C 374 88 400 62 436 62
                 C 456 62 472 70 484 82
                 L 508 66 Z"
              fill={blackColor}
            />

            {/* Letter 'A' */}
            <path
              d="M 576 40
                 L 524 200
                 L 556 200
                 L 570 156
                 L 624 156
                 L 638 200
                 L 672 200
                 L 620 40
                 L 576 40 Z
                 M 578 130
                 L 597 74
                 L 616 130
                 L 578 130 Z"
              fill={blackColor}
            />

            {/* Letter 'S' */}
            <path
              d="M 742 66
                 C 726 48 704 38 676 38
                 C 644 38 622 56 622 80
                 C 622 102 638 114 668 120
                 L 686 124
                 C 706 128 716 136 716 148
                 C 716 166 696 178 672 178
                 C 648 178 628 166 616 150
                 L 592 166
                 C 608 190 638 204 672 204
                 C 718 204 748 182 748 146
                 C 748 118 728 106 694 98
                 L 678 94
                 C 660 90 652 84 652 74
                 C 652 64 664 56 680 56
                 C 698 56 714 64 724 76
                 L 742 66 Z"
              fill={blackColor}
            />
          </g>

          {/* ==================================================== */}
          {/* SECTION 3: DUAL-COLOR CORPORATE STRIPE (BOTTOM)      */}
          {/* ==================================================== */}
          {showStripe && (
            <g id="BOTTOM-ACCENT-STRIPE">
              {/* Left Yellow/Orange bar with smooth rounded-convex tip */}
              <path
                d="M 0 218
                   L 374 218
                   C 388 218 396 226 396 234
                   C 396 242 388 250 374 250
                   L 0 250
                   Z"
                fill={orangeColor}
              />
              {/* Right Navy Blue bar with smooth matching entrance curve */}
              <path
                d="M 406 218
                   C 418 218 424 226 424 234
                   C 424 242 418 250 406 250
                   L 760 250
                   L 760 218
                   Z"
                fill={blueColor}
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
