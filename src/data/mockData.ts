export interface ProductItem {
  id: string;
  category: string;
  badge: string;
  titleKo: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  descKo: string;
  descEn: string;
  tagsKo: string[];
  tagsEn: string[];
  actionLabelKo: string;
  actionLabelEn: string;
  iconName: string;
  purity: string;
  supplyMethods: string[];
  applications: string[];
  specSheetUrl?: string;
}

export interface NoticeItem {
  id: string;
  category: string;
  badgeClass: string;
  date: string;
  titleKo: string;
  titleEn: string;
  summaryKo: string;
  summaryEn: string;
  linkTextKo: string;
  linkTextEn: string;
  iconName: string;
  details?: {
    organization: string;
    targetProject: string;
    period: string;
    budget?: string;
    requirements: string[];
    contactPerson: string;
    attachmentName: string;
  };
}

export interface HubItem {
  id: string;
  code: string;
  nameKo: string;
  nameEn: string;
  areaKo: string;
  areaEn: string;
  descKo: string;
  descEn: string;
  highlightKo: string;
  highlightEn: string;
  icon: string;
  branches: {
    name: string;
    address: string;
    tel: string;
    specialty: string;
    capacity: string;
  }[];
}

export interface MsdsItem {
  id: string;
  gasNameKo: string;
  gasNameEn: string;
  formula: string;
  casNo: string;
  unNo: string;
  purity: string;
  hazardClass: string;
  revisionDate: string;
  fileSize: string;
}

export const IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1Uwje-NNBBpeqydz_cZXPavJD5LCARx26sn-_i5tYbqz4xzaNuctz1sU4MEQxZsMje-NQ6wVF4OoSN3yUsqMa9QzVVQsUAFGqSLT920kYQIFaGH1Q_UD1gbjdr17aftJOUyoliAO6gevXDfEpFpw5QoQQx4XcKw5BOyo0EqmU2g_-rut6MDbsmau60iX5nik3GZAm2UlSKo_9yA4xZ45QCzhAKcrCvMx6VSUfWrim4fNeXxsum7jCr6NSHP',
  heroFleet: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvhQ4zTosSK3Ww9XlO2lddSqHI5JDHGr8Lu-Q0Zf4UcUV4hScdwhdBJm-qg86OwPSQzHPCqigyLV5pLp4rUJhi0VB3cB5wy_hR_XLLMp19liTqVxcsoeYD8NqSvI-iibz10j6HDyOEizCpVLd-zgbml1WVsWjrUXxKSPU-BLze6A1wB7NRS3poJKerzRW7GYsB6g6XVno8_RZPTz91tTOQemj99CoJoLfKfbPgpjiZCkALz7h6EyJhWQ',
  rndLab: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGZV_TewQwLjbsizB1b4Xqyece6rzMsl_mF_6-shvNAF-Uq2jW3sQgh97Q4z5WE3YcZ-uhq0nwWnhio6nouFzT2U6LL4EDnzy_XlyqEhqX7-iaCmHhpwHw4d53-sc0xVFao7so5UqrAMLT5L8HhcnXXT7feu9Efb4ZsJdA-wZmACZVxBcdviYVjRxMerlAtMhCE6ZAQYIHZw231jEysHgIHRWpMnb6ocAZ0mu72rilwRstV7TmmpAoQA',
  ammoniaBunkering: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZtnJe0wAJHsz2Lgv3Nxjn_I4dV7cfppzMI8NTUGa4HW3YDDK7vCzMByeElhmEfNvB7AisDeqgBXsj6wQCI5nCjFiXUbimkAVr7uFZtqBTuhwhEXmTPBmqnEo7RB6uJV43iHrY6jAM13KZpqrJSIDir4vNGGFV83DgNgHM0vGcYX3jVvmkvY87sQOE-ucrRrLpeJvzkseeLxqwamw0jRpDutdNiM3I7SnbuHgngyA2YMPxG5mE1f--4Q',
  awardBoardroom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3nvxSChNRQS9-vsd_7aEI3gqM9V1q9x7ieRn4LcD1wmoSVJIQoro4AuHsZcLupFxz738e46R2iut4SGtD_qT6_Nqooe1PJkWRXVDbjxOxrkijuEFHltIiQRN2ZKHM_nfstl1fl1CKAyinEUoIfBaYJbtg2t2wfVejZxAd07MUo-UuTeFeGmqowTD3nqUX7NLFGKl8_knIOl78iAOqJvvn0DG-cll6WtqRnlg8To9zr7eL1a507vgSCw',
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'specialty',
    category: '특수가스',
    badge: 'PURITY 99.9999%',
    titleKo: '특수 가스',
    titleEn: 'Specialty Electronic Gas',
    subtitleKo: 'Specialty Electronic & Ultra-High Purity Gas',
    subtitleEn: 'Ultra-High Purity Gas Solutions for High-Tech Industry',
    descKo: '반도체, 디스플레이, 2차전지 등 첨단 공정에 필수적인 고순도 특수가스. 미세 불순물을 극한까지 제어하여 수율을 극대화합니다.',
    descEn: 'High-purity electronic specialty gases essential for semiconductor, display, and secondary battery manufacturing. Extreme micro-impurity control for maximum yields.',
    tagsKo: ['초고순도 Ar/He', '에칭가스', '챔버 클리닝'],
    tagsEn: ['Ultra-pure Ar/He', 'Etching Gas', 'Chamber Cleaning'],
    actionLabelKo: '상세 스펙 • 분석성적서 확인',
    actionLabelEn: 'View Spec Sheet & Certificate of Analysis',
    iconName: 'science',
    purity: '99.9999% (6N) ~ 99.99999% (7N)',
    supplyMethods: ['47L High Pressure Cylinder', 'Y-Cylinder', 'ISO Module Container', 'Bundle Skid'],
    applications: ['Semiconductor CVD/ALD Deposition', 'Dry Etch & Lithography', 'EV Battery Electrode Processing']
  },
  {
    id: 'industrial',
    category: '산업용 가스',
    badge: 'BULK & CYLINDER',
    titleKo: '산업용 가스',
    titleEn: 'Industrial Core Gas',
    subtitleKo: 'Industrial Core Gas Solution',
    subtitleEn: 'Bulk & Cylinder Continuous Supply Infrastructure',
    descKo: '철강, 석유화학, 조선, 제조 전반의 기본 동력. 산소(O₂), 질소(N₂), 아르곤(Ar), 탄산가스(CO₂)의 안정적 대량 공급을 책임집니다.',
    descEn: 'The core driving force for steel, petrochemicals, shipbuilding, and general manufacturing. Reliable bulk supply of O2, N2, Ar, and CO2.',
    tagsKo: ['액체산소(LOX)', '액체질소(LIN)', '액체아르곤(LAR)'],
    tagsEn: ['Liquid O2 (LOX)', 'Liquid N2 (LIN)', 'Liquid Ar (LAR)'],
    actionLabelKo: '탱크로리 벌크 공급 견적',
    actionLabelEn: 'Request Bulk Tank Lorry Quotation',
    iconName: 'factory',
    purity: '99.9% ~ 99.999%',
    supplyMethods: ['Cryogenic Tank Lorry (10~25 Ton)', 'On-site Storage Cryogenic Tank', 'High-Pressure Cylinders'],
    applications: ['Steel Cutting & Welding', 'Petrochemical Inert Blanketing', 'Food Freezing & Preservation']
  },
  {
    id: 'fuel',
    category: '연료용 가스',
    badge: 'HIGH THERMAL VALUE',
    titleKo: '연료용 가스',
    titleEn: 'Clean Fuel Gas',
    subtitleKo: 'Clean Fuel & Efficient Thermal Energy',
    subtitleEn: 'High Thermal Value Industrial Fuel & Energy Transition',
    descKo: '프로판(C₃H₈), 프라멕스, 에탄, 부탄, 이소부탄 등 산업 열공정과 친환경 에너지 변환을 위한 고효율 연료가스를 제공합니다.',
    descEn: 'High-efficiency thermal fuel gases including Propane (C3H8), Flamex, Ethane, Butane, and Isobutane for industrial furnaces and clean transitions.',
    tagsKo: ['프로판', '프라멕스', '이소부탄'],
    tagsEn: ['Propane', 'Flamex', 'Isobutane'],
    actionLabelKo: '연료 공급 조건 조회',
    actionLabelEn: 'Inquire Fuel Supply Specifications',
    iconName: 'local_fire_department',
    purity: 'HD-5 Commercial & High Purity R-290',
    supplyMethods: ['Bulk Storage Tank (0.5T ~ 50T)', 'LPG Tank Lorry', 'Dual Vaporizer Station'],
    applications: ['Industrial Heat Treatment', 'Clean Industrial Drying', 'Aerosol & Eco Refrigerant Propellants']
  },
  {
    id: 'medical',
    category: '의료용 가스',
    badge: 'GMP & MFDS 규격 준수',
    titleKo: '의료용 가스',
    titleEn: 'Medical Life Support Gas',
    subtitleKo: 'Medical Life Support & Clinical Gas',
    subtitleEn: 'MFDS GMP Certified Pharmaceutical Medical Gas Solutions',
    descKo: '종합병원 및 의료기관 환자의 생명 유지와 수술 치료를 위한 의료용 산소, 아산화질소, 멸균가스를 철저한 의약품 수준으로 관리합니다.',
    descEn: 'Medical oxygen, nitrous oxide, and sterilizing gases managed strictly under pharmaceutical GMP regulations for patient life support and surgery.',
    tagsKo: ['의료용 산소', '마취용 N₂O', '진단용 가스'],
    tagsEn: ['Medical Oxygen', 'Anesthetic N2O', 'Diagnostic Gases'],
    actionLabelKo: '병원 공급 규정 안내',
    actionLabelEn: 'Hospital Supply Compliance Guidelines',
    iconName: 'medical_services',
    purity: 'MFDS Korean Pharmacopoeia KP / USP Standard',
    supplyMethods: ['Hospital Central Piping Bulk Tank', 'Cryogenic Medical Dewars', 'Cylinder Manifold Station'],
    applications: ['Intensive Care Unit (ICU) Oxygenation', 'Surgical Anesthesia Delivery', 'Hyperbaric Oxygen Therapy']
  },
  {
    id: 'standard',
    category: '표준 가스',
    badge: 'CALIBRATION STANDARD',
    titleKo: '표준 가스',
    titleEn: 'Calibration Standard Gas',
    subtitleKo: 'Calibration & Analytical Gas Mixtures',
    subtitleEn: 'Trace ppm/ppb Precision Traceable Standard Mixtures',
    descKo: '대기환경 측정, 연구소 분석기기 교정용 정밀 다성분 혼합가스. 극미량 ppm/ppb 단위의 정확도를 보증하는 공인 인증 표준 물질입니다.',
    descEn: 'Multi-component gas mixtures for atmospheric monitoring and laboratory calibration with certified precision down to ppm and ppb levels.',
    tagsKo: ['환경측정용 혼합가스', '정밀 성분인증서'],
    tagsEn: ['Environmental Gas', 'Certified Analytical Report'],
    actionLabelKo: '성분 배합 커스텀 의뢰',
    actionLabelEn: 'Custom Gas Mixture Formulation',
    iconName: 'tune',
    purity: 'Traceability to KRISS / NIST Standard Reference Materials',
    supplyMethods: ['10L / 47L Aluminum & Steel Cylinders', 'High-stability PASSAM internal coating'],
    applications: ['Continuous Emission Monitoring Systems (CEMS)', 'Automotive Exhaust Emission Tests', 'Gas Sensor R&D']
  },
  {
    id: 'engineering',
    category: '엔지니어링 & 설비',
    badge: 'TOTAL ENGINEERING',
    titleKo: '엔지니어링 & 설비',
    titleEn: 'Total Gas Engineering',
    subtitleKo: 'Equipment, Purge & Safety Service',
    subtitleEn: 'Cryogenic Piping, Purging, and Turnkey Safety Consulting',
    descKo: '초저온 저장탱크, 기화기, 가스 배관 시공, 정밀 가스분석 및 안전관리 퍼지(Purge) 용역까지 통합 엔지니어링 솔루션을 구축합니다.',
    descEn: 'Turnkey engineering solutions including cryogenic storage tanks, vaporizers, ultra-clean piping construction, gas analysis, and plant purging services.',
    tagsKo: ['가스퍼지 용역', '가스분석', '안전진단평가'],
    tagsEn: ['Gas Purging Service', 'Gas Chromatography', 'Safety Audit'],
    actionLabelKo: '엔지니어링 컨설팅 요청',
    actionLabelEn: 'Request Engineering Consultation',
    iconName: 'precision_manufacturing',
    purity: 'KGS Safety Code & ASME B31.3 Compliance',
    supplyMethods: ['Turnkey EPC Design & Construction', 'On-demand Mobile Purge Units', 'Safety Inspection Team'],
    applications: ['Cryogenic Tank Installation', 'Semi/Display Ultra-Clean Piping', 'Pre-commissioning Plant Inerting']
  }
];

export const HUBS_DATA: HubItem[] = [
  {
    id: 'hub-01',
    code: 'HUB 01',
    nameKo: '영남권 본부 • 부산 본사',
    nameEn: 'Yeongnam Regional HQ & Busan Center',
    areaKo: '부산, 울산, 경남, 대구, 포항',
    areaEn: 'Busan, Ulsan, Gyeongnam, Daegu, Pohang',
    descKo: '부산 사상 본사, 사하 공장, 울산 온산 플랜트, 창원/양산 출장소 등 동남권 중화학·조선 벨트 집중 지원',
    descEn: 'Busan Sasang HQ, Saha plant, Ulsan Onsan cryogenic terminal, Changwon and Yangsan branch supporting southeast heavy industry.',
    highlightKo: '초저온 액화가스 대형 탱크로리 35대 상시 대기',
    highlightEn: '35 Dedicated Cryogenic Tank Lorries on 24/7 Standby',
    icon: 'local_shipping',
    branches: [
      { name: '부산 본사 및 R&D 센터', address: '부산광역시 사상구 학감대로 161', tel: '051-314-1000', specialty: '특수가스 분석실, 고객지원본부', capacity: '120 Ton' },
      { name: '사하 고압가스 충전소', address: '부산광역시 사하구 신산로 88', tel: '051-292-3321', specialty: '산업용 실린더/번들 고속 충전', capacity: '80 Ton' },
      { name: '울산 온산 친환경 터미널', address: '울산광역시 울주군 온산읍 화산로 45', tel: '052-238-1120', specialty: '암모니아 벙커링 R&D, 대용량 벌크', capacity: '450 Ton' },
      { name: '창원 중공업 지원 지사', address: '경상남도 창원시 성산구 정동로 72', tel: '055-284-5501', specialty: '조선 및 방산 레이저 가스', capacity: '60 Ton' },
      { name: '양산 첨단소재 출장소', address: '경상남도 양산시 유산공단로 19', tel: '055-388-9002', specialty: '전자 세라믹용 고순도 질소', capacity: '50 Ton' }
    ]
  },
  {
    id: 'hub-02',
    code: 'HUB 02',
    nameKo: '수도권 및 중부 물류기지',
    nameEn: 'Metropolitan & Central Logistics Hub',
    areaKo: '경기 화성, 평택, 인천, 충남 당진, 서산',
    areaEn: 'Gyeonggi Hwaseong, Pyeongtaek, Incheon, Dangjin',
    descKo: '경기 화성·평택 반도체 라인 대응 지점, 인천 거점, 충남 당진·서산 석유화학 거점 연계망',
    descEn: 'Semiconductor express hotline for Hwaseong/Pyeongtaek fabs, Incheon coastal depot, and Dangjin/Seosan petrochemical cluster.',
    highlightKo: '반도체 전용 초고순도 가스 핫라인 구축',
    highlightEn: 'Dedicated Semiconductor Ultra-Pure Gas Express Hotline',
    icon: 'bolt',
    branches: [
      { name: '화성 반도체 공급기지', address: '경기도 화성시 동탄산단6길 33', tel: '031-375-8801', specialty: '반도체 6N 초고순도 가스 핫라인', capacity: '200 Ton' },
      { name: '평택 물류 지원센터', address: '경기도 평택시 청북읍 어연산단로 12', tel: '031-683-4411', specialty: '클린룸 번들 및 ISO 모듈 컨테이너', capacity: '150 Ton' },
      { name: '인천 항만 저장소', address: '인천광역시 중구 서해대로 112', tel: '032-773-6701', specialty: '수출입 특수가스 통관 및 환적', capacity: '90 Ton' },
      { name: '당진/서산 석화 물류소', address: '충청남도 당진시 송악읍 부곡공단로 77', tel: '041-356-9100', specialty: '대형 질소/탄산 벌크 탱크로리', capacity: '180 Ton' }
    ]
  },
  {
    id: 'hub-03',
    code: 'HUB 03',
    nameKo: '호남 및 서남권 거점',
    nameEn: 'Honam & Southwest Strategic Depot',
    areaKo: '광주, 전남 여수, 전북 군산/새만금',
    areaEn: 'Gwangju, Yeosu, Gunsan, Saemangeum',
    descKo: '광주 하남산단 지사, 전남 여수 석화단지 공급 스테이션, 군산/새만금 미래 배터리 소재 산단 직통 공급',
    descEn: 'Gwangju Hanam plant, Yeosu petrochemical supply station, and Gunsan/Saemangeum EV battery material cluster direct pipeline.',
    highlightKo: '호남 전역 주문 후 4시간 이내 현장 직송',
    highlightEn: 'Guaranteed 4-Hour On-site Emergency Delivery in Region',
    icon: 'schedule',
    branches: [
      { name: '광주 하남산단 지사', address: '광주광역시 광산구 손재로 123', tel: '062-951-2200', specialty: '가전 및 자동차 부품 용접 가스', capacity: '75 Ton' },
      { name: '여수 국가산단 스테이션', address: '전라남도 여수시 산단중앙로 210', tel: '061-685-3004', specialty: '정유/석화 대용량 벤트 퍼지 서비스', capacity: '220 Ton' },
      { name: '군산 새만금 배터리지점', address: '전북특별자치도 군산시 자유무역로 88', tel: '063-467-1190', specialty: '2차전지 양극재/음극재 특수가스', capacity: '110 Ton' }
    ]
  },
  {
    id: 'hub-04',
    code: 'GLOBAL',
    nameKo: '글로벌 무역 & 특수가스 랩',
    nameEn: 'Global Trade & Specialty Gas Lab',
    areaKo: '글로벌 10개국 네트워크 및 공인 시험소',
    areaEn: 'Direct Procurement from 10 Countries & Accredited Labs',
    descKo: '10개국 해외 가스 메이저 공급선과의 직거래 및 고정밀 시험 분석 R&D 센터 직속 품질 보증 라인',
    descEn: 'Direct supply lines with gas majors across 10 countries and in-house accredited R&D Center quality inspection.',
    highlightKo: 'GC-MS 정밀 가스 크로마토그래피 전수검사',
    highlightEn: '100% GC-MS Trace Gas Chromatography Verification',
    icon: 'biotech',
    branches: [
      { name: 'MS R&D 정밀분석센터', address: '부산광역시 사상구 학감대로 165', tel: '051-314-1011', specialty: 'KOLAS 인정 시험검사 및 표준가스 제조', capacity: 'Analytical Cleanroom' },
      { name: '글로벌 무역사업본부', address: '서울특별시 강남구 테헤란로 412', tel: '02-555-7731', specialty: '희귀 불활성 가스(Kr, Xe, Ne) 직수입', capacity: 'Global Sourcing' }
    ]
  }
];

export const NOTICES_DATA: NoticeItem[] = [
  {
    id: 'notice-1',
    category: '용역 입찰공고',
    badgeClass: 'bg-secondary/10 text-secondary',
    date: '2024.11.20',
    titleKo: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발(실증R&D)』관련 “구축시스템 3자 안전진단 평가” 용역 입찰',
    titleEn: 'Tender Notice: Third-Party Safety Diagnostic Evaluation for Ammonia TTS Bunkering System Infrastructure R&D (Ulsan Free Regulatory Zone)',
    summaryKo: '암모니아 TTS(Truck to Ship) 벙커링 시스템 신뢰성 검증을 위한 제3자 객관적 안전진단 평가 용역 제안 요청.',
    summaryEn: 'Call for proposals for third-party objective safety diagnostic evaluation to verify Ammonia Truck-to-Ship bunkering system reliability.',
    linkTextKo: '제안서 마감 • 입찰 규격서 열람',
    linkTextEn: 'Tender Specs & Proposal Guidelines',
    iconName: 'gavel',
    details: {
      organization: '(주)MS가스 친환경에너지실증사업단',
      targetProject: '울산 친환경 암모니아 규제자유특구 실증R&D',
      period: '2024.12.01 ~ 2025.04.30 (5개월간)',
      budget: '₩ 85,000,000 (VAT 별도)',
      requirements: [
        'KGS 또는 고압가스 안전진단 공인 전문기관 등록 사업자',
        '최근 3년 이내 독성/가연성 가스 설비 안전평가 실적 보유 기업',
        '전담 인력 중 가스기술사 또는 산업안전지도사 1인 이상 포함 필수'
      ],
      contactPerson: '친환경기술개발팀 박진우 수석 (051-314-1033)',
      attachmentName: 'MS_암모니아_3자안전평가_입찰제안요청서(RFP).pdf'
    }
  },
  {
    id: 'notice-2',
    category: 'HAZOP 위험평가',
    badgeClass: 'bg-secondary/10 text-secondary',
    date: '2024.10.15',
    titleKo: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축』 관련 “탱크로리를 이용한 벙커링 설비 HAZOP 분석” 용역 입찰',
    titleEn: 'Tender Notice: HAZOP Risk Analysis for Ammonia Bunkering Mobile Tank Lorry Facility (Ulsan Pilot)',
    summaryKo: '초저온 고압 암모니아 탱크로리 설비 전반의 공정 위험성 정성적 평가 및 비상 차단 인터록 체계 검증 용역.',
    summaryEn: 'Process qualitative hazard evaluation and emergency shutdown interlock validation for cryogenic high-pressure ammonia tank lorries.',
    linkTextKo: '평가 심사 기준서 확인',
    linkTextEn: 'HAZOP Criteria & Bid Evaluation',
    iconName: 'warning',
    details: {
      organization: '(주)MS가스 안전품질보증실',
      targetProject: 'TTS 암모니아 벙커링 로딩암 및 플렉시블 호스 이송계통 HAZOP',
      period: '2024.11.01 ~ 2024.12.31',
      budget: '₩ 42,000,000 (VAT 별도)',
      requirements: [
        '화학플랜트 또는 초저온 저장설비 HAZOP 리더 인증자 주관',
        '원격 긴급차단밸브(ESV) 동작 신뢰성 정량평가 가능 기관'
      ],
      contactPerson: '품질경영실 최동현 팀장 (051-314-1042)',
      attachmentName: 'MS_HAZOP_위험성평가_기술과업지시서.pdf'
    }
  },
  {
    id: 'notice-3',
    category: '실증특례 고지',
    badgeClass: 'bg-emerald-500/15 text-emerald-800 font-semibold',
    date: '2024.08.28',
    titleKo: '경남 암모니아 혼소 연료추진시스템 선박 규제자유특구 실증특례 이용자고지 안내',
    titleEn: 'Regulatory Sandbox Notice: Ammonia Dual-Fuel Marine Vessel User Guidance in Gyeongnam Free Zone',
    summaryKo: '산업통상자원부·중소벤처기업부 승인 특례 사업으로서 친환경 혼소 추진선박의 안전성 확보 및 시운전 운항 실증 공고.',
    summaryEn: 'Public regulatory notice on the pilot operation and safety verification of ammonia dual-fuel propulsion marine vessels.',
    linkTextKo: '특례 고지 전문 다운로드',
    linkTextEn: 'Download Official Sandbox Decree',
    iconName: 'verified',
    details: {
      organization: '중소벤처기업부 / 경상남도 / (주)MS가스 컨소시엄',
      targetProject: '경남 친환경 선박 규제자유특구 실증특례 제2024-08호',
      period: '2024.09.01 ~ 2025.12.31',
      requirements: [
        '선박 안전법 제6조에 따른 특례 해상 시험운항 준수',
        '전용 안전관리자 및 실시간 가스누출 감지 텔레메트리 연동 필수',
        '탑승 인원 대상 특수 가스 안전교육 사전 이수'
      ],
      contactPerson: '특구사업추진단 윤성호 본부장 (051-314-1050)',
      attachmentName: '경남_암모니아혼소선박_특례이용자고지문.pdf'
    }
  },
  {
    id: 'notice-4',
    category: '기업 수상',
    badgeClass: 'bg-primary/10 text-primary font-semibold',
    date: '2024.06.12',
    titleKo: '(주)MS가스 충남 중소기업 탄소중립 성과 확산의 날 충남도지사 유공자 표창 수여',
    titleEn: 'Corporate Award: MS Gas Awarded Chungnam Governor Commendation on SME Carbon Neutrality Day',
    summaryKo: '친환경 에너지 절감 설비 도입과 공정 개선을 통해 온실가스 감축에 기여한 공로로 충청남도지사 표창을 수상했습니다.',
    summaryEn: 'Recognized by the Governor of Chungcheongnam-do for leading carbon footprint reduction and energy-saving process innovations.',
    linkTextKo: '보도자료 전문 보기',
    linkTextEn: 'Read Full Press Release',
    iconName: 'emoji_events',
    details: {
      organization: '충청남도지사 / 충남테크노파크',
      targetProject: '2024년도 산업부문 온실가스 감축 및 탄소중립 실천 우수기업',
      period: '2024.06.12 수여',
      requirements: [
        '기존 질소 기화설비 폐열 회수 시스템 적용으로 연간 전력소모 28% 절감',
        '고압가스 배관 누출 제로화 스마트 센서망 선도 구축'
      ],
      contactPerson: '홍보협력실 강은지 대리 (051-314-1018)',
      attachmentName: 'MS가스_충남도지사표창_보도자료_202406.pdf'
    }
  },
  {
    id: 'notice-5',
    category: '국가 훈장',
    badgeClass: 'bg-amber-400/20 text-amber-900 font-semibold',
    date: '2024.03.20',
    titleKo: '(주)MS가스 전청민 대표이사 ‘은탑산업훈장’ 수훈의 영예',
    titleEn: 'National Medal: CEO Jeon Cheong-min Conferred the Prestigious Silver Tower Order of Industrial Service Merit',
    summaryKo: '대한민국 가스 제조 산업의 선진화와 고압가스 안전관리 기술 개발, 일자리 창출에 헌신한 공적을 기려 국가 훈장을 수훈하였습니다.',
    summaryEn: 'Honored with the national Silver Tower Order for 50 years of advancement in high-pressure gas safety engineering and industrial innovation.',
    linkTextKo: '수훈 소식 전문 보기',
    linkTextEn: 'Read Presidential Citation Article',
    iconName: 'military_tech',
    details: {
      organization: '대한민국 정부 / 산업통상자원부',
      targetProject: '제31회 대한민국 가스안전대상 대통령 친수',
      period: '2024.03.20 서훈',
      requirements: [
        '1974년 창업 이래 50년간 반도체·철강·석유화학 핵심 가스 안정 공급',
        '전국 17개 거점 직영 공급망 및 텔레메트리 관제망 무사고 운용',
        '친환경 암모니아 벙커링 및 미래 무탄소 에너지 인프라 선제적 개척'
      ],
      contactPerson: '기획조정실 김상우 이사 (051-314-1002)',
      attachmentName: '은탑산업훈장_수훈_기념브로슈어.pdf'
    }
  },
  {
    id: 'notice-6',
    category: '물질안전보건자료',
    badgeClass: 'bg-primary text-white font-semibold',
    date: '2025 최신판',
    titleKo: '전 품목 물질안전보건자료(MSDS) 및 취급설명서 최신 개정판 배포',
    titleEn: 'Official 2025 Material Safety Data Sheets (MSDS) & Safe Handling Manuals Archive',
    summaryKo: '산업안전보건법 및 화학물질관리법 기준에 따라 즉시 다운로드 가능한 가스 안전 취급 가이드를 제공합니다.',
    summaryEn: 'Comprehensive official MSDS documents complied with OSHA and KOSHA regulations available for instant download 24/7.',
    linkTextKo: 'MSDS 아카이브 바로가기',
    linkTextEn: 'Open MSDS Database Search',
    iconName: 'download'
  }
];

export const MSDS_DATABASE: MsdsItem[] = [
  { id: 'msds-o2', gasNameKo: '의료용 / 산업용 액체산소', gasNameEn: 'Liquid Oxygen (LOX)', formula: 'O₂', casNo: '7782-44-7', unNo: 'UN 1073', purity: '99.5% ~ 99.999%', hazardClass: '산화성 가스, 고압가스', revisionDate: '2025.01.10', fileSize: '480 KB' },
  { id: 'msds-n2', gasNameKo: '초고순도 액체질소', gasNameEn: 'Liquid Nitrogen (LIN)', formula: 'N₂', casNo: '7727-37-9', unNo: 'UN 1977', purity: '99.9999% (6N)', hazardClass: '비인화성 불활성가스, 냉동액화가스', revisionDate: '2025.01.10', fileSize: '460 KB' },
  { id: 'msds-ar', gasNameKo: '초고순도 아르곤', gasNameEn: 'Liquid Argon (LAR)', formula: 'Ar', casNo: '7440-37-1', unNo: 'UN 1951', purity: '99.9999% (6N)', hazardClass: '비인화성 불활성가스, 단순질식성', revisionDate: '2025.01.15', fileSize: '430 KB' },
  { id: 'msds-co2', gasNameKo: '액화 탄산가스', gasNameEn: 'Carbon Dioxide (LCO₂)', formula: 'CO₂', casNo: '124-38-9', unNo: 'UN 2187', purity: '99.9% ~ 99.999%', hazardClass: '고압가스, 단순질식성', revisionDate: '2025.01.20', fileSize: '445 KB' },
  { id: 'msds-nh3', gasNameKo: '친환경 벙커링용 무수 암모니아', gasNameEn: 'Anhydrous Ammonia', formula: 'NH₃', casNo: '7664-41-7', unNo: 'UN 1005', purity: '99.9% ~ 99.999%', hazardClass: '독성, 부식성, 가연성 액화가스', revisionDate: '2025.02.01', fileSize: '540 KB' },
  { id: 'msds-c3h8', gasNameKo: '산업용 고순도 프로판', gasNameEn: 'Propane / Flamex', formula: 'C₃H₈', casNo: '74-98-6', unNo: 'UN 1978', purity: '99.0% ~ 99.9%', hazardClass: '인화성 가스, 인화성 액화가스', revisionDate: '2025.02.05', fileSize: '495 KB' },
  { id: 'msds-he', gasNameKo: '초고순도 헬륨', gasNameEn: 'Helium Ultra-Pure', formula: 'He', casNo: '7440-59-7', unNo: 'UN 1046', purity: '99.9999%', hazardClass: '비인화성 불활성 가스', revisionDate: '2025.01.18', fileSize: '410 KB' },
  { id: 'msds-sih4', gasNameKo: '반도체용 실란 가스', gasNameEn: 'Silane (SiH₄)', formula: 'SiH₄', casNo: '7803-62-5', unNo: 'UN 2203', purity: '99.9999%', hazardClass: '자연발화성 가스, 고압가스', revisionDate: '2025.01.22', fileSize: '520 KB' }
];

export const TELEMETRY_SIM_TANKS = [
  {
    tankId: 'TK-01-BUSAN-HQ',
    name: '부산 본사 1호 LOX(액체산소) 초저온 저장탱크',
    gas: 'LOX 99.999%',
    totalCapacity: '50,000 L',
    currentLevelPct: 82.4,
    pressureKgf: '8.4 kgf/cm²',
    temperatureC: '-183.1 °C',
    flowRate: '420 Nm³/h',
    status: 'OPTIMAL (정상 운전)',
    estDaysLeft: '11.5일'
  },
  {
    tankId: 'TK-02-HWASEONG',
    name: '화성 지점 2호 LIN(반도체 초고순도 질소)',
    gas: 'LIN 99.9999% (6N)',
    totalCapacity: '80,000 L',
    currentLevelPct: 76.8,
    pressureKgf: '12.2 kgf/cm²',
    temperatureC: '-195.8 °C',
    flowRate: '1,150 Nm³/h',
    status: 'OPTIMAL (안정 공급 중)',
    estDaysLeft: '8.2일'
  },
  {
    tankId: 'TK-03-ULSAN-NH3',
    name: '울산 온산 벙커링 실증 NH₃ 저장조',
    gas: 'NH₃ Green Ammonia',
    totalCapacity: '100,000 L',
    currentLevelPct: 91.2,
    pressureKgf: '7.8 kgf/cm²',
    temperatureC: '-33.4 °C',
    flowRate: '310 Nm³/h',
    status: 'ACTIVE PILOT (실증 운용)',
    estDaysLeft: '19.4일'
  },
  {
    tankId: 'TK-04-YEOSU-LCO2',
    name: '여수 지사 LCO₂ 액화탄산 저장탱크',
    gas: 'LCO₂ 99.99%',
    totalCapacity: '40,000 L',
    currentLevelPct: 64.1,
    pressureKgf: '16.5 kgf/cm²',
    temperatureC: '-20.5 °C',
    flowRate: '580 Nm³/h',
    status: 'OPTIMAL (정상 가동)',
    estDaysLeft: '6.8일'
  }
];
