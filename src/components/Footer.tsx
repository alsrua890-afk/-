import React from 'react';
import { MsGasLogo } from './MsGasLogo';

interface FooterProps {
  currentLang: 'ko' | 'en';
  onOpenBranches: () => void;
  onOpenInquiry: () => void;
  onOpenMsds: () => void;
  onOpenLegal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenBranches,
  onOpenInquiry,
  onOpenMsds,
  onOpenLegal,
}) => {
  const isKo = currentLang === 'ko';

  return (
    <footer className="w-full bg-[#1B242C] text-[#cadde8] border-t border-[#0D6F8F]/20">
      <div className="max-w-[1360px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Registration */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm flex items-center justify-center">
                <MsGasLogo height={28} subtext={isKo ? 'ko' : 'none'} />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {isKo ? '(주)MS가스' : 'MS GAS Co., Ltd.'}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#F8D94F] text-[#2E2E2E] text-[11px] font-extrabold tracking-wider">
                CLEAN ENERGY TECH
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#cadde8] max-w-md leading-relaxed">
              {isKo
                ? '초고순도 산업용 특수가스, 엔지니어링 및 친환경 지속가능 솔루션을 통해 차세대 에너지 및 첨단 정밀 산업의 미래를 이끌어갑니다.'
                : 'Pioneering clean energy, ultra-pure specialty gases, and turnkey cryogenic engineering solutions for future high-tech industries.'}
            </p>
            <div className="pt-2 text-xs text-[#cadde8] space-y-1.5 leading-relaxed font-mono">
              <p>{isKo ? '본사: 부산광역시 사상구 학감대로 161 (주)MS가스' : 'Headquarters: 161 Hakgam-daero, Sasang-gu, Busan, Republic of Korea'}</p>
              <p>
                {isKo ? '대표전화: 051-314-1000' : 'Tel: +82-51-314-1000'} &nbsp;|&nbsp;{' '}
                {isKo ? '팩스: 051-314-1004' : 'Fax: +82-51-314-1004'} &nbsp;|&nbsp;{' '}
                {isKo ? '이메일: info@msgas.co.kr' : 'Email: info@msgas.co.kr'}
              </p>
              <p>{isKo ? '사업자등록번호: 606-81-00000 | 대표이사: 전청민' : 'Business Reg: 606-81-00000 | CEO: Jeon Cheong-min'}</p>
            </div>
          </div>

          {/* Col 2: Products & Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-[#f4faff] uppercase tracking-wider">
              {isKo ? '주요 제품 & 솔루션' : 'Key Products & Solutions'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#cadde8]">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {isKo ? '초고순도 특수가스 (6N Ar/He)' : 'Specialty Ultra-Pure Gas'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {isKo ? '일반 산업용 가스 (LOX/LIN/LAR)' : 'Core Industrial Bulk Gases'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {isKo ? '의료용 및 헬스케어 가스' : 'Pharmaceutical Medical Gas'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {isKo ? '가스 공급 배관 엔지니어링' : 'Piping & Purging Engineering'}
                </a>
              </li>
              <li>
                <a href="#logistics" className="hover:text-white transition-colors">
                  {isKo ? '자동화 벌크 공급 시스템' : 'Smart Telemetry Bulk Refills'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-[#f4faff] uppercase tracking-wider">
              {isKo ? '신속 바로가기' : 'Quick Navigation'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#cadde8]">
              <li>
                <button
                  type="button"
                  onClick={onOpenBranches}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isKo ? '오시는 길' : 'Locations & Branches'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isKo ? '온라인 문의' : 'Online Consultation'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onOpenLegal(
                      isKo ? 'MS가스 인재채용 안내' : 'Careers at MS GAS',
                      isKo
                        ? '(주)MS가스는 최고의 고압가스 안전 전문가 및 연구원과 함께 첨단 산업을 이끌어갈 진취적인 인재를 상시 채용합니다. 문의: recruit@msgas.co.kr'
                        : 'MS GAS welcomes passionate engineering and analytical specialists to shape the future of clean energy. Contact: recruit@msgas.co.kr'
                    )
                  }
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isKo ? '인재채용' : 'Careers'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenMsds}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {isKo ? 'MSDS (물질안전보건자료)' : 'MSDS Archive'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Support */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-[#f4faff] uppercase tracking-wider">
              {isKo ? '고객 센터' : 'Customer Support'}
            </h3>
            <p className="text-xl sm:text-2xl font-bold font-mono text-white">051-314-1000</p>
            <p className="text-xs text-[#cadde8] leading-relaxed">
              {isKo ? (
                <>
                  평일 08:30 - 17:30<br />
                  (주말 및 공휴일 휴무)
                </>
              ) : (
                <>
                  Mon - Fri 08:30 - 17:30<br />
                  (KST / Closed Holidays)
                </>
              )}
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-block px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-[#f4faff] transition-colors text-xs font-semibold text-center w-full border border-white/10 cursor-pointer"
              >
                {isKo ? '1:1 기술 및 공급 상담' : '1:1 Technical Help'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#cadde8]">
          <p className="text-center md:text-left">
            © 2025 (주)MS가스. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <button
              type="button"
              onClick={() =>
                onOpenLegal(
                  isKo ? '개인정보처리방침' : 'Privacy Policy',
                  isKo
                    ? '(주)MS가스는 정보주체의 개인정보를 소중히 다루며 관련 법령(개인정보보호법)을 준수합니다. 상담 접수 시 수집된 정보는 상담 및 견적 안내 목적 외에 다른 용도로 이용되지 않습니다.'
                    : 'MS GAS adheres to strict data privacy protection regulations. Collected inquiry contact information is used strictly for consultation and delivery scheduling purposes.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              {isKo ? '개인정보처리방침' : 'Privacy Policy'}
            </button>
            <button
              type="button"
              onClick={() =>
                onOpenLegal(
                  isKo ? '이용약관' : 'Terms of Service',
                  isKo
                    ? '본 웹사이트의 모든 콘텐츠(상표, 사진, 기술 자료, 규격서 등)는 (주)MS가스의 지적재산권에 속하며 무단 복제 및 전재를 금합니다.'
                    : 'All intellectual property, photography, and specification sheets on this site are property of MS GAS Co., Ltd.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              {isKo ? '이용약관' : 'Terms of Service'}
            </button>
            <button
              type="button"
              onClick={() =>
                onOpenLegal(
                  isKo ? '윤리경영 방침' : 'Ethical Management',
                  isKo
                    ? '(주)MS가스는 공정하고 투명한 기업 문화를 바탕으로 협력사와의 동반성장 및 안전 제일주의 윤리경영을 실천합니다.'
                    : 'MS GAS upholds the highest standards of safety, fair supplier trade, and transparent governance.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              {isKo ? '윤리경영' : 'Ethics Policy'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
