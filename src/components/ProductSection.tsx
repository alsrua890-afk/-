import React, { useState } from 'react';
import { PRODUCTS_DATA, ProductItem } from '../data/mockData';

interface ProductSectionProps {
  currentLang: 'ko' | 'en';
  onSelectProduct: (product: ProductItem) => void;
  onDownloadCatalog: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  currentLang,
  onSelectProduct,
  onDownloadCatalog,
}) => {
  const isKo = currentLang === 'ko';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = isKo
    ? [
        { id: 'all', label: '전체 가스 솔루션' },
        { id: '특수가스', label: '특수가스' },
        { id: '산업용 가스', label: '산업용 벌크' },
        { id: '연료용 가스', label: '연료용 에너지' },
        { id: '의료용 가스', label: '의료용 가스' },
        { id: '표준 가스', label: '표준가스' },
        { id: '엔지니어링 & 설비', label: '엔지니어링' },
      ]
    : [
        { id: 'all', label: 'All Gas Solutions' },
        { id: '특수가스', label: 'Specialty Gas' },
        { id: '산업용 가스', label: 'Industrial Bulk' },
        { id: '연료용 가스', label: 'Thermal Fuel' },
        { id: '의료용 가스', label: 'Medical Gas' },
        { id: '표준 가스', label: 'Calibration Gas' },
        { id: '엔지니어링 & 설비', label: 'Engineering' },
      ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full py-20 md:py-28 bg-[#F6F8FA] border-b border-[#E5E7EB]" id="products">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5F9] text-[#0D6F8F] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0D6F8F]" />
              GAS PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2E2E2E] tracking-tight leading-tight">
              {isKo ? (
                <>
                  다양한 산업분야를 아우르는<br className="hidden sm:inline" /> 고부가가치형 가스 솔루션
                </>
              ) : (
                'High-Value Customized Gas Solutions Across All Strategic Industries'
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
              {isKo
                ? '(주)MS가스는 기초 제조 공정부터 초정밀 반도체, 생명 의료, 친환경 미래 에너지까지 고객사의 사양에 최적화된 맞춤형 가스를 안전하게 공급합니다.'
                : 'From foundational heavy industrial manufacturing to nano-scale semiconductors, clinical life sciences, and future hydrogen-ammonia clean fuel.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Primary button style matching UI Components in image.png */}
            <button
              type="button"
              onClick={onDownloadCatalog}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0D6F8F] hover:bg-[#094E65] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>{isKo ? '제품 전체 카탈로그 다운로드' : 'Download Complete Catalog'}</span>
              <span className="material-symbols-outlined text-[18px]">download</span>
            </button>
          </div>
        </div>

        {/* Quick Filter Pill Buttons (UI Components) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#0D6F8F] text-white shadow-sm'
                  : 'bg-white text-[#525252] hover:text-[#0D6F8F] border border-[#E5E7EB] hover:bg-[#F6F8FA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6-Product Responsive Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isFeatured = product.id === 'specialty';

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group relative rounded-2xl bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-[#E5E7EB] hover:border-[#0D6F8F] cursor-pointer hover:-translate-y-1"
              >
                {/* Top Border Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 ${
                    isFeatured
                      ? 'h-1.5 bg-gradient-to-r from-[#F8D94F] via-[#0D6F8F] to-[#094E65]'
                      : 'h-1 bg-[#E5E7EB] group-hover:bg-[#0D6F8F] transition-colors'
                  }`}
                />

                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-bold ${
                        isFeatured
                          ? 'bg-[#E8F5F9] text-[#0D6F8F]'
                          : 'bg-[#F6F8FA] text-[#525252] border border-[#E5E7EB]'
                      }`}
                    >
                      {product.badge}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-[#E8F5F9] flex items-center justify-center text-[#0D6F8F] group-hover:bg-[#0D6F8F] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">{product.iconName}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] mb-1 group-hover:text-[#0D6F8F] transition-colors">
                      {isKo ? product.titleKo : product.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0D6F8F] mb-2">
                      {isKo ? product.subtitleKo : product.subtitleEn}
                    </p>
                    <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                      {isKo ? product.descKo : product.descEn}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {(isKo ? product.tagsKo : product.tagsEn).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#F6F8FA] border border-[#E5E7EB] text-[#2E2E2E] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Row - UI Button style (자세히 보기) */}
                <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[#0D6F8F] group-hover:text-[#094E65] text-xs sm:text-sm font-bold">
                  <span>{isKo ? product.actionLabelKo : product.actionLabelEn}</span>
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1.5">
                    arrow_forward
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
