import React, { useState } from 'react';

interface ContactSectionProps {
  currentLang: 'ko' | 'en';
  onOpenCompany: () => void;
  onOpenInquiryModal: () => void;
  onOpenNotices: () => void;
  onOpenBranches: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenCompany,
  onOpenInquiryModal,
  onOpenNotices,
  onOpenBranches,
}) => {
  const isKo = currentLang === 'ko';

  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [gasType, setGasType] = useState('산업용 벌크 가스');
  const [details, setDetails] = useState('');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !phone.trim()) {
      alert(isKo ? '기업명 및 연락처를 입력해 주세요.' : 'Please enter company name and phone number.');
      return;
    }
    const ticketId = 'MSG-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedCode(ticketId);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setCompanyName('');
    setPhone('');
    setDetails('');
  };

  return (
    <section className="w-full py-20 md:py-28 bg-[#F6F8FA]" id="support">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* High-Impact Contact Banner in MS Gas Primary Tone */}
        <div className="rounded-3xl bg-gradient-to-br from-[#094E65] via-[#0D6F8F] to-[#0A5973] text-white p-8 md:p-14 relative overflow-hidden shadow-2xl border border-white/20">
          {/* Asymmetric Graphic Motif Wave */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#F8D94F]/15 blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Col */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-[#F8D94F] text-[#2E2E2E] text-xs font-extrabold uppercase tracking-wider inline-block">
                FAST-TRACK ENGINEERING CONSULTING
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {isKo ? (
                  <>
                    MS가스와 함께 혁신적이고<br />
                    <span className="text-[#F8D94F]">안전한 가스 솔루션</span>을 시작하세요
                  </>
                ) : (
                  <>
                    Partner with MS GAS for<br />
                    <span className="text-[#F8D94F]">Safe, Certified Gas Infrastructure</span>
                  </>
                )}
              </h2>
              <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed">
                {isKo
                  ? '고객사의 생산 규모와 입지 조건에 최적화된 벌크 저장설비 시공, 탱크로리 정기 공급 주기 설정, 특수가스 정밀 분석 배합을 전문 엔지니어가 1:1로 맞춤 설계해 드립니다.'
                  : 'Our dedicated gas engineers provide tailored turn-key cryogenic storage tank installations, scheduled telemetric lorry refills, and custom ultra-pure mixture formulations.'}
              </p>

              {/* Direct Hotlines */}
              <div className="pt-4 flex flex-wrap gap-8 text-white">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F8D94F] border border-white/20">
                    <span className="material-symbols-outlined text-[24px]">call</span>
                  </span>
                  <div>
                    <div className="text-xs text-white/70">{isKo ? '전국 대표 직통 전화' : 'Nationwide Hotline'}</div>
                    <div className="text-lg sm:text-xl font-bold font-mono text-white">051-314-1000</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F8D94F] border border-white/20">
                    <span className="material-symbols-outlined text-[24px]">mail</span>
                  </span>
                  <div>
                    <div className="text-xs text-white/70">{isKo ? '공급 및 기술 견적 이메일' : 'Technical Quotations'}</div>
                    <div className="text-lg sm:text-xl font-bold text-white">info@msgas.co.kr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Fast Consultation Form */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl text-[#2E2E2E]">
              <div>
                <h3 className="text-lg font-extrabold text-[#2E2E2E]">
                  {isKo ? '신속 온라인 견적 및 기술 문의' : 'Fast Online Quotation Request'}
                </h3>
                <p className="text-xs text-[#525252] mt-0.5">
                  {isKo ? '전문 가스 엔지니어가 24시간 내 배정됩니다.' : 'An assigned gas specialist responds within 24 hours.'}
                </p>
              </div>

              {submittedCode ? (
                <div className="p-6 rounded-xl bg-[#E8F5F9] border border-[#0D6F8F]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0D6F8F] text-white flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-2xl">check</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0D6F8F]">
                    {isKo ? '상담 접수가 정상 완료되었습니다' : 'Request Successfully Submitted!'}
                  </h4>
                  <p className="text-xs text-[#525252]">
                    {isKo ? '접수 번호:' : 'Ticket Ref:'}{' '}
                    <span className="font-mono text-[#0D6F8F] font-bold text-sm">{submittedCode}</span>
                  </p>
                  <p className="text-xs text-[#525252]">
                    {isKo
                      ? '담당 엔지니어가 기재해 주신 연락처로 신속히 맞춤 견적을 안내해 드리겠습니다.'
                      : 'An assigned gas engineering specialist will contact your team with custom pricing and technical parameters.'}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-2 px-5 py-2.5 rounded-lg bg-[#0D6F8F] hover:bg-[#094E65] text-xs font-bold text-white transition-all cursor-pointer shadow-sm"
                  >
                    {isKo ? '새 문의 작성' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-xs text-[#525252] font-semibold block">
                      {isKo ? '기업명 / 담당자명' : 'Company / Contact Person'}
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F6F8FA] border border-[#E5E7EB] text-[#2E2E2E] text-xs sm:text-sm focus:outline-none focus:border-[#0D6F8F] focus:ring-2 focus:ring-[#0D6F8F]/20"
                      placeholder={isKo ? '(주)한국제조 / 홍길동 팀장' : 'Acme Corp / John Doe'}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      type="text"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs text-[#525252] font-semibold block">
                        {isKo ? '연락처' : 'Phone / Mobile'}
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F6F8FA] border border-[#E5E7EB] text-[#2E2E2E] text-xs sm:text-sm focus:outline-none focus:border-[#0D6F8F] focus:ring-2 focus:ring-[#0D6F8F]/20"
                        placeholder="010-0000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        type="tel"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-[#525252] font-semibold block">
                        {isKo ? '희망 가스 종류' : 'Gas Solution Type'}
                      </label>
                      <select
                        value={gasType}
                        onChange={(e) => setGasType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#F6F8FA] border border-[#E5E7EB] text-[#2E2E2E] text-xs sm:text-sm focus:outline-none focus:border-[#0D6F8F] focus:ring-2 focus:ring-[#0D6F8F]/20"
                      >
                        <option value="산업용 벌크 가스">산업용 벌크 가스 (LOX/LIN/LAR/CO2)</option>
                        <option value="초고순도 특수가스">초고순도 특수가스 (6N Ar/He/Silane)</option>
                        <option value="연료용 가스">연료용 가스 (프로판/프라멕스)</option>
                        <option value="의료용 가스">의료용 가스 (MFDS GMP 의약품용)</option>
                        <option value="표준 및 혼합가스">표준 및 혼합가스 (KOLAS 교정용)</option>
                        <option value="가스퍼지 및 엔지니어링">가스퍼지 및 엔지니어링 설비</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-[#525252] font-semibold block">
                      {isKo ? '문의 내용 요약' : 'Requirements Summary'}
                    </label>
                    <textarea
                      className="w-full px-3.5 py-2 rounded-lg bg-[#F6F8FA] border border-[#E5E7EB] text-[#2E2E2E] text-xs sm:text-sm focus:outline-none focus:border-[#0D6F8F] focus:ring-2 focus:ring-[#0D6F8F]/20 resize-none"
                      placeholder={isKo ? '필요 유량, 설치 예정 지역, 납품 형태 등을 간략히 적어주세요.' : 'Estimated flow rate, delivery location, and container preference...'}
                      rows={2}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    />
                  </div>

                  <button
                    className="w-full py-3.5 rounded-lg bg-[#F8D94F] hover:bg-[#DEBD2D] text-[#2E2E2E] text-sm font-extrabold transition-all shadow-md hover:shadow-lg cursor-pointer"
                    type="submit"
                  >
                    {isKo ? '확인하기 (견적 요청 접수)' : 'Confirm (Submit Request)'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Quick-Access Navigation Cards from Design System */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div
            onClick={onOpenCompany}
            className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group border border-[#E5E7EB] hover:border-[#0D6F8F] cursor-pointer hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E8F5F9] flex items-center justify-center text-[#0D6F8F] group-hover:bg-[#0D6F8F] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#2E2E2E] group-hover:text-[#0D6F8F] transition-colors">
                {isKo ? '회사소개' : 'About MS'}
              </h4>
              <p className="text-xs text-[#525252]">
                {isKo ? '1974년 창립 연혁 및 비전' : '1974 Heritage & Vision'}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={onOpenInquiryModal}
            className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group border border-[#E5E7EB] hover:border-[#0D6F8F] cursor-pointer hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E8F5F9] flex items-center justify-center text-[#0D6F8F] group-hover:bg-[#0D6F8F] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-[24px]">contact_support</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#2E2E2E] group-hover:text-[#0D6F8F] transition-colors">
                {isKo ? '온라인 문의' : 'Online Inquiry'}
              </h4>
              <p className="text-xs text-[#525252]">
                {isKo ? '1:1 기술 및 공급 상담' : '1:1 Technical Consultation'}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={onOpenNotices}
            className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group border border-[#E5E7EB] hover:border-[#0D6F8F] cursor-pointer hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E8F5F9] flex items-center justify-center text-[#0D6F8F] group-hover:bg-[#0D6F8F] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-[24px]">campaign</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#2E2E2E] group-hover:text-[#0D6F8F] transition-colors">
                {isKo ? '공지 및 입찰' : 'Notices & Bids'}
              </h4>
              <p className="text-xs text-[#525252]">
                {isKo ? '입찰공고 및 MSDS 최신판' : 'Tenders & 2025 MSDS'}
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={onOpenBranches}
            className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 group border border-[#E5E7EB] hover:border-[#0D6F8F] cursor-pointer hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E8F5F9] flex items-center justify-center text-[#0D6F8F] group-hover:bg-[#0D6F8F] group-hover:text-white transition-colors shrink-0">
              <span className="material-symbols-outlined text-[24px]">hub</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#2E2E2E] group-hover:text-[#0D6F8F] transition-colors">
                {isKo ? '전국 사업소' : 'Nationwide Hubs'}
              </h4>
              <p className="text-xs text-[#525252]">
                {isKo ? '17개 직영 물류 기지' : '17 Operational Facilities'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
