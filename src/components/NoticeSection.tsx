import React from 'react';
import { NOTICES_DATA, NoticeItem } from '../data/mockData';

interface NoticeSectionProps {
  currentLang: 'ko' | 'en';
  onSelectNotice: (notice: NoticeItem) => void;
  onOpenMsds: () => void;
}

export const NoticeSection: React.FC<NoticeSectionProps> = ({
  currentLang,
  onSelectNotice,
  onOpenMsds,
}) => {
  const isKo = currentLang === 'ko';

  return (
    <section className="w-full py-20 md:py-28 bg-[#F6F8FA] border-b border-[#E5E7EB]" id="notices">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F9] text-[#0D6F8F] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0D6F8F]" />
              PRESS &amp; PUBLIC NOTICES
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E2E2E] tracking-tight leading-tight">
              {isKo ? (
                <>
                  MS가스의 새로운 소식과<br />
                  <span className="text-[#0D6F8F]">입찰·연구 공고</span>를 전달드립니다
                </>
              ) : (
                'Latest Corporate Press Releases & Official R&D Tender Announcements'
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#525252]">
              {isKo
                ? '투명한 기업 운영과 산학연 연구 개발 현황을 신속하고 정확하게 공유합니다.'
                : 'Providing transparent operational updates, public RFP bidding tenders, and safety directives.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectNotice(NOTICES_DATA[0])}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-[#F6F8FA] border border-[#E5E7EB] text-[#2E2E2E] hover:text-[#0D6F8F] transition-colors font-bold text-xs sm:text-sm self-start md:self-auto cursor-pointer shadow-sm"
          >
            <span>{isKo ? '공지사항 전체보기' : 'View All Notices'}</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        {/* 6 Real Notice Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTICES_DATA.map((notice) => {
            const isMsdsCard = notice.id === 'notice-6';

            return (
              <div
                key={notice.id}
                onClick={() => {
                  if (isMsdsCard) {
                    onOpenMsds();
                  } else {
                    onSelectNotice(notice);
                  }
                }}
                className={`group block p-6 sm:p-7 rounded-2xl transition-all duration-300 border cursor-pointer hover:-translate-y-1 ${
                  isMsdsCard
                    ? 'bg-[#E8F5F9] hover:bg-[#d8eef5] border-[#0D6F8F]/30 shadow-sm hover:shadow-lg flex flex-col justify-between'
                    : 'bg-white hover:bg-white shadow-sm hover:shadow-xl border-[#E5E7EB] hover:border-[#0D6F8F]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className={`px-2.5 py-0.5 rounded-md ${notice.badgeClass}`}>
                      {notice.category}
                    </span>
                    <span className="text-[#8E8E8E]">{notice.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#2E2E2E] group-hover:text-[#0D6F8F] transition-colors line-clamp-2 leading-snug">
                    {isKo ? notice.titleKo : notice.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#525252] line-clamp-2 leading-relaxed">
                    {isKo ? notice.summaryKo : notice.summaryEn}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[#0D6F8F] group-hover:text-[#094E65] text-xs sm:text-sm font-bold">
                  <span>{isKo ? notice.linkTextKo : notice.linkTextEn}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    {isMsdsCard ? 'download' : 'arrow_forward'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
