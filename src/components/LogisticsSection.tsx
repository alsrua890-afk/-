import React, { useState } from 'react';
import { HUBS_DATA, HubItem } from '../data/mockData';

interface LogisticsSectionProps {
  currentLang: 'ko' | 'en';
  onOpenBranches: (selectedHub?: HubItem) => void;
  onOpenTelemetry: () => void;
}

export const LogisticsSection: React.FC<LogisticsSectionProps> = ({
  currentLang,
  onOpenBranches,
  onOpenTelemetry,
}) => {
  const isKo = currentLang === 'ko';
  const [activeHubId, setActiveHubId] = useState<string>('hub-01');

  return (
    <section className="w-full py-20 md:py-28 bg-[#001332] text-[#f4faff] relative overflow-hidden" id="logistics">
      {/* Subtle radial dot grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#5bd8fe_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Col */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5bd8fe]/15 text-[#5bd8fe] text-xs font-bold tracking-wider border border-[#5bd8fe]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38E54D]" />
                {isKo ? 'NATIONWIDE LOGISTICS NETWORK' : 'NATIONWIDE LOGISTICS NETWORK'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#f4faff] leading-tight">
                {isKo ? (
                  <>
                    전국적인 가스 운송능력을 지닌<br />
                    대한민국 대표 에너지 파트너
                  </>
                ) : (
                  <>
                    Nationwide Gas Fleet Capability<br />
                    Korea's Trusted Energy Partner
                  </>
                )}
              </h2>
              <p className="text-sm sm:text-base text-[#cadde8] leading-relaxed">
                {isKo
                  ? '(주)MS가스는 8개 권역망과 17개 직영 영업소를 직결하는 초저온 탱크로리 선단과 실시간 GPS 텔레메트리 관제 인프라를 바탕으로 단 1초의 공급 중단 없는 연속성을 보장합니다.'
                  : 'Operating a massive cryogenic fleet connecting 8 major regions and 17 direct branches, supported by real-time wireless telemetry to guarantee 100% continuous uninterrupted supply.'}
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="space-y-4 pt-2">
              {/* Feature 1 */}
              <div
                onClick={onOpenTelemetry}
                className="group flex items-start gap-4 p-4 rounded-xl bg-[#0f284e]/60 border border-[#5bd8fe]/15 hover:border-[#5bd8fe]/50 transition-all cursor-pointer"
                title="텔레메트리 관제 화면 보기"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00677e]/40 text-[#5bd8fe] flex items-center justify-center shrink-0 group-hover:bg-[#5bd8fe] group-hover:text-[#001332] transition-colors">
                  <span className="material-symbols-outlined text-[22px]">radar</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base text-[#f4faff] font-bold flex items-center gap-2">
                    <span>{isKo ? '24시간 스마트 텔레메트리 안전관제' : '24/7 Smart Telemetry Safety Control'}</span>
                    <span className="text-[10px] text-[#5bd8fe] font-normal underline">(관제창 열기)</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#cadde8] leading-relaxed">
                    {isKo
                      ? '탱크로리 이동 경로와 고객사 저장탱크의 잔량·내압 데이터를 실시간 무선 감지하여 재고 소진 전 선제적 보충 배송을 자동 수행합니다.'
                      : 'Continuously monitors customer tank levels and pressure wirelessly, executing predictive automatic replenishment before inventory dips.'}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0f284e]/60 border border-[#5bd8fe]/15">
                <div className="w-10 h-10 rounded-lg bg-[#00677e]/40 text-[#5bd8fe] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base text-[#f4faff] font-bold">
                    {isKo ? '전문 안전관리 • 가스퍼지 토탈 서비스' : 'Turnkey Safety Audit & Gas Purge Services'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#cadde8] leading-relaxed">
                    {isKo
                      ? '정기 안전진단, 용기 검사, 정밀 가스분석 및 플랜트 시운전 전 잔류 위험가스 완벽 치환(Purge) 서비스를 원스톱으로 지원합니다.'
                      : 'Routine pressure vessel audits, high-precision GC analytics, and turn-around hazardous gas purging for newly commissioned chemical plants.'}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0f284e]/60 border border-[#5bd8fe]/15">
                <div className="w-10 h-10 rounded-lg bg-[#00677e]/40 text-[#5bd8fe] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">public</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base text-[#f4faff] font-bold">
                    {isKo ? '글로벌 10개국 전략적 원자재 수급망' : 'Direct Global Sourcing Network Across 10 Countries'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#cadde8] leading-relaxed">
                    {isKo
                      ? '수입 의존도가 높은 희귀 불활성 가스 및 반도체 특수가스를 다변화된 글로벌 직수입 채널을 통해 원활하고 가격 경쟁력 있게 공급합니다.'
                      : 'Direct procurement partnerships with global gas majors for Xenon, Krypton, Neon, and semiconductor silane gases to hedge geopolitical supply volatility.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Regional Hub Architecture Presentation */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f284e]/85 rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#5bd8fe]/20 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#5bd8fe]/15 gap-3">
                <div>
                  <span className="text-xs font-bold text-[#5bd8fe] uppercase tracking-wider">
                    Regional Hub Architecture
                  </span>
                  <h3 className="text-xl sm:text-2xl text-[#f4faff] font-bold">
                    {isKo ? '전국 8개 권역 • 17개 거점 영업소 현황' : '8 Regional Territories • 17 Direct Hubs'}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#38E54D]/15 text-[#38E54D] text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto border border-[#38E54D]/30">
                  <span className="w-2 h-2 rounded-full bg-[#38E54D] animate-ping" />
                  {isKo ? '실시간 100% 정상 가동' : '100% Fully Operational'}
                </span>
              </div>

              {/* 4 Hub Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {HUBS_DATA.map((hub) => {
                  const isSelected = activeHubId === hub.id;
                  return (
                    <div
                      key={hub.id}
                      onClick={() => {
                        setActiveHubId(hub.id);
                        onOpenBranches(hub);
                      }}
                      className={`p-5 rounded-xl transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#001332] border-[#5bd8fe] shadow-lg shadow-[#5bd8fe]/10 -translate-y-0.5'
                          : 'bg-[#001332]/60 border-[#5bd8fe]/15 hover:border-[#5bd8fe]/40 hover:bg-[#001332]/90'
                      } space-y-2.5`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base sm:text-lg font-bold text-[#f4faff]">
                          {isKo ? hub.nameKo : hub.nameEn}
                        </span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#00677e]/30 text-[#5bd8fe] border border-[#5bd8fe]/20">
                          {hub.code}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#cadde8] line-clamp-2 leading-relaxed">
                        {isKo ? hub.descKo : hub.descEn}
                      </p>
                      <div className="text-xs text-[#5bd8fe] flex items-center gap-1.5 pt-1">
                        <span className="material-symbols-outlined text-[15px]">{hub.icon}</span>
                        <span className="font-medium">{isKo ? hub.highlightKo : hub.highlightEn}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Summary Footer */}
              <div className="mt-6 pt-5 border-t border-[#5bd8fe]/15 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#cadde8]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#5bd8fe] text-[18px]">verified</span>
                  <span>{isKo ? '모든 거점 사업장 고압가스 제조·판매 허가 및 KGS 법정 안전 기준 100% 충족' : '100% Certified Under KGS High-Pressure Gas Safety Codes'}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBranches()}
                  className="text-[#5bd8fe] hover:text-white font-bold flex items-center gap-1 transition-colors cursor-pointer group"
                >
                  <span>{isKo ? '전국 17개 영업지점 상세 조회' : 'View All 17 Hubs Details'}</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
