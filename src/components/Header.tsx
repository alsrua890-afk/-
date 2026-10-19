import React, { useState } from 'react';
import { MsGasLogo } from './MsGasLogo';

interface HeaderProps {
  currentLang: 'ko' | 'en';
  onToggleLang: (lang: 'ko' | 'en') => void;
  onOpenInquiry: () => void;
  onOpenPortal: () => void;
  onOpenCompany: () => void;
  onOpenBranches: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenInquiry,
  onOpenPortal,
  onOpenCompany,
  onOpenBranches,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { labelKo: '회사소개', labelEn: 'About MS', action: onOpenCompany, href: '#about' },
    { labelKo: '제품소개', labelEn: 'Products', href: '#products' },
    { labelKo: '서비스', labelEn: 'Services', href: '#logistics' },
    { labelKo: '생산설비', labelEn: 'Facilities', action: onOpenBranches, href: '#logistics' },
    { labelKo: 'ESG', labelEn: 'ESG & R&D', href: '#esg' },
    { labelKo: '고객지원', labelEn: 'Support', href: '#notices' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action) {
      item.action();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f4faff]/90 backdrop-blur-xl border-b border-[#0b192c]/5 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="h-20 max-w-[1360px] mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2.5 group">
            <MsGasLogo
              height={38}
              showStripe={true}
              className="transition-transform group-hover:scale-105 drop-shadow-sm"
            />
            <span className="font-extrabold text-xl md:text-2xl text-[#001332] tracking-tight hidden sm:inline-block">
              {currentLang === 'ko' ? '(주)MS가스' : 'MS GAS Co., Ltd.'}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
              }}
              className="text-[14px] font-semibold text-[#44474e] hover:text-[#00677e] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00677e] hover:after:w-full after:transition-all"
            >
              {currentLang === 'ko' ? item.labelKo : item.labelEn}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language, Inquiry button, Account icon, Mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#def1fc] rounded-full p-1 shadow-inner">
            <button
              type="button"
              onClick={() => onToggleLang('ko')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                currentLang === 'ko'
                  ? 'bg-white text-[#001332] shadow-sm'
                  : 'text-[#44474e] hover:text-[#001332]'
              }`}
            >
              KOR
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                currentLang === 'en'
                  ? 'bg-white text-[#001332] shadow-sm'
                  : 'text-[#44474e] hover:text-[#001332]'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Quick Inquiry CTA */}
          <button
            type="button"
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#001332] text-white hover:bg-[#00677e] transition-all duration-200 text-xs md:text-sm font-semibold shadow-[0_4px_16px_rgba(0,19,50,0.12)] cursor-pointer"
          >
            {currentLang === 'ko' ? '온라인 문의' : 'Online Inquiry'}
          </button>

          {/* User / Partner Portal */}
          <button
            type="button"
            onClick={onOpenPortal}
            title={currentLang === 'ko' ? '고객사 전용 텔레메트리 포털' : 'Client Portal'}
            className="w-9 h-9 rounded-full bg-[#001332] hover:bg-[#00677e] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
          >
            <span className="material-symbols-outlined text-[19px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-[#def1fc] flex items-center justify-center text-[#001332] hover:bg-[#d8ebf6] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f4faff] border-b border-[#0b192c]/10 px-6 py-4 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-base font-semibold text-[#0b1e26] hover:text-[#00677e] border-b border-[#def1fc]/60"
            >
              {currentLang === 'ko' ? item.labelKo : item.labelEn}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                onOpenInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-[#001332] text-white text-center font-bold text-sm"
            >
              {currentLang === 'ko' ? '온라인 문의 접수' : 'Submit Inquiry'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
