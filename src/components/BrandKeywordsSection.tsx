import React from 'react';

interface BrandKeywordsSectionProps {
  currentLang: 'ko' | 'en';
  onOpenConsultation: () => void;
  onExploreProducts: () => void;
  onOpenTelemetry: () => void;
}

export const BrandKeywordsSection: React.FC<BrandKeywordsSectionProps> = ({
  currentLang,
  onOpenConsultation,
  onExploreProducts,
  onOpenTelemetry,
}) => {
  const isKo = currentLang === 'ko';

  const brandKeywords = [
    {
      titleKo: '안전',
      titleEn: 'Safety',
      subKo: '믿을 수 있는 가스 파트너',
      subEn: 'Trusted Gas Partner',
      icon: 'verified_user',
      colorClass: 'bg-[#0D6F8F] text-white',
      borderColor: 'border-[#0D6F8F]/20',
      tagColor: 'text-[#0D6F8F] bg-[#0D6F8F]/10',
    },
    {
      titleKo: '지속가능',
      titleEn: 'Sustainability',
      subKo: '깨끗한 에너지로 지속 가능한 미래',
      subEn: 'Clean Energy for Sustainable Future',
      icon: 'eco',
      colorClass: 'bg-[#F8D94F] text-[#2E2E2E]',
      borderColor: 'border-[#F8D94F]/30',
      tagColor: 'text-[#9A7D0A] bg-[#F8D94F]/20',
    },
    {
      titleKo: '전문성',
      titleEn: 'Expertise',
      subKo: '산업가스 전문 토탈 솔루션',
      subEn: 'Industrial Gas Total Solution',
      icon: 'groups',
      colorClass: 'bg-[#8B5CF6] text-white',
      borderColor: 'border-[#8B5CF6]/20',
      tagColor: 'text-[#8B5CF6] bg-[#8B5CF6]/10',
    },
    {
      titleKo: '성장',
      titleEn: 'Growth',
      subKo: '고객과 함께하는 지속적 발전',
      subEn: 'Continuous Growth with Clients',
      icon: 'trending_up',
      colorClass: 'bg-[#F97316] text-white',
      borderColor: 'border-[#F97316]/20',
      tagColor: 'text-[#F97316] bg-[#F97316]/10',
    },
  ];

  const serviceIcons = [
    {
      labelKo: '가스 공급',
      labelEn: 'Gas Supply',
      descKo: '초고순도 특수가스 및 대용량 벌크 직송',
      descEn: 'Ultra-pure specialty & bulk gas direct feed',
      icon: 'local_fire_department',
      action: onExploreProducts,
    },
    {
      labelKo: '저장/설비',
      labelEn: 'Storage & EPC',
      descKo: '초저온 저장탱크 및 기화 플랜트 턴키 시공',
      descEn: 'Cryogenic bulk tanks & vaporizer EPC',
      action: onOpenConsultation,
    },
    {
      labelKo: '안전관리',
      labelEn: 'Safety Audit',
      descKo: '24시간 무사고 방재 및 KGS 법정 안전 점검',
      descEn: '24/7 disaster prevention & statutory safety',
      action: onOpenConsultation,
    },
    {
      labelKo: '품질관리',
      labelEn: 'Quality Lab',
      descKo: 'KOLAS 공인시험 및 의약품 MFDS GMP 인증',
      descEn: 'KOLAS test lab & MFDS GMP certification',
      action: onExploreProducts,
    },
    {
      labelKo: '물류/운송',
      labelEn: 'Fleet Logistics',
      descKo: '전국 17개 거점 직영 대형 탱크로리 급송',
      descEn: 'Nationwide 17 hubs dedicated fleet dispatch',
      action: onOpenTelemetry,
    },
    {
      labelKo: '영업/견적',
      labelEn: 'Consulting',
      descKo: '전담 엔지니어 맞춤형 원스톱 신속 견적',
      descEn: 'Dedicated fast-track engineering quotes',
      action: onOpenConsultation,
    },
    {
      labelKo: '고객지원',
      labelEn: '24/7 Support',
      descKo: '전문 기술 상담 및 긴급 공급 대응 핫라인',
      descEn: 'Technical inquiry & emergency order hotline',
      action: onOpenConsultation,
    },
    {
      labelKo: '데이터/분석',
      labelEn: 'IoT Telemetry',
      descKo: '초저온 저장조 실시간 잔량·압력 원격 관제',
      descEn: 'Real-time telemetry IoT level & pressure tracking',
      action: onOpenTelemetry,
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB] relative overflow-hidden">
      {/* Background Graphic Motif Swoosh Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F8D94F]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0D6F8F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 relative z-10">
        {/* ========================================================= */}
        {/* SECTION 1: 브랜드 키워드 (Brand Keywords)                 */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5F9] text-[#0D6F8F] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#0D6F8F]" />
            {isKo ? '브랜드 키워드 · BRAND KEYWORDS' : 'CORE BRAND VALUES'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] tracking-tight">
            {isKo ? (
              <>
                가스가 만드는 <span className="text-[#0D6F8F]">더 안전한 오늘</span>,{' '}
                <span className="text-[#0D6F8F] underline decoration-[#F8D94F] decoration-4 underline-offset-4">
                  더 나은 내일
                </span>
              </>
            ) : (
              <>
                Safer Gas, <span className="text-[#0D6F8F]">Better Tomorrow</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#525252] leading-relaxed">
            {isKo
              ? '(주)MS가스는 반세기 동안 축적된 고순도 정제 기술과 전국 직영 공급망으로 대한민국 산업을 든든하게 받치고 있습니다.'
              : 'Backed by 50 years of ultra-high purity engineering and nationwide logistics, MS GAS empowers core industries.'}
          </p>
        </div>

        {/* 4 Brand Keyword Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {brandKeywords.map((kw, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-[#F6F8FA] border ${kw.borderColor} hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform ${kw.colorClass}`}
              >
                <span className="material-symbols-outlined text-3xl">{kw.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#2E2E2E] tracking-tight mb-1">
                {isKo ? kw.titleKo : kw.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-[#525252] font-medium leading-relaxed">
                {isKo ? kw.subKo : kw.subEn}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: 아이콘 스타일 8대 핵심 역량 (Icon Style)        */}
        {/* ========================================================= */}
        <div className="pt-10 border-t border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0D6F8F] uppercase tracking-wider mb-2">
                <span>MS GAS TOTAL INFRASTRUCTURE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2E2E2E] tracking-tight">
                {isKo ? '아이콘 스타일로 보는 MS가스 토탈 솔루션' : 'MS GAS Core Service Portfolio'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#525252] max-w-md">
              {isKo
                ? '원자재 도입부터 초저온 플랜트 시공, 전국 급송 및 24시간 텔레메트리까지 전 공정을 표준화된 품질로 관리합니다.'
                : 'From source procurement to cryogenic tank EPC and nationwide delivery, every step adheres to rigorous safety standards.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {serviceIcons.map((svc, idx) => (
              <button
                key={idx}
                onClick={svc.action}
                className="group flex flex-col items-center p-4 rounded-xl bg-[#F6F8FA] hover:bg-white border border-[#E5E7EB] hover:border-[#0D6F8F] hover:shadow-lg transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E7EB] group-hover:border-[#0D6F8F] group-hover:bg-[#E8F5F9] flex items-center justify-center text-[#0D6F8F] mb-3 transition-colors">
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                    {svc.icon}
                  </span>
                </div>
                <span className="font-bold text-xs sm:text-sm text-[#2E2E2E] group-hover:text-[#0D6F8F] transition-colors mb-1">
                  {isKo ? svc.labelKo : svc.labelEn}
                </span>
                <span className="text-[11px] text-[#707070] line-clamp-2 leading-tight">
                  {isKo ? svc.descKo : svc.descEn}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 3: 그래픽 모티프 & 빠른 견적 배너 (Graphic Motif)   */}
        {/* ========================================================= */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#094E65] via-[#0D6F8F] to-[#0A5973] p-8 sm:p-12 relative text-white">
          {/* Asymmetrical Curved Yellow & White Wave Motif */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 300 200" className="w-full h-full object-cover" fill="none">
              <path
                d="M 50,0 C 150,50 150,150 250,200 L 300,200 L 300,0 Z"
                fill="#F8D94F"
              />
              <path
                d="M 120,0 C 200,60 180,140 280,200 L 300,200 L 300,0 Z"
                fill="#FFFFFF"
                opacity="0.4"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#F8D94F] text-[#2E2E2E] text-xs font-extrabold tracking-wider uppercase inline-block mb-3">
              FAST-TRACK ENGINEERING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              {isKo ? '가스 설비 진단부터 맞춤 공급 견적까지 원스톱 지원' : 'One-Stop Support from Gas Plant EPC to Custom Supply'}
            </h3>
            <p className="text-sm sm:text-base text-[#cadde8] leading-relaxed mb-6">
              {isKo
                ? '반도체, 제철, 화학, 조선, 의료 등 현장 조건에 최적화된 고압가스 공급 설비 사양과 견적을 24시간 내 신속하게 안내해 드립니다.'
                : 'Receive fast, certified technical proposals and volume pricing tailored precisely to your facility within 24 hours.'}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-lg bg-[#F8D94F] hover:bg-[#DEBD2D] text-[#2E2E2E] font-extrabold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>{isKo ? '사업 문의하기' : 'Request Consultation'}</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
              <button
                onClick={onExploreProducts}
                className="px-5 py-3 rounded-lg border border-white/60 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
              >
                {isKo ? '제품 카탈로그 보기' : 'Explore Gas Catalog'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
