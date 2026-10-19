import React from 'react';

export interface MsGasLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'color' | 'white' | 'dark' | 'mono';
  subtext?: 'ko' | 'en' | 'none';
  symbolOnly?: boolean;
}

/**
 * MS GAS Official Logo Component
 * Derived directly from the MS Gas Design System:
 * - Primary Color: #0D6F8F
 * - Text Color: #2E2E2E
 * - Supports:
 *   - 기본 로고 (국문): MS GAS + 엠에스가스 subtext
 *   - 기본 로고 (영문): MS GAS
 *   - 심볼마크 (Symbol only): MS orbital swoosh mark
 *   - 역상 로고 (Dark): White on #0D6F8F
 *   - 단색 로고 (Mono): White on #2E2E2E
 */
export const MsGasLogo: React.FC<MsGasLogoProps> = ({
  className = '',
  height = 42,
  variant = 'color',
  subtext = 'ko',
  symbolOnly = false,
}) => {
  const isDarkCard = variant === 'dark';
  const isMonoCard = variant === 'mono';
  const isWhite = variant === 'white' || isDarkCard || isMonoCard;

  const blueFill = isWhite ? '#FFFFFF' : '#0D6F8F';
  const blackFill = isWhite ? '#FFFFFF' : '#2E2E2E';

  // Base SVG viewBox
  // If symbolOnly: 0 0 102 60
  // If full logo: 0 0 165 60
  // If subtext === 'ko': 0 0 165 74 to fit "엠에스가스" cleanly
  const hasKoSubtext = !symbolOnly && subtext === 'ko';
  const viewBoxWidth = symbolOnly ? 102 : 165;
  const viewBoxHeight = hasKoSubtext ? 76 : 60;
  const aspectRatio = `${viewBoxWidth} / ${viewBoxHeight}`;

  const logoSvg = (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-full"
      style={{ aspectRatio }}
      aria-label="MS GAS 로고"
    >
      <g id="MS-GAS-LOGO-DESIGN-SYSTEM">
        {/* ========================================================= */}
        {/* 1. "MS" DYNAMIC ORBITAL SWOOSH SYMBOL                     */}
        {/* ========================================================= */}
        <g id="MS-SYMBOL">
          {/* S of "MS" */}
          <path
            d="M73.1,41.326a16.189,16.189,0,0,0,10.7,4.24c2.452,0,5.921-.812,6.462-3.871,1.173-6.642-15.7-5.281-13.547-17.492a12.177,12.177,0,0,1,5.429-7.889,18.355,18.355,0,0,1,9.939-2.624,23.761,23.761,0,0,1,8.865,1.632L99.825,21.71A12.455,12.455,0,0,0,92.6,19.152c-2.132,0-4.912.927-5.363,3.485-.459,2.616,2.518,3.649,4.379,4.527a20.808,20.808,0,0,1,6.528,4.084,8.677,8.677,0,0,1,2.583,8.225,13.221,13.221,0,0,1-5.921,8.84C91.182,50.65,87.6,51.15,83.736,51.15A26.568,26.568,0,0,1,73.51,49.182Z"
            transform="translate(-13.154 -2.464)"
            fill={blueFill}
          />
          {/* M Left leg and inner strut */}
          <path
            d="M36.937,14.74H24.472c-.049,0-.1.025-.1.074a.166.166,0,0,0,.057.1,4.879,4.879,0,0,1,1.189,5.011L16.69,50.617h6.364l6.364-23.166c.1-.369.164,0,.164,0l3.19,16.491a72.016,72.016,0,0,0,8.176-10.07Z"
            transform="translate(-3.004 -2.652)"
            fill={blueFill}
          />
          {/* Top crest of orbital curve */}
          <path
            d="M45.422,1.109C42.216-.031,37.853.2,33.294,3.02A35.98,35.98,0,0,0,26.52,8.334c.09-.041.172-.082.262-.115C34.2,2.585,41.822.8,47.193,2.766a9.194,9.194,0,0,1,1.542.73A7.143,7.143,0,0,0,45.422,1.109Z"
            transform="translate(-4.772 -0.084)"
            fill={blueFill}
          />
          {/* Main sweeping orbital loop */}
          <path
            d="M30.6,45.152C22.3,52.5,13.219,56.165,7.093,53.927,2.813,52.368.41,48.039.623,42.479-.959,49.318.279,56.912,6.593,59.1c12.293,4.248,29.259-7.085,39.2-22.912.541-.861,1.05-1.722,1.533-2.567l-.82,14.334H56.633l2.452-35.869H52.992C52.336,6.446,49.457,2.37,44.922.656A15.47,15.47,0,0,0,42.651,0c.115.057.238.115.353.172,9.824,5.314,7.848,17.672-1.082,31.949A65.4,65.4,0,0,1,30.809,44.988Z"
            transform="translate(0)"
            fill={blueFill}
          />
        </g>

        {/* ========================================================= */}
        {/* 2. "GAS" WORDMARK                                         */}
        {/* ========================================================= */}
        {!symbolOnly && (
          <g id="GAS-WORDMARK" transform="translate(97.086 20.821)" fill={blackFill}>
            {/* Letter 'A' */}
            <path
              d="M155.035,40.124l4.838-8.414,1.8,8.422Zm-10,9.783H149.4l3.5-6.036h9.586l1.279,6.06h5.388l-5.084-23.773-5.355-.008Z"
              transform="translate(-123.184 -25.527)"
            />
            {/* Letter 'S' */}
            <path
              d="M177.1,45.053a16.561,16.561,0,0,0,6.38,1.419c1.73,0,4.149-.459,4.535-2.591.689-3.846-10.136-4.256-8.783-11.751.861-4.773,5.609-6.667,9.906-6.659a39.5,39.5,0,0,1,7.143.73l-.812,4.5a17.521,17.521,0,0,0-6.036-1.287c-1.288,0-3.272.484-3.551,2.034-.648,3.584,10.579,4.051,9.176,11.809-.435,2.4-2.583,7.167-11.317,7.151a44.727,44.727,0,0,1-7.512-.607Z"
              transform="translate(-128.798 -25.404)"
            />
            {/* Letter 'G' */}
            <path
              d="M140.933,36.092h-9.34l-.861,3.83h3.051l-1.173,6.487c-5.683-.008-7.963-3.362-7-8.693.771-4.272,3.379-8.381,9.308-8.373a19.085,19.085,0,0,1,7.028,1.419l.828-4.568a40.2,40.2,0,0,0-8.594-.8c-7.963-.008-14.1,4.584-15.532,12.473s3.067,12.465,11.03,12.473a32.059,32.059,0,0,0,8.971-1.14Z"
              transform="translate(-118.39 -25.39)"
            />
          </g>
        )}

        {/* ========================================================= */}
        {/* 3. "엠에스가스" SUBTEXT (기본 로고 국문 규격)                */}
        {/* ========================================================= */}
        {hasKoSubtext && (
          <text
            x="132"
            y="70"
            textAnchor="middle"
            fill={blackFill}
            fontSize="12.5"
            fontWeight="700"
            letterSpacing="0.05em"
            fontFamily="'Noto Sans KR', 'Pretendard', sans-serif"
          >
            엠에스가스
          </text>
        )}
      </g>
    </svg>
  );

  // If dark or mono container variant
  if (isDarkCard) {
    return (
      <div
        className={`inline-flex items-center justify-center p-2 rounded-xl bg-[#0D6F8F] shadow-sm ${className}`}
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        {logoSvg}
      </div>
    );
  }

  if (isMonoCard) {
    return (
      <div
        className={`inline-flex items-center justify-center p-2 rounded-xl bg-[#2E2E2E] shadow-sm ${className}`}
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        {logoSvg}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    >
      {logoSvg}
    </div>
  );
};
