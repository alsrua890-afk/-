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
    <section className="relative w-full pt-28 pb-20 md:pb-28 overflow-hidden bg-[#0B192C] text-[#F4F8FB]">
      {/* Ambient Lighting & Particle Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#00677e]/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[520px] h-[520px] rounded-full bg-[#5bd8fe]/15 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(91,216,254,0.15),rgba(11,25,44,0))] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        {/* Overline Badge Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00677e]/20 text-[#5bd8fe] text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-[#5bd8fe]/20">
            <span className="w-2 h-2 rounded-full bg-[#38E54D] animate-pulse" />
            {isKo ? 'CLEAN ENERGY & ADVANCED GAS TOTAL SOLUTION' : 'CLEAN ENERGY & ADVANCED GAS TOTAL SOLUTION'}
          </span>
          <span className="text-[#cadde8] text-xs font-semibold tracking-wider hidden sm:inline-block">
            SINCE 1974 • 50 YEARS OF EXCELLENCE
          </span>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Col */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-sm md:text-lg text-[#5bd8fe] font-semibold tracking-wide">
                {isKo
                  ? '가스 설계부터 공급, 유지까지 — 전 공정을 아우르는 원스톱 토탈 솔루션'
                  : 'From Engineering Design to Continuous Supply & Purging — Full Turnkey Gas Solution'}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#f4faff] tracking-tight leading-[1.18]">
                {isKo ? (
                  <>
                    보이지 않는 에너지를 통해<br />
                    사람들의 일상과 산업을<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5bd8fe] via-[#f4faff] to-[#b1c7f6]">
                      따뜻하게 연결합니다
                    </span>
                  </>
                ) : (
                  <>
                    Connecting Daily Life &<br />
                    High-Tech Industry Through<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5bd8fe] via-[#f4faff] to-[#b1c7f6]">
                      Invisible Clean Energy
                    </span>
                  </>
                )}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#cadde8] max-w-2xl leading-relaxed">
              {isKo
                ? '언제나 그 자리에, 조용히 그리고 변함없이 (주)MS가스는 오늘도 당신의 일상을 지키고 있습니다. 1974년 창립 이래 반세기 동안 축적된 고순도 정밀 정제 기술과 전국 17개 거점 직영 공급망으로 대한민국 첨단산업의 심장을 뛰게 합니다.'
                : 'Steadfast and dedicated since 1974, MS GAS has safe-guarded everyday Korean living and high-tech industrial manufacturing. With a nationwide network of 17 regional depots and 50 years of ultra-high purity purification expertise, we power the nation’s core semiconductor and future energy transitions.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[#00677e] text-white hover:bg-[#5bd8fe] hover:text-[#0B192C] transition-all duration-300 font-bold text-base shadow-xl shadow-[#00677e]/25 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{isKo ? '제품 및 솔루션 알아보기' : 'Explore Gas Portfolio'}</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-lg bg-[#d8ebf6]/15 hover:bg-[#d8ebf6]/25 text-[#f4faff] transition-all duration-300 font-bold text-base backdrop-blur-md border border-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#5bd8fe] text-[20px]">chat</span>
                <span>{isKo ? '견적 및 공급 상담 문의' : 'Request Quote & Consultation'}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-[#cadde8] text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#38E54D] text-[18px]">verified</span>
                <span>ISO 9001 &amp; 14001 인증 설비</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#5bd8fe] text-[18px]">lock</span>
                <span>24/7 실시간 텔레메트리 관제</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#5bd8fe] text-[18px]">science</span>
                <span>울산·경남 친환경 규제자유특구 주관</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Real-time Telemetry & Fleet Showcase */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={onOpenTelemetry}
              className="group relative rounded-2xl overflow-hidden bg-[#0f284e]/60 border border-[#5bd8fe]/30 shadow-2xl backdrop-blur-xl cursor-pointer hover:border-[#5bd8fe] transition-all"
              title="클릭하여 실시간 텔레메트리 관제 센터 열기"
            >
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={IMAGES.heroFleet}
                  alt="Modern ultra-high-tech industrial chemical and gas transportation fleet"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />

                {/* Floating Live Dispatch Card */}
                <div className="absolute top-4 left-4 right-4 bg-[#001332]/85 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-[#5bd8fe]/20 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38E54D] opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38E54D]" />
                    </span>
                    <div>
                      <div className="text-[#f4faff] font-bold text-xs sm:text-sm leading-tight flex items-center gap-1.5">
                        <span>MS 전국 운송 실시간 관제 센터</span>
                        <span className="text-[10px] text-[#5bd8fe] underline hidden sm:inline">(클릭하여 열기)</span>
                      </div>
                      <div className="text-[#cadde8] text-[11px]">
                        전국 탱크로리 실시간 GPS • 초저온 압력 정상
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#00677e]/50 text-[#5bd8fe] text-[11px] font-bold tracking-wider border border-[#5bd8fe]/30">
                    LIVE ON
                  </span>
                </div>

                {/* Bottom Fleet Caption inside image */}
                <div className="absolute bottom-4 left-4 right-4 text-[#F4F8FB] space-y-1.5">
                  <div className="text-xs sm:text-sm font-bold text-[#f4faff] flex items-center justify-between">
                    <span>{isKo ? '전국 익일 직배송 시스템 가동 중' : 'Nationwide Next-Day Direct Fleet Active'}</span>
                    <span className="text-[#5bd8fe] font-mono text-xs">{isKo ? '정시 도착율 99.8%' : 'On-Time: 99.8%'}</span>
                  </div>
                  <div className="w-full bg-[#d8ebf6]/30 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#5bd8fe] h-full w-[99.8%] rounded-full shadow-[0_0_8px_#5bd8fe]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 High-Impact Metric Hero Units */}
        <div className="mt-14 sm:mt-16 pt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#0f284e]/40 border border-[#5bd8fe]/20 p-6 rounded-2xl backdrop-blur-md">
          {/* Metric 1 */}
          <div className="space-y-1 p-2 border-r border-[#5bd8fe]/15 last:border-none">
            <div className="text-xs font-bold text-[#5bd8fe] uppercase tracking-widest flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              {isKo ? '광역 권역망 커버리지' : 'Regional Network'}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#f4faff] tracking-tight">
              8<span className="text-[#5bd8fe] text-lg sm:text-xl font-normal ml-1">{isKo ? '개 지역' : 'Regions'}</span>
            </div>
            <p className="text-xs text-[#cadde8]">
              {isKo ? '수도권·영남·호남·충청 전역 연계' : 'Nationwide Coverage Across Korea'}
            </p>
          </div>

          {/* Metric 2 */}
          <div className="space-y-1 p-2 border-r border-[#5bd8fe]/15 last:border-none">
            <div className="text-xs font-bold text-[#5bd8fe] uppercase tracking-widest flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">hub</span>
              {isKo ? '직영 영업 및 물류 거점' : 'Direct Branch Depots'}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#f4faff] tracking-tight">
              17<span className="text-[#5bd8fe] text-lg sm:text-xl font-normal ml-1">{isKo ? '개 영업소' : 'Branches'}</span>
            </div>
            <p className="text-xs text-[#cadde8]">
              {isKo ? '전국 최단거리 직송 인프라 완비' : 'Express Point-to-Point Fleet'}
            </p>
          </div>

          {/* Metric 3 */}
          <div className="space-y-1 p-2 border-r border-[#5bd8fe]/15 last:border-none">
            <div className="text-xs font-bold text-[#5bd8fe] uppercase tracking-widest flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">public</span>
              {isKo ? '글로벌 서플라이 파트너' : 'Global Partners'}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#f4faff] tracking-tight">
              10<span className="text-[#5bd8fe] text-lg sm:text-xl font-normal ml-1">{isKo ? '개국' : 'Countries'}</span>
            </div>
            <p className="text-xs text-[#cadde8]">
              {isKo ? '초고순도 특수가스 직수입 및 수출' : 'Direct Sourcing of Rare Gases'}
            </p>
          </div>

          {/* Metric 4 */}
          <div className="space-y-1 p-2">
            <div className="text-xs font-bold text-[#5bd8fe] uppercase tracking-widest flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              {isKo ? '연간 매출액 (2024 GAAP)' : 'Annual Revenue'}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#f4faff] tracking-tight">
              935<span className="text-[#5bd8fe] text-lg sm:text-xl font-normal ml-1">{isKo ? '억원' : 'KRW Bil'}</span>
            </div>
            <p className="text-xs text-[#cadde8]">
              {isKo ? '지속적 연구개발과 투명한 재무 건전성' : 'Continuous R&D & Financial Strength'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
