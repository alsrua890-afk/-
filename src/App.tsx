/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { LogisticsSection } from './components/LogisticsSection';
import { EsgSection } from './components/EsgSection';
import { NoticeSection } from './components/NoticeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { ProductItem, NoticeItem, HubItem } from './data/mockData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'ko' | 'en'>('ko');

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [showMsdsModal, setShowMsdsModal] = useState<boolean>(false);
  const [showBranchesModal, setShowBranchesModal] = useState<boolean>(false);
  const [selectedHub, setSelectedHub] = useState<HubItem | null>(null);
  const [showTelemetryModal, setShowTelemetryModal] = useState<boolean>(false);
  const [showCompanyModal, setShowCompanyModal] = useState<boolean>(false);
  const [showCatalogModal, setShowCatalogModal] = useState<boolean>(false);
  const [legalModalData, setLegalModalData] = useState<{ title: string; content: string } | null>(null);

  const scrollToSupport = () => {
    const el = document.getElementById('support');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquiryForProduct = (_productName: string) => {
    scrollToSupport();
  };

  const handleOpenArticle = (title: string, _category: string, body: string) => {
    setLegalModalData({ title, content: body });
  };

  const handleOpenBranches = (hub?: HubItem) => {
    if (hub) {
      setSelectedHub(hub);
    }
    setShowBranchesModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4faff] text-[#0b1e26] selection:bg-[#5bd8fe] selection:text-[#001332]">
      {/* 1. Header Navigation */}
      <Header
        currentLang={currentLang}
        onToggleLang={setCurrentLang}
        onOpenInquiry={scrollToSupport}
        onOpenPortal={() => setShowTelemetryModal(true)}
        onOpenCompany={() => setShowCompanyModal(true)}
        onOpenBranches={() => handleOpenBranches()}
      />

      {/* Main Page Flow matching user screens */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onExploreProducts={scrollToProducts}
          onOpenConsultation={scrollToSupport}
          onOpenTelemetry={() => setShowTelemetryModal(true)}
        />

        {/* 3. Gas Portfolio Section */}
        <ProductSection
          currentLang={currentLang}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onDownloadCatalog={() => setShowCatalogModal(true)}
        />

        {/* 4. Nationwide Logistics & Hubs */}
        <LogisticsSection
          currentLang={currentLang}
          onOpenBranches={handleOpenBranches}
          onOpenTelemetry={() => setShowTelemetryModal(true)}
        />

        {/* 5. Quality, Technology & ESG Section */}
        <EsgSection
          currentLang={currentLang}
          onOpenArticle={handleOpenArticle}
        />

        {/* 6. Notices & Public Tenders Section */}
        <NoticeSection
          currentLang={currentLang}
          onSelectNotice={(n) => setSelectedNotice(n)}
          onOpenMsds={() => setShowMsdsModal(true)}
        />

        {/* 7. Quick Consultation & Support Section */}
        <ContactSection
          currentLang={currentLang}
          onOpenCompany={() => setShowCompanyModal(true)}
          onOpenInquiryModal={scrollToSupport}
          onOpenNotices={() => setSelectedNotice(null)}
          onOpenBranches={() => handleOpenBranches()}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBranches={() => handleOpenBranches()}
        onOpenInquiry={scrollToSupport}
        onOpenMsds={() => setShowMsdsModal(true)}
        onOpenLegal={(title, content) => setLegalModalData({ title, content })}
      />

      {/* Unified Modals & Interactive Overlays */}
      <Modals
        currentLang={currentLang}
        selectedProduct={selectedProduct}
        onCloseProduct={() => setSelectedProduct(null)}
        onOpenInquiryForProduct={handleInquiryForProduct}
        selectedNotice={selectedNotice}
        onCloseNotice={() => setSelectedNotice(null)}
        showMsdsModal={showMsdsModal}
        onCloseMsds={() => setShowMsdsModal(false)}
        showBranchesModal={showBranchesModal}
        selectedHub={selectedHub}
        onCloseBranches={() => setShowBranchesModal(false)}
        showTelemetryModal={showTelemetryModal}
        onCloseTelemetry={() => setShowTelemetryModal(false)}
        showCompanyModal={showCompanyModal}
        onCloseCompany={() => setShowCompanyModal(false)}
        showCatalogModal={showCatalogModal}
        onCloseCatalog={() => setShowCatalogModal(false)}
        legalModalData={legalModalData}
        onCloseLegal={() => setLegalModalData(null)}
      />
    </div>
  );
}
