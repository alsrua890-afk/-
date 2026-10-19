import React, { useState } from 'react';
import {
  ProductItem,
  NoticeItem,
  HubItem,
  HUBS_DATA,
  MSDS_DATABASE,
  TELEMETRY_SIM_TANKS,
  IMAGES,
} from '../data/mockData';

interface ModalsProps {
  currentLang: 'ko' | 'en';
  // Product Modal
  selectedProduct: ProductItem | null;
  onCloseProduct: () => void;
  onOpenInquiryForProduct: (productName: string) => void;

  // Notice Modal
  selectedNotice: NoticeItem | null;
  onCloseNotice: () => void;

  // MSDS Modal
  showMsdsModal: boolean;
  onCloseMsds: () => void;

  // Branch Directory Modal
  showBranchesModal: boolean;
  selectedHub: HubItem | null;
  onCloseBranches: () => void;

  // Telemetry Modal
  showTelemetryModal: boolean;
  onCloseTelemetry: () => void;

  // Company Overview Modal
  showCompanyModal: boolean;
  onCloseCompany: () => void;

  // Catalog Modal
  showCatalogModal: boolean;
  onCloseCatalog: () => void;

  // Legal / General Info Modal
  legalModalData: { title: string; content: string } | null;
  onCloseLegal: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  currentLang,
  selectedProduct,
  onCloseProduct,
  onOpenInquiryForProduct,
  selectedNotice,
  onCloseNotice,
  showMsdsModal,
  onCloseMsds,
  showBranchesModal,
  selectedHub,
  onCloseBranches,
  showTelemetryModal,
  onCloseTelemetry,
  showCompanyModal,
  onCloseCompany,
  showCatalogModal,
  onCloseCatalog,
  legalModalData,
  onCloseLegal,
}) => {
  const isKo = currentLang === 'ko';

  // MSDS search filter
  const [msdsSearch, setMsdsSearch] = useState('');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // Active Hub in branches modal
  const [activeBranchHubId, setActiveBranchHubId] = useState<string>(
    selectedHub ? selectedHub.id : HUBS_DATA[0].id
  );

  const triggerDownload = (filename: string) => {
    setDownloadToast(`${filename} 다운로드가 완료되었습니다.`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const filteredMsds = MSDS_DATABASE.filter(
    (item) =>
      item.gasNameKo.toLowerCase().includes(msdsSearch.toLowerCase()) ||
      item.gasNameEn.toLowerCase().includes(msdsSearch.toLowerCase()) ||
      item.formula.toLowerCase().includes(msdsSearch.toLowerCase()) ||
      item.casNo.includes(msdsSearch)
  );

  const currentDisplayHub =
    HUBS_DATA.find((h) => h.id === activeBranchHubId) || HUBS_DATA[0];

  return (
    <>
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-[100] bg-[#001332] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#38E54D]/40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <span className="material-symbols-outlined text-[#38E54D] text-[20px]">
            check_circle
          </span>
          <span className="text-xs sm:text-sm font-semibold">{downloadToast}</span>
        </div>
      )}

      {/* 1. Product Detail & Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2EBF2] p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-[#def1fc] pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#00677e]/10 text-[#00677e] text-xs font-bold">
                  {selectedProduct.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-[#001332] mt-2">
                  {isKo ? selectedProduct.titleKo : selectedProduct.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#00677e] font-semibold">
                  {isKo ? selectedProduct.subtitleKo : selectedProduct.subtitleEn}
                </p>
              </div>
              <button
                type="button"
                onClick={onCloseProduct}
                className="w-8 h-8 rounded-full bg-[#def1fc] flex items-center justify-center text-[#001332] hover:bg-[#d8ebf6] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <p className="text-sm text-[#44474e] leading-relaxed">
              {isKo ? selectedProduct.descKo : selectedProduct.descEn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f4faff] p-4 rounded-xl border border-[#def1fc]">
              <div>
                <span className="text-xs font-bold text-[#00677e] block mb-1">
                  {isKo ? '보증 순도 및 등급' : 'Guaranteed Purity'}
                </span>
                <span className="text-sm font-mono font-bold text-[#001332]">
                  {selectedProduct.purity}
                </span>
              </div>
              <div>
                <span className="text-xs font-bold text-[#00677e] block mb-1">
                  {isKo ? '공급 패키지 규격' : 'Supply Package Formats'}
                </span>
                <ul className="text-xs text-[#44474e] list-disc list-inside space-y-0.5">
                  {selectedProduct.supplyMethods.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-[#001332] block mb-2 uppercase tracking-wider">
                {isKo ? '주요 산업 적용 분야' : 'Key Industrial Applications'}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.applications.map((app, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-[#def1fc] text-[#001332] text-xs font-semibold"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#def1fc]">
              <button
                type="button"
                onClick={() =>
                  triggerDownload(
                    `MSGAS_${selectedProduct.id.toUpperCase()}_SPEC_2025.pdf`
                  )
                }
                className="flex-1 py-3 rounded-lg bg-[#def1fc] hover:bg-[#d8ebf6] text-[#001332] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>{isKo ? '공식 시험성적서(CoA) 및 스펙 다운로드' : 'Download Spec & CoA Sheet'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  onCloseProduct();
                  onOpenInquiryForProduct(
                    isKo ? selectedProduct.titleKo : selectedProduct.titleEn
                  );
                }}
                className="flex-1 py-3 rounded-lg bg-[#001332] hover:bg-[#00677e] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>{isKo ? '본 제품 맞춤 견적 문의' : 'Inquire for This Gas'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Notice / Tender Document Reader Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2EBF2] p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-[#def1fc] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${selectedNotice.badgeClass}`}>
                    {selectedNotice.category}
                  </span>
                  <span className="text-xs text-[#44474e]">{selectedNotice.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#001332] mt-2 leading-snug">
                  {isKo ? selectedNotice.titleKo : selectedNotice.titleEn}
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseNotice}
                className="w-8 h-8 rounded-full bg-[#def1fc] flex items-center justify-center text-[#001332] hover:bg-[#d8ebf6] transition-colors shrink-0 ml-3"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#44474e] leading-relaxed">
              <p className="font-semibold text-[#001332]">
                {isKo ? selectedNotice.summaryKo : selectedNotice.summaryEn}
              </p>

              {selectedNotice.details && (
                <div className="space-y-3 bg-[#f4faff] p-5 rounded-xl border border-[#def1fc]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="font-bold text-[#00677e] block">공고 주관 부서</span>
                      <span className="text-[#001332]">{selectedNotice.details.organization}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#00677e] block">사업 기간</span>
                      <span className="text-[#001332]">{selectedNotice.details.period}</span>
                    </div>
                    {selectedNotice.details.budget && (
                      <div>
                        <span className="font-bold text-[#00677e] block">추정 예산</span>
                        <span className="text-[#001332] font-semibold">{selectedNotice.details.budget}</span>
                      </div>
                    )}
                    <div>
                      <span className="font-bold text-[#00677e] block">과업 문의처</span>
                      <span className="text-[#001332]">{selectedNotice.details.contactPerson}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-[#00677e] block text-xs mb-1.5">
                      참가 자격 및 과업 요구사항
                    </span>
                    <ul className="text-xs text-[#44474e] space-y-1 list-disc list-inside">
                      {selectedNotice.details.requirements.map((req, rIdx) => (
                        <li key={rIdx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#def1fc]">
              {selectedNotice.details?.attachmentName ? (
                <button
                  type="button"
                  onClick={() => triggerDownload(selectedNotice.details!.attachmentName)}
                  className="flex-1 py-3 rounded-lg bg-[#001332] hover:bg-[#00677e] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>{selectedNotice.details.attachmentName} 다운로드</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => triggerDownload('MS가스_공식보도자료.pdf')}
                  className="flex-1 py-3 rounded-lg bg-[#001332] hover:bg-[#00677e] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>관련 공문 및 자료 다운로드</span>
                </button>
              )}
              <button
                type="button"
                onClick={onCloseNotice}
                className="px-6 py-3 rounded-lg bg-[#def1fc] text-[#001332] font-bold text-xs sm:text-sm hover:bg-[#d8ebf6] transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. MSDS Searchable Archive Modal */}
      {showMsdsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#E2EBF2]">
            <div className="p-6 border-b border-[#def1fc] flex items-center justify-between bg-[#f4faff]">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-[#001332] text-white text-xs font-bold">
                  KOSHA / OSHA COMPLIANT
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#001332]">
                  {isKo ? '전 품목 물질안전보건자료(MSDS) 아카이브' : 'Official MSDS Database'}
                </h3>
                <p className="text-xs text-[#44474e]">
                  {isKo
                    ? '가스별 화학물질 식별번호, 유해위험성 분류 및 최신 개정본을 다운로드하실 수 있습니다.'
                    : 'Download official material safety data sheets 24/7 compliant with chemical control acts.'}
                </p>
              </div>
              <button
                type="button"
                onClick={onCloseMsds}
                className="w-8 h-8 rounded-full bg-[#def1fc] flex items-center justify-center text-[#001332] hover:bg-[#d8ebf6] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b border-[#def1fc] bg-white">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-3 text-[#44474e] text-[20px]">
                  search
                </span>
                <input
                  type="text"
                  placeholder={
                    isKo
                      ? '가스 품명, 화학식(O2, N2, NH3...), CAS 번호 검색'
                      : 'Search gas name, formula (O2, Ar, NH3), CAS number...'
                  }
                  value={msdsSearch}
                  onChange={(e) => setMsdsSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#def1fc] bg-[#f4faff] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5bd8fe]"
                />
              </div>
            </div>

            {/* Table Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="divide-y divide-[#def1fc] border border-[#def1fc] rounded-xl overflow-hidden">
                {filteredMsds.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white hover:bg-[#f4faff] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base text-[#001332]">
                          {isKo ? item.gasNameKo : item.gasNameEn}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#def1fc] text-[#00677e] font-mono text-xs font-bold">
                          {item.formula}
                        </span>
                      </div>
                      <div className="text-xs text-[#44474e] flex flex-wrap gap-x-4 gap-y-1 font-mono">
                        <span>CAS: {item.casNo}</span>
                        <span>UN: {item.unNo}</span>
                        <span>순도: {item.purity}</span>
                        <span className="text-[#ba1a1a] font-sans font-semibold">
                          {item.hazardClass}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        triggerDownload(
                          `MSGAS_MSDS_${item.formula.replace(/[^a-zA-Z0-9]/g, '')}_2025.pdf`
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#001332] text-white hover:bg-[#00677e] text-xs font-bold transition-all self-start sm:self-auto cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span>PDF 다운로드 ({item.fileSize})</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-[#def1fc] bg-[#f4faff] flex justify-end">
              <button
                type="button"
                onClick={onCloseMsds}
                className="px-5 py-2 rounded-lg bg-[#def1fc] text-[#001332] text-xs font-bold hover:bg-[#d8ebf6] transition-colors cursor-pointer"
              >
                창 닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Branch Directory (전국 17개 거점 영업소) Modal */}
      {showBranchesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#E2EBF2]">
            <div className="p-6 border-b border-[#def1fc] flex items-center justify-between bg-[#001332] text-white">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-[#5bd8fe]/20 text-[#5bd8fe] text-xs font-bold">
                  NATIONWIDE NETWORK
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {isKo ? '전국 8개 권역 • 17개 직영 영업소 및 충전소' : 'Nationwide 17 Branch Depots & Cryogenic Filling Stations'}
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseBranches}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Region selector tabs */}
            <div className="flex border-b border-[#def1fc] bg-[#f4faff] overflow-x-auto p-2 gap-2">
              {HUBS_DATA.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  onClick={() => setActiveBranchHubId(hub.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeBranchHubId === hub.id
                      ? 'bg-[#001332] text-white shadow-sm'
                      : 'bg-white text-[#44474e] hover:bg-[#def1fc]'
                  }`}
                >
                  {isKo ? hub.nameKo : hub.nameEn}
                </button>
              ))}
            </div>

            {/* Branches List Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="p-4 bg-[#e7f6ff] rounded-xl border border-[#5bd8fe]/30 space-y-1">
                <h4 className="text-base font-bold text-[#001332]">
                  {isKo ? currentDisplayHub.nameKo : currentDisplayHub.nameEn}
                </h4>
                <p className="text-xs text-[#00677e] font-semibold">
                  {isKo ? currentDisplayHub.areaKo : currentDisplayHub.areaEn}
                </p>
                <p className="text-xs text-[#44474e]">
                  {isKo ? currentDisplayHub.descKo : currentDisplayHub.descEn}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentDisplayHub.branches.map((branch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#def1fc] bg-white hover:border-[#00677e] transition-colors space-y-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="font-bold text-sm text-[#001332]">{branch.name}</h5>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-[#def1fc] text-[#00677e] font-semibold">
                        저장 용량: {branch.capacity}
                      </span>
                    </div>
                    <div className="text-xs text-[#44474e] space-y-1">
                      <div className="flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-[#00677e] shrink-0">
                          location_on
                        </span>
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-[#00677e] shrink-0">
                          call
                        </span>
                        <a
                          href={`tel:${branch.tel}`}
                          className="font-bold text-[#001332] hover:text-[#00677e] font-mono"
                        >
                          {branch.tel}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#00677e]">
                        <span className="material-symbols-outlined text-[14px]">stars</span>
                        <span>{branch.specialty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-[#def1fc] bg-[#f4faff] flex items-center justify-between">
              <span className="text-xs text-[#44474e]">
                긴급 고압가스 공급 요청 직통: <strong>051-314-1000</strong>
              </span>
              <button
                type="button"
                onClick={onCloseBranches}
                className="px-5 py-2 rounded-lg bg-[#001332] text-white text-xs font-bold hover:bg-[#00677e] transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Live Telemetry IoT Tank Monitor Modal */}
      {showTelemetryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#001332] text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#5bd8fe]/30">
            <div className="p-6 border-b border-[#5bd8fe]/20 flex items-center justify-between bg-[#0f284e]/70">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38E54D] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38E54D]" />
                  </span>
                  <span className="text-xs font-mono font-bold text-[#38E54D]">
                    REAL-TIME TELEMETRY SYSTEM ACTIVE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#f4faff]">
                  MS 전국 초저온 저장설비 &amp; 탱크로리 실시간 관제
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseTelemetry}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-6">
              {/* Summary Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#0f284e]/50 border border-[#5bd8fe]/15 text-xs">
                <div>
                  <span className="text-[#cadde8] block">관제 모니터링 대상</span>
                  <span className="text-lg font-bold text-white font-mono">1,480 Sites</span>
                </div>
                <div>
                  <span className="text-[#cadde8] block">실시간 운행 탱크로리</span>
                  <span className="text-lg font-bold text-[#5bd8fe] font-mono">68 대 (전원 정상)</span>
                </div>
                <div>
                  <span className="text-[#cadde8] block">평균 공급 정시율</span>
                  <span className="text-lg font-bold text-[#38E54D] font-mono">99.8%</span>
                </div>
                <div>
                  <span className="text-[#cadde8] block">긴급 출동 대기조</span>
                  <span className="text-lg font-bold text-white font-mono">17개 전 지점</span>
                </div>
              </div>

              {/* Tank Cards */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5bd8fe]">
                  고객사 거점별 초저온 저장탱크 센서 데이터 스트림
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TELEMETRY_SIM_TANKS.map((tank) => (
                    <div
                      key={tank.tankId}
                      className="p-5 rounded-xl bg-[#0f284e]/40 border border-[#5bd8fe]/20 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#f4faff]">{tank.name}</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#38E54D]/15 text-[#38E54D]">
                          {tank.status}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#cadde8]">잔량 레벨</span>
                          <span className="text-white font-bold">{tank.currentLevelPct}%</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              tank.currentLevelPct > 70
                                ? 'bg-[#5bd8fe]'
                                : tank.currentLevelPct > 30
                                ? 'bg-[#38E54D]'
                                : 'bg-[#ba1a1a]'
                            }`}
                            style={{ width: `${tank.currentLevelPct}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-[11px] font-mono pt-1 text-[#cadde8]">
                        <div className="bg-[#001332]/60 p-2 rounded">
                          <span className="block text-[10px] text-[#5bd8fe]">내압(Kgf)</span>
                          <span className="font-bold text-white">{tank.pressureKgf}</span>
                        </div>
                        <div className="bg-[#001332]/60 p-2 rounded">
                          <span className="block text-[10px] text-[#5bd8fe]">온도(°C)</span>
                          <span className="font-bold text-white">{tank.temperatureC}</span>
                        </div>
                        <div className="bg-[#001332]/60 p-2 rounded">
                          <span className="block text-[10px] text-[#5bd8fe]">재충전 예상</span>
                          <span className="font-bold text-[#38E54D]">{tank.estDaysLeft}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#5bd8fe]/20 bg-[#0f284e]/70 flex justify-between items-center text-xs text-[#cadde8]">
              <span>실시간 10초 주기 IoT 폴링 연동 중</span>
              <button
                type="button"
                onClick={onCloseTelemetry}
                className="px-5 py-2 rounded-lg bg-[#5bd8fe] text-[#001332] font-bold hover:bg-white transition-colors cursor-pointer"
              >
                관제창 닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Company Overview & History Modal */}
      {showCompanyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2EBF2] p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-[#def1fc] pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#00677e]/10 text-[#00677e] text-xs font-bold">
                  ABOUT (주)MS가스
                </span>
                <h3 className="text-2xl font-extrabold text-[#001332] mt-2">
                  1974년 창립 • 50년의 신뢰와 도전
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseCompany}
                className="w-8 h-8 rounded-full bg-[#def1fc] flex items-center justify-center text-[#001332] hover:bg-[#d8ebf6] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#44474e] leading-relaxed">
              <p>
                <strong>(주)MS가스</strong>는 1974년 창립 이래 대한민국 산업 발전의 역사를 함께해 온 고압가스 및 특수가스 전문 제조·엔지니어링 기업입니다.
              </p>
              <p>
                부산 본사를 필두로 전국 8개 권역, 17개 직영 영업소를 거느린 견고한 자체 운송 인프라를 통해 반도체, 조선, 화학, 철강, 의료 등 핵심 기간산업에 초고순도 가스를 안정적으로 공급하고 있습니다.
              </p>
              <div className="p-4 bg-[#f4faff] rounded-xl border border-[#def1fc] space-y-2 text-xs">
                <h4 className="font-bold text-[#001332] text-sm">연혁 및 주요 마일스톤</h4>
                <p>• <strong>1974년</strong>: 문수가스 창립</p>
                <p>• <strong>1998년</strong>: (주)MS가스 법인 전환 및 대용량 초저온 저장시설 준공</p>
                <p>• <strong>2012년</strong>: 반도체 전용 6N 초고순도 특수가스 라인 및 클린룸 완공</p>
                <p>• <strong>2020년</strong>: 울산 친환경 암모니아 규제자유특구 TTS 벙커링 국책 R&amp;D 주관</p>
                <p>• <strong>2024년</strong>: 가스안전대상 최고 훈격 <strong>‘은탑산업훈장’</strong> 수훈</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#def1fc] flex justify-end">
              <button
                type="button"
                onClick={onCloseCompany}
                className="px-6 py-2.5 rounded-lg bg-[#001332] text-white font-bold text-xs sm:text-sm hover:bg-[#00677e] transition-colors cursor-pointer"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. Catalog Preview / Download Modal */}
      {showCatalogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-[#E2EBF2] p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-[#def1fc] pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#00677e]/10 text-[#00677e] text-xs font-bold">
                  OFFICIAL 2025 CATALOG
                </span>
                <h3 className="text-xl font-extrabold text-[#001332] mt-2">
                  (주)MS가스 종합 제품 카탈로그
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseCatalog}
                className="w-8 h-8 rounded-full bg-[#def1fc] flex items-center justify-center text-[#001332] hover:bg-[#d8ebf6] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#44474e]">
              <p>카탈로그에는 다음 내용이 상세 수록되어 있습니다:</p>
              <ul className="list-disc list-inside space-y-1 bg-[#f4faff] p-4 rounded-xl border border-[#def1fc] text-xs">
                <li>전자급 반도체 초고순도 가스 정밀 스펙표</li>
                <li>산업용 액체산소·질소·아르곤·탄산 벌크 공급 규격</li>
                <li>의료용 가스 MFDS GMP 허가 인증 품목</li>
                <li>표준 혼합가스 배합 가능 농도 범위 및 실린더 규격</li>
                <li>초저온 배관 시공 및 가스퍼지 용역 프로세스</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  onCloseCatalog();
                  triggerDownload('MSGAS_2025_Total_Product_Catalog.pdf');
                }}
                className="flex-1 py-3 rounded-lg bg-[#001332] hover:bg-[#00677e] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span>PDF 카탈로그 다운로드 (18.4 MB)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. Legal / Article Modal */}
      {legalModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-[#E2EBF2] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#def1fc] pb-3">
              <h3 className="text-lg font-bold text-[#001332]">{legalModalData.title}</h3>
              <button
                type="button"
                onClick={onCloseLegal}
                className="w-8 h-8 rounded-full bg-[#def1fc] flex items-center justify-center text-[#001332] hover:bg-[#d8ebf6] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed whitespace-pre-line">
              {legalModalData.content}
            </p>
            <div className="pt-3 border-t border-[#def1fc] flex justify-end">
              <button
                type="button"
                onClick={onCloseLegal}
                className="px-5 py-2 rounded-lg bg-[#001332] text-white text-xs font-bold hover:bg-[#00677e] transition-colors cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
