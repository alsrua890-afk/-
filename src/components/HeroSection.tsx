import React from 'react';
import { IMAGES } from '../data/mockData';

interface HeroSectionProps {
  currentLang: 'ko' | 'en';
  onExploreProducts: () => void;
  onOpenConsultation: () => void;
  onOpenTelemetry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onExploreProducts,
  onOpenConsultation,
  onOpenTelemetry,
}) => {
  const isKo = currentLang === 'ko';

  return (
    <section className="relative w-full pt-28 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#094E65] via-[#0D6F8F] to-[#0A5973] text-white">
      {/* Dynamic Graphic Motif Swoosh Accent in background */}
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-20 overflow-hidden">
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover" fill="none">
          <path
            d="M 100,0 C 400,100 500,450 800,500 L 800,0 Z"
            fill="#F8D94F"
          />
          <path
            d="M 250,0 C 450,150 550,400 800,420 L 800,0 Z"
            fill="#FFFFFF"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        {/* Top Header Tagline Bar - EXACT from image.png top right */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/15">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F8D94F] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F8D94F]">
              (주)MS가스 · MS GAS DESIGN SYSTEM
            </span>
          </div>
          <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white/80 hidden sm:flex items-center gap-3">
            <span>ENERGY</span>
            <span>·</span>
            <span>SAFETY</span>
            <span>·</span>
            <span>PARTNERSHIP</span>
            <span>·</span>
            <span className="text-[#F8D94F]">FOR A BETTER TOMORROW.</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Col */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              {/* Slogan - Exact Match from Design System Sheet */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                {isKo ? (
                  <>
                    가스가 만드는<br />
                    <span className="text-[#F8D94F]">더 안전한 오늘,</span><br />
                    더 나은 내일
                  </>
                ) : (
                  <>
                    Safer Gas,<br />
                    <span className="text-[#F8D94F]">Better Tomorrow</span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#F8D94F] font-semibold tracking-wide">
                Safer Gas, Better Tomorrow
              </p>

              <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed pt-1">
                {isKo
                  ? '1974년 창립 이래 50년 동안 축적된 고순도 정제 기술과 전국 17개 거점 직영 공급망으로 반도체, 바이오, 철강, 미래 청정에너지 산업의 안전한 미래를 만듭니다.'
                  : 'Since 1974, MS GAS has delivered ultra-pure specialty electronic gases, industrial bulk supply, and green ammonia infrastructure across South Korea.'}
              </p>
            </div>

            {/* UI Component Buttons - Replicating exact primary buttons in image.png */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* 문의하기 (Secondary Yellow from design system) */}
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-lg bg-[#F8D94F] hover:bg-[#DEBD2D] text-[#2E2E2E] font-extrabold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>{isKo ? '사업 문의하기' : 'Request Consultation'}</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              {/* 자세히 보기 (Outlined from UI component sheet) */}
              <button
                onClick={onExploreProducts}
                className="px-5 py-3.5 rounded-lg border-2 border-white hover:bg-white hover:text-[#0D6F8F] text-white font-bold text-base transition-all"
              >
                {isKo ? '자세히 보기' : 'Explore Products'}
              </button>

              {/* IoT Telemetry status pill */}
              <button
                onClick={onOpenTelemetry}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/20 hover:bg-black/30 border border-white/20 text-xs font-semibold text-white/90 transition-colors backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#38E54D] animate-ping" />
                <span>{isKo ? '24시간 IoT 관제 현황' : 'Live IoT Telemetry'}</span>
              </button>
            </div>

            {/* Key Metric Numbers */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F8D94F]">1974</div>
                <div className="text-xs text-white/70 font-medium mt-0.5">
                  {isKo ? '창립 이래 반세기 역사' : 'Est. 50+ Years History'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">17<span className="text-sm font-normal text-white/80">개소</span></div>
                <div className="text-xs text-white/70 font-medium mt-0.5">
                  {isKo ? '전국 거점 직영 공급망' : 'Nationwide Direct Hubs'}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F8D94F]">99.9999%</div>
                <div className="text-xs text-white/70 font-medium mt-0.5">
                  {isKo ? '반도체 6N 초고순도 가스' : 'Semiconductor 6N Purity'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Col - Replicating Industrial Cryogenic Storage Tanks with Curve Motif */}
          <div className="lg:col-span-5 relative">
            {/* Visual Frame with MS Gas Curve Mask */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
              <img
                src={IMAGES.heroFleet}
                alt="MS GAS Industrial Cryogenic Plant and Storage Infrastructure"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#094E65]/90 via-transparent to-transparent pointer-events-none" />

              {/* Yellow Swoosh Accent Arc across image */}
              <div className="absolute bottom-0 right-0 left-0 h-16 pointer-events-none overflow-hidden">
                <svg viewBox="0 0 400 60" className="w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M 0,60 Q 200,10 400,60 L 400,60 L 0,60 Z"
                    fill="#F8D94F"
                    opacity="0.85"
                  />
                </svg>
              </div>

              {/* Floating Dispatch Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl text-[#2E2E2E] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D6F8F] text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">local_shipping</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0D6F8F]">
                      {isKo ? '전국 직영 탱크로리 실시간 출하' : 'Live Fleet Active Dispatch'}
                    </div>
                    <div className="text-xs text-[#525252]">
                      {isKo ? '35대 상시 대기 · 정시 안전 납품' : '35 Cryogenic Tank Lorries Ready'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={onOpenTelemetry}
                  className="px-3 py-1.5 rounded-lg bg-[#0D6F8F] hover:bg-[#094E65] text-white text-xs font-bold transition-colors whitespace-nowrap"
                >
                  {isKo ? '현황보기' : 'View'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
