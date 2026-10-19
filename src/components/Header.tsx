import React, { useState } from 'react';
import { MsGasLogo } from './MsGasLogo';

interface HeaderProps {
  currentLang: 'ko' | 'en';
  onToggleLang: (lang: 'ko' | 'en') => void;
  onOpenInquiry: () => void;
  onOpenPortal: () => void;
  onOpenCompany: () => void;
  onOpenBranches: () => void;
  onOpenChat?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenInquiry,
  onOpenPortal,
  onOpenCompany,
  onOpenBranches,
  onOpenChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isKo = currentLang === 'ko';

  // Exact navigation categories from the MS Gas Design System
  const navItems = [
    { labelKo: '회사소개', labelEn: 'About MS', action: onOpenCompany, href: '#about' },
    { labelKo: '사업안내', labelEn: 'Business & Hubs', action: onOpenBranches, href: '#logistics' },
    { labelKo: '제품·서비스', labelEn: 'Products & Services', href: '#products' },
    { labelKo: '고객지원', labelEn: 'Support', href: '#notices' },
  ];

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.action) {
      item.action();
    }
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Scroll to products or open search
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
    setSearchOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all">
        <div className="h-20 max-w-[1360px] mx-auto px-6 flex items-center justify-between gap-6">
          {/* Brand Logo - Official MS Gas Design System Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group py-1">
              <MsGasLogo
                height={42}
                subtext={isKo ? 'ko' : 'none'}
                className="transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation - Clean Gothic & Hanken Grotesk */}
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
                className="text-[15px] font-semibold text-[#2E2E2E] hover:text-[#0D6F8F] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0D6F8F] hover:after:w-full after:transition-all"
              >
                {isKo ? item.labelKo : item.labelEn}
              </a>
            ))}
          </nav>

          {/* Header Action Controls from Design System */}
          <div className="flex items-center gap-3">
            {/* Search Toggle Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#525252] hover:text-[#0D6F8F] hover:bg-[#F6F8FA] border border-transparent hover:border-[#E5E7EB] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-[#F6F8FA] border border-[#E5E7EB] text-xs font-bold text-[#525252]">
              <button
                onClick={() => onToggleLang('ko')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  isKo ? 'bg-[#0D6F8F] text-white shadow-sm' : 'hover:text-[#0D6F8F]'
                }`}
              >
                KO
              </button>
              <button
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  !isKo ? 'bg-[#0D6F8F] text-white shadow-sm' : 'hover:text-[#0D6F8F]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary Yellow CTA Button (문의하기) from UI Components */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F8D94F] hover:bg-[#DEBD2D] text-[#2E2E2E] font-bold text-sm shadow-sm hover:shadow transition-all"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              <span>{isKo ? '문의하기' : 'Inquire'}</span>
            </button>

            {/* Client Telemetry Portal */}
            <button
              onClick={onOpenPortal}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#0D6F8F] text-[#0D6F8F] hover:bg-[#E8F5F9] font-semibold text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-base">sensors</span>
              <span>{isKo ? '원격 관제' : 'IoT Telemetry'}</span>
            </button>

            {/* AI Assistant Chat Trigger */}
            {onOpenChat && (
              <button
                onClick={onOpenChat}
                className="w-10 h-10 rounded-full bg-[#0D6F8F] hover:bg-[#094E65] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
                title={isKo ? 'MS 가스봇 챗봇 열기' : 'Open MS Gasbot'}
              >
                <span className="material-symbols-outlined text-xl">smart_toy</span>
              </button>
            )}

            {/* Mobile Hamburger Button (☰) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#2E2E2E] hover:bg-[#F6F8FA] border border-[#E5E7EB]"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>

        {/* Search Bar Drawer */}
        {searchOpen && (
          <div className="bg-[#F6F8FA] border-t border-[#E5E7EB] py-4 px-6 animate-in slide-in-from-top duration-200">
            <div className="max-w-[720px] mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-[#8E8E8E] text-xl">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isKo
                      ? '검색어를 입력하세요. (예: 초고순도 아르곤, 질소, 암모니아, 저장탱크, MSDS)'
                      : 'Search products, specs, or MSDS documents...'
                  }
                  className="w-full pl-11 pr-24 py-2.5 rounded-lg bg-white border border-[#E5E7EB] focus:outline-none focus:border-[#0D6F8F] focus:ring-2 focus:ring-[#0D6F8F]/20 text-sm text-[#2E2E2E] shadow-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-3 py-1.5 rounded-md bg-[#0D6F8F] text-white text-xs font-bold hover:bg-[#094E65] transition-colors"
                >
                  {isKo ? '검색' : 'Search'}
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* MOBILE DRAWER MENU (Replicating exact layout in image.png)  */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="fixed right-0 top-0 bottom-0 w-72 sm:w-80 bg-white shadow-2xl flex flex-col p-6 z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-[#E5E7EB]">
              <MsGasLogo height={36} subtext={isKo ? 'ko' : 'none'} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#525252] hover:bg-[#F6F8FA]"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Mobile Navigation List styled like image.png */}
            <div className="py-6 space-y-2 flex-1 overflow-y-auto">
              {/* Home Pill (Active State in Design System) */}
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0D6F8F] text-white font-bold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">home</span>
                <span>{isKo ? '홈' : 'Home'}</span>
              </a>

              {/* Products & Services */}
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F6F8FA] text-[#2E2E2E] font-medium text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-xl text-[#0D6F8F]">
                  shield_with_heart
                </span>
                <span>{isKo ? '제품·서비스' : 'Products & Services'}</span>
              </a>

              {/* Inquire Quote */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F6F8FA] text-[#2E2E2E] font-medium text-sm transition-colors text-left"
              >
                <span className="material-symbols-outlined text-xl text-[#0D6F8F]">
                  assignment
                </span>
                <span>{isKo ? '견적문의' : 'Request Quotation'}</span>
              </button>

              {/* Support */}
              <a
                href="#notices"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F6F8FA] text-[#2E2E2E] font-medium text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-xl text-[#0D6F8F]">
                  support_agent
                </span>
                <span>{isKo ? '고객지원' : 'Support & Notices'}</span>
              </a>

              {/* Company Info */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCompany();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F6F8FA] text-[#2E2E2E] font-medium text-sm transition-colors text-left"
              >
                <span className="material-symbols-outlined text-xl text-[#0D6F8F]">domain</span>
                <span>{isKo ? '회사소개' : 'About MS GAS'}</span>
              </button>

              {/* Logistics Hubs */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBranches();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#F6F8FA] text-[#2E2E2E] font-medium text-sm transition-colors text-left"
              >
                <span className="material-symbols-outlined text-xl text-[#0D6F8F]">
                  local_shipping
                </span>
                <span>{isKo ? '전국 공급망' : 'Nationwide Fleet'}</span>
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 rounded-xl bg-[#F8D94F] text-[#2E2E2E] font-extrabold text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                <span>{isKo ? '사업 문의하기' : 'Fast-Track Quote'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
