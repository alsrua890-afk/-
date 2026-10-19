import React, { useState, useRef, useEffect } from 'react';
import { MsGasLogo } from './MsGasLogo';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

interface ChatbotProps {
  currentLang: 'ko' | 'en';
  isOpen: boolean;
  onToggle: () => void;
  onOpenInquiry: () => void;
  onOpenMsds: () => void;
  onOpenBranches: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({
  currentLang,
  isOpen,
  onToggle,
  onOpenInquiry,
  onOpenMsds,
  onOpenBranches,
}) => {
  const isKo = currentLang === 'ko';

  const defaultGreeting: Message = {
    id: 'welcome',
    sender: 'bot',
    text: isKo
      ? `안녕하세요! (주)MS가스 AI 고객지원 어시스턴트 **MS 가스봇**입니다.\n\n반도체 초고순도 특수가스, 산업용 벌크 공급, 암모니아 친환경 에너지, 전국 17개 영업소 및 공급 견적에 대해 무엇이든 물어보세요!`
      : `Hello! Welcome to MS GAS AI Assistant.\n\nHow can I help you today with specialty electronic gases, industrial bulk supply, clean ammonia bunkering, or nationwide deliveries?`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState<Message[]>([defaultGreeting]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPrompts = isKo
    ? [
        '초고순도 아르곤(6N) 스펙 알려줘',
        '탱크로리 벌크 공급 절차는?',
        '암모니아 벙커링 R&D 소개',
        '전국 17개 영업소 연락처',
        '공급 견적 신청 방법',
      ]
    : [
        'Ultra-pure Argon (6N) specs',
        'Bulk Tank Lorry Refill procedure',
        'Ammonia Bunkering Project',
        '17 Branch Locations & Phones',
        'How to request quotation',
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: nextMessages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      if (!res.ok) throw new Error('API request failed');
      const data = await res.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || (isKo ? '응답을 준비 중입니다. 대표전화 051-314-1000으로 문의해 주세요.' : 'Ready to help. Please call +82-51-314-1000.'),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      // Local instant knowledge engine fallback
      const lower = text.toLowerCase();
      let reply = '';

      if (lower.includes('아르곤') || lower.includes('특수가스') || lower.includes('반도체') || lower.includes('순도') || lower.includes('argon')) {
        reply = isKo
          ? `(주)MS가스의 **초고순도 특수가스** 사양 안내입니다.\n\n• **순도**: 99.9999% (6N) ~ 99.99999% (7N) 극미량 수분·산소 제어\n• **주요 품목**: 고순도 아르곤(Ar), 헬륨(He), 실란(SiH4), 에칭 가스, 챔버 클리닝 가스\n• **공급 규격**: 47L 고압 용기, Y-Cylinder, ISO Module 컨테이너, 초저온 번들\n• **품질 보증**: 공인 KOLAS 규격 분석실에서 GC-MS 전수검사 후 개별 시험성적서(CoA)가 발급됩니다.`
          : `MS GAS **Specialty Electronic Gas** Overview:\n\n• **Purity**: 99.9999% (6N) to 99.99999% (7N) trace impurity control\n• **Products**: Ultra-pure Argon (Ar), Helium (He), Silane (SiH4), Etching & Chamber Cleaning gases\n• **Packages**: 47L cylinders, Y-cylinders, ISO module containers, cryogenic bundles\n• **Quality**: 100% verified via KOLAS-certified GC-MS analysis with individual CoA.`;
      } else if (lower.includes('탱크로리') || lower.includes('벌크') || lower.includes('산업용') || lower.includes('산소') || lower.includes('질소') || lower.includes('탄산') || lower.includes('bulk')) {
        reply = isKo
          ? `(주)MS가스의 **산업용 벌크 가스 공급 시스템** 안내입니다.\n\n• **주요 가스**: 액체산소(LOX), 액체질소(LIN), 액체아르곤(LAR), 액체탄산(LCO2)\n• **운송 능력**: 전국 8개 권역 직결 대형 초저온 탱크로리 선단 24시간 대기\n• **24/7 스마트 텔레메트리**: 고객사 저장탱크의 잔량과 내압을 무선 자동 감지하여 재고 소진 전 선제적 익일 직배송을 수행합니다 (정시 도착율 99.8%).\n• **설비 지원**: 고객사 플랜트 최적화 저장탱크 및 기화기 시공 컨설팅 제공`
          : `MS GAS **Industrial Bulk Cryogenic Supply**:\n\n• **Products**: Liquid Oxygen (LOX), Nitrogen (LIN), Argon (LAR), Carbon Dioxide (LCO2)\n• **Fleet**: Dedicated nationwide fleet of cryogenic tank lorries\n• **24/7 Smart Telemetry**: Wireless monitoring of on-site tank levels & pressure with proactive next-day dispatch (99.8% on-time record).`;
      } else if (lower.includes('암모니아') || lower.includes('벙커링') || lower.includes('esg') || lower.includes('친환경') || lower.includes('ammonia')) {
        reply = isKo
          ? `(주)MS가스의 **친환경 미래 에너지 & 암모니아 벙커링 R&D** 안내입니다.\n\n• **울산 규제자유특구 주관**: 『암모니아 TTS(Truck to Ship) 벙커링 인프라 구축 및 기자재·표준 개발』 국책 R&D 실증을 주관하고 있습니다.\n• **경남 친환경 선박 실증**: 암모니아 혼소 추진선박의 해상 벙커링 안전체계 구축에 참여 중입니다.\n• **국가 훈장 수훈**: 반세기 무사고 안전 경영과 탄소중립 실천 공적으로 2024년 대한민국 가스안전대상 **은탑산업훈장**을 수훈하였습니다.`
          : `MS GAS **Green Ammonia Bunkering & Clean Transition**:\n\n• **Ulsan Regulatory Sandbox**: Spearheading Korea's first Ammonia Truck-to-Ship (TTS) bunkering standard.\n• **Gyeongnam Maritime Pilot**: Dual-fuel ammonia vessel safety verification.\n• **Honors**: Conferred the presidential Silver Tower Order of Industrial Service Merit for 50 years of incident-free leadership.`;
      } else if (lower.includes('영업소') || lower.includes('지점') || lower.includes('위치') || lower.includes('전화') || lower.includes('연락처') || lower.includes('branches')) {
        reply = isKo
          ? `(주)MS가스의 **전국 17개 거점 직영 공급망** 안내입니다.\n\n• **대표 전화**: 051-314-1000 (평일 08:30 ~ 17:30)\n• **영남권 본부**: 부산 사상 본사, 사하 공장, 울산 온산 터미널, 창원 지사, 양산 출장소\n• **수도권·중부**: 경기 화성 반도체 공급기지, 평택 물류소, 인천 항만 저장소, 당진/서산 지사\n• **호남·서남권**: 광주 하남산단 지사, 여수 국가산단 스테이션, 군산 새만금 배터리지점\n\n홈페이지 하단의 **오시는 길**을 클릭하시면 각 지점별 상세 주소와 저장 탱크 용량을 바로 확인하실 수 있습니다.`
          : `MS GAS **Nationwide 17 Branch Depots**:\n\n• **Hotline**: +82-51-314-1000 (Mon-Fri 08:30-17:30 KST)\n• **Yeongnam HQ**: Busan Sasang, Saha, Ulsan Onsan, Changwon, Yangsan\n• **Metropolitan/Central**: Hwaseong, Pyeongtaek, Incheon, Dangjin/Seosan\n• **Honam**: Gwangju Hanam, Yeosu, Gunsan Saemangeum.`;
      } else if (lower.includes('견적') || lower.includes('가격') || lower.includes('상담') || lower.includes('주문') || lower.includes('quote')) {
        reply = isKo
          ? `(주)MS가스의 **공급 견적 및 기술 컨설팅 접수** 안내입니다.\n\n• **간편 온라인 접수**: 홈페이지 하단의 '간편 온라인 상담 접수' 폼에 기업명과 연락처, 희망 가스 종류를 남겨주시면 담당 전문 엔지니어가 영업일 기준 2시간 내로 맞춤 견적을 회신드립니다.\n• **직통 전화**: 051-314-1000 / 이메일: info@msgas.co.kr\n• 필요 유량(Nm³/월)과 현장 설치 조건을 알려주시면 가장 최적화된 벌크 공급 솔루션을 안내해 드립니다.`
          : `MS GAS **Quotation & Engineering Consultation**:\n\n• Submit a request via our fast consultation form at the bottom of the page.\n• Direct Email: info@msgas.co.kr | Phone: +82-51-314-1000\n• A specialized engineer will reply with customized commercial and technical terms within 2 business hours.`;
      } else {
        reply = isKo
          ? `반갑습니다! (주)MS가스 AI 고객지원 어시스턴트입니다.\n\n어떤 내용이 필요하신가요?\n• **초고순도 특수가스** (6N 아르곤, 헬륨, 실란, 에칭가스)\n• **산업용 벌크 공급** (탱크로리 액체산소, 질소, 아르곤, 탄산)\n• **암모니아 벙커링 R&D** 및 ESG 경영\n• **전국 17개 거점 영업소** 위치 및 연락처\n• **맞춤 공급 견적 신청** 및 MSDS 다운로드\n\n궁금하신 점을 편하게 입력해 주시면 신속히 안내해 드리겠습니다.`
          : `Welcome to MS GAS AI Assistant!\n\nPlease ask about:\n• Ultra-high purity specialty gases (6N Ar, He, SiH4)\n• Industrial bulk supply (cryogenic LOX, LIN, LAR, CO2)\n• Ammonia marine bunkering infrastructure\n• 17 nationwide branches & depots\n• Technical quotation & MSDS files.`;
      }

      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([defaultGreeting]);
  };

  // Simple Markdown renderer for bullet points and bolding
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, lIdx) => {
      // Process bold markers (**text**)
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-extrabold text-[#001332]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
        return (
          <div key={lIdx} className="flex items-start gap-1.5 my-0.5">
            <span className="text-[#00677e] font-bold text-sm leading-snug">•</span>
            <span className="leading-relaxed flex-1">
              {line.replace(/^[-•]\s*/, '').split(/(\*\*.*?\*\*)/g).map((part, pIdx) =>
                part.startsWith('**') && part.endsWith('**') ? (
                  <strong key={pIdx} className="font-bold text-[#001332]">
                    {part.slice(2, -2)}
                  </strong>
                ) : (
                  part
                )
              )}
            </span>
          </div>
        );
      }

      return (
        <p key={lIdx} className={`${line.trim() === '' ? 'h-2' : 'my-0.5 leading-relaxed'}`}>
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        {!isOpen && (
          <div className="bg-[#001332] text-white text-xs px-3 py-1.5 rounded-full shadow-lg border border-[#5bd8fe]/30 animate-bounce hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38E54D]" />
            <span>{isKo ? '실시간 가스 상담 챗봇' : 'AI Gas Assistant'}</span>
          </div>
        )}

        <button
          type="button"
          onClick={onToggle}
          title={isKo ? 'MS가스 AI 챗봇 열기' : 'Open MS Gas Chatbot'}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-[#001332] hover:bg-[#002b47] rotate-90 scale-95'
              : 'bg-gradient-to-r from-[#00677e] to-[#001332] hover:scale-110 shadow-[#00677e]/30'
          }`}
        >
          {isOpen ? (
            <span className="material-symbols-outlined text-[26px]">close</span>
          ) : (
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">smart_toy</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#38E54D] rounded-full border-2 border-[#001332]" />
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-[#E2EBF2] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6">
          {/* Header */}
          <div className="bg-[#001332] text-white p-4 flex items-center justify-between border-b border-[#5bd8fe]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-inner">
                <MsGasLogo height={20} showStripe={false} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm text-white">
                    {isKo ? 'MS 가스봇 (AI 어시스턴트)' : 'MS Gas AI Assistant'}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#38E54D] animate-ping" />
                </div>
                <p className="text-[11px] text-[#cadde8]">
                  {isKo ? '24시간 고압·특수가스 기술 상담' : '24/7 Intelligent Gas Consultant'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title={isKo ? '대화 초기화' : 'Reset Chat'}
                className="w-8 h-8 rounded-lg hover:bg-white/10 text-[#cadde8] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              </button>
              <button
                type="button"
                onClick={onToggle}
                className="w-8 h-8 rounded-lg hover:bg-white/10 text-[#cadde8] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>

          {/* Quick Action Navigation Bar */}
          <div className="bg-[#f4faff] px-3 py-2 border-b border-[#def1fc] flex items-center gap-2 overflow-x-auto text-[11px] whitespace-nowrap scrollbar-none">
            <button
              type="button"
              onClick={() => {
                onOpenInquiry();
                onToggle();
              }}
              className="px-2.5 py-1 rounded bg-white hover:bg-[#def1fc] text-[#00677e] font-bold border border-[#def1fc] flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">edit_note</span>
              <span>{isKo ? '온라인 견적 문의' : 'Request Quote'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenMsds();
                onToggle();
              }}
              className="px-2.5 py-1 rounded bg-white hover:bg-[#def1fc] text-[#00677e] font-bold border border-[#def1fc] flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">download</span>
              <span>{isKo ? 'MSDS 자료실' : 'MSDS Archive'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenBranches();
                onToggle();
              }}
              className="px-2.5 py-1 rounded bg-white hover:bg-[#def1fc] text-[#00677e] font-bold border border-[#def1fc] flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">hub</span>
              <span>{isKo ? '17개 영업소' : '17 Branches'}</span>
            </button>
          </div>

          {/* Message Thread Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#f4faff]/50 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#001332] text-white rounded-tr-xs'
                        : 'bg-white text-[#0b1e26] border border-[#E2EBF2] rounded-tl-xs'
                    }`}
                  >
                    {isUser ? msg.text : renderFormattedText(msg.text)}
                  </div>
                  <span className="text-[10px] text-[#74777f] mt-1 px-1">{msg.time}</span>
                </div>
              );
            })}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#00677e] bg-white p-3 rounded-2xl border border-[#def1fc] max-w-[80%] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00677e] animate-ping" />
                <span>{isKo ? 'MS 가스봇이 답변을 작성 중입니다...' : 'Formulating response...'}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="p-2.5 bg-white border-t border-[#def1fc]">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  disabled={loading}
                  className="px-2.5 py-1 rounded-full bg-[#f4faff] hover:bg-[#def1fc] text-[#00677e] text-[11px] font-semibold whitespace-nowrap border border-[#def1fc] transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-[#def1fc] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder={
                isKo
                  ? '궁금하신 가스 종류나 사양을 질문하세요...'
                  : 'Ask about gas purity, delivery, or pricing...'
              }
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#f4faff] border border-[#def1fc] text-xs sm:text-sm text-[#0b1e26] focus:outline-none focus:ring-2 focus:ring-[#5bd8fe] disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-xl bg-[#001332] hover:bg-[#00677e] disabled:bg-[#def1fc] disabled:text-[#74777f] text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
