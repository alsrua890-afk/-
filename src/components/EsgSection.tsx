import React from 'react';
import { IMAGES } from '../data/mockData';

interface EsgSectionProps {
  currentLang: 'ko' | 'en';
  onOpenArticle: (title: string, category: string, body: string, image: string) => void;
}

export const EsgSection: React.FC<EsgSectionProps> = ({ currentLang, onOpenArticle }) => {
  const isKo = currentLang === 'ko';

  const cards = [
    {
      badge: isKo ? 'KOLAS 규격 분석실' : 'KOLAS Analytical Lab',
      badgeClass: 'bg-[#001332]/80 text-[#f4faff]',
      sub: isKo ? '품질 및 인증현황' : 'Quality & Certified Standards',
      title: isKo ? '정밀 분석 기반의 초고순도 보증 체계' : 'Trace Analytical Purity Guarantee',
      desc: isKo
        ? '가스 크로마토그래피(GC), 수분측정기, 미량산소분석기 등 최첨단 정밀 검사 장비를 통해 입고부터 충전, 출하까지 전 공정 품질을 실시간 검증합니다.'
        : 'Real-time trace moisture, oxygen, and hydrocarbon gas chromatography testing from raw tanker receipt to cleanroom filling and final certification.',
      linkText: isKo ? '공인 시험인증서 및 특허 현황' : 'View Accredited Certifications & Patents',
      image: IMAGES.rndLab,
      detailContent: isKo
        ? '(주)MS가스는 국가공인 KOLAS 규격에 부합하는 클린룸 정밀분석실을 갖추고 있으며, GC-MS, FTIR, 정밀 수분계(H2O < 5ppb), 미량 산소 측정기(O2 < 10ppb)를 상시 운용합니다. 모든 출하 실린더와 탱크로리는 1:1 고유 로트 번호와 공인 시험성적서(CoA)가 발급되어 첨단 반도체 파운드리 및 2차전지 공정에 납품됩니다.'
        : 'MS GAS operates a dedicated cleanroom analytical facility fully aligned with KOLAS international accreditation, conducting trace impurity testing down to single-digit ppb levels for next-generation semiconductor fabs.'
    },
    {
      badge: isKo ? '국책 과제 주관 기업' : 'National Project Lead',
      badgeClass: 'bg-[#38E54D]/25 text-[#0a4d1b] font-bold',
      sub: isKo ? 'ESG 친환경 에너지 실증' : 'ESG Clean Energy Pilot R&D',
      title: isKo ? '암모니아(NH₃) 벙커링 인프라 구축 R&D' : 'Green Ammonia (NH₃) Bunkering Hub',
      desc: isKo
        ? '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발』 및 경남 암모니아 혼소 선박 실증에 참여하여 무탄소 선박 연료 상용화를 앞당깁니다.'
        : 'Spearheading the Ulsan Regulatory Sandbox for Ammonia Truck-to-Ship (TTS) bunkering infrastructure, establishing the safety standards for zero-carbon maritime fuel.',
      linkText: isKo ? '친환경 미래 수소·암모니아 프로젝트' : 'Explore Clean Ammonia & Hydrogen',
      image: IMAGES.ammoniaBunkering,
      detailContent: isKo
        ? '글로벌 해운 탄소중립 규제(IMO 2050)에 선제 대응하기 위해 울산 규제자유특구 주관사로서 대형 암모니아 탱크로리를 활용한 TTS(Truck to Ship) 벙커링 시스템을 성공적으로 실증하고 있습니다. 또한 경상남도와 함께 암모니아-디젤 혼소 친환경 선박의 안전 공급 체계를 구축하고 있습니다.'
        : 'As the lead consortium partner for the Ulsan Free Regulatory Zone, MS GAS is developing Korea’s first commercial cryogenic Ammonia Truck-to-Ship bunkering standards and safety interlock controls for zero-carbon shipping.'
    },
    {
      badge: isKo ? '훈장 수훈 • 사회적 책임' : 'National Order of Merit',
      badgeClass: 'bg-[#001332]/80 text-[#f4faff]',
      sub: isKo ? '경영이념 & 수상 실적' : 'Corporate Governance & Awards',
      title: isKo ? '은탑산업훈장 수훈 • 탄소중립 유공 표창' : 'Silver Tower Order of Industrial Merit',
      desc: isKo
        ? '반세기 동안 축적된 무사고 안전 경영과 지역사회 온실가스 감축 성과를 인정받아 은탑산업훈장 수훈 및 충남도지사 유공자 표창을 수상했습니다.'
        : 'Recognized with the national Silver Tower Medal and Chungnam Governor Commendation for 50 years of incident-free safety management and industrial decarbonization.',
      linkText: isKo ? 'ESG 경영 방침 및 연혁 살펴보기' : 'View ESG Governance & Milestones',
      image: IMAGES.awardBoardroom,
      detailContent: isKo
        ? '1974년 창립 이후 (주)MS가스는 "사람과 안전이 최우선"이라는 경영 철학을 지켜왔습니다. 전 생산기지의 스마트 안전 센서 도입, 친환경 기화기 폐열 회수 장치 적용, 지속가능한 지역사회 고용 창출로 2024년 대한민국 가스안전대상 최고 영예인 "은탑산업훈장"을 수훈하였습니다.'
        : 'Since 1974, MS GAS has embodied the philosophy of "Safety First, People Foremost". Continuous process safety upgrades and smart leak prevention systems earned the corporation the presidential Silver Tower Order of Industrial Merit in 2024.'
    }
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-[#e7f6ff]" id="esg">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00677e]/10 text-[#00677e] text-xs font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00677e]" />
            QUALITY • INNOVATION • ESG
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#001332] tracking-tight leading-tight">
            {isKo ? (
              <>
                지속적인 연구개발을 통한 품질 혁신과<br />
                친환경 미래 에너지 전환을 이끕니다
              </>
            ) : (
              'Leading Quality Innovation Through Continuous R&D and Clean Energy Transition'
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#44474e] leading-relaxed">
            {isKo
              ? '(주)MS가스는 국가 규제자유특구 암모니아 실증 R&D를 선도하며, 전통 가스 제조 유통을 넘어 탄소중립 청정에너지의 새로운 기준을 세우고 있습니다.'
              : 'Pioneering state-backed ammonia marine bunkering and hydrogen carrier R&D to define new benchmarks for zero-carbon clean energy distribution.'}
          </p>
        </div>

        {/* 3-Column Editorial Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => onOpenArticle(card.title, card.sub, card.detailContent, card.image)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-[#E2EBF2] cursor-pointer group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="h-56 relative overflow-hidden bg-[#001332]">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src={card.image}
                  alt={card.title}
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded text-xs font-bold backdrop-blur-md ${card.badgeClass}`}>
                  {card.badge}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-semibold text-[#00677e]">
                    {card.sub}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#001332] group-hover:text-[#00677e] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474e] leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#def1fc]">
                  <span className="inline-flex items-center gap-1.5 text-[#00677e] group-hover:text-[#001332] text-xs sm:text-sm font-bold">
                    <span>{card.linkText}</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
