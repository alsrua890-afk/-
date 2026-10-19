import React from 'react';

export interface MsGasLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'color' | 'white';
  showStripe?: boolean;
}

/**
 * (주)MS가스 Official Corporate Vector Logo
 * 100% mathematically faithful to the official CI from msgas.co.kr:
 * - Planetary orbital swoosh ring & "MS" in signature petroleum blue (#005B7E)
 * - "GAS" bold typography in charcoal black (#222222)
 * - Flawless letter kerning and razor-sharp SVG vector paths
 * - Optional brand accent stripe underneath
 */
export const MsGasLogo: React.FC<MsGasLogoProps> = ({
  className = '',
  height = 42,
  variant = 'color',
  showStripe = false,
}) => {
  const isWhite = variant === 'white';
  const blueFill = isWhite ? '#FFFFFF' : '#005b7e';
  const blackFill = isWhite ? '#FFFFFF' : '#222222';

  const viewBoxHeight = showStripe ? 68 : 60;
  const aspectRatio = `165 / ${viewBoxHeight}`;

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <svg
        viewBox={`0 0 164.568 ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        style={{ aspectRatio }}
        aria-label="(주)MS가스 로고"
      >
        <g id="MS-GAS-OFFICIAL-CI">
          {/* ========================================================= */}
          {/* 1. "MS" SYMBOL & PLANETARY ORBITAL SWOOSH                 */}
          {/* ========================================================= */}
          <g id="MS-SYMBOL">
            {/* S of "MS" */}
            <path
              d="M73.1,41.326a16.189,16.189,0,0,0,10.7,4.24c2.452,0,5.921-.812,6.462-3.871,1.173-6.642-15.7-5.281-13.547-17.492a12.177,12.177,0,0,1,5.429-7.889,18.355,18.355,0,0,1,9.939-2.624,23.761,23.761,0,0,1,8.865,1.632L99.825,21.71A12.455,12.455,0,0,0,92.6,19.152c-2.132,0-4.912.927-5.363,3.485-.459,2.616,2.518,3.649,4.379,4.527a20.808,20.808,0,0,1,6.528,4.084,8.677,8.677,0,0,1,2.583,8.225,13.221,13.221,0,0,1-5.921,8.84C91.182,50.65,87.6,51.15,83.736,51.15A26.568,26.568,0,0,1,73.51,49.182Z"
              transform="translate(-13.154 -2.464)"
              fill={blueFill}
            />
            {/* Left slanted leg and inner crossbar of M */}
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
            {/* Main sweeping orbital loop enveloping the M */}
            <path
              d="M30.6,45.152C22.3,52.5,13.219,56.165,7.093,53.927,2.813,52.368.41,48.039.623,42.479-.959,49.318.279,56.912,6.593,59.1c12.293,4.248,29.259-7.085,39.2-22.912.541-.861,1.05-1.722,1.533-2.567l-.82,14.334H56.633l2.452-35.869H52.992C52.336,6.446,49.457,2.37,44.922.656A15.47,15.47,0,0,0,42.651,0c.115.057.238.115.353.172,9.824,5.314,7.848,17.672-1.082,31.949A65.4,65.4,0,0,1,30.809,44.988Z"
              transform="translate(0)"
              fill={blueFill}
            />
          </g>

          {/* ========================================================= */}
          {/* 2. "GAS" WORDMARK (Official Bold Clean Typography)        */}
          {/* ========================================================= */}
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

          {/* ========================================================= */}
          {/* 3. OPTIONAL DUAL-TONE ENERGY STRIPE (Label Version)       */}
          {/* ========================================================= */}
          {showStripe && (
            <g id="ENERGY-ACCENT-STRIPE">
              <rect
                x="4"
                y="63"
                width="48"
                height="4"
                rx="2"
                fill={isWhite ? '#FFFFFF' : '#F39200'}
              />
              <rect
                x="56"
                y="63"
                width="104"
                height="4"
                rx="2"
                fill={isWhite ? '#FFFFFF' : '#005b7e'}
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
