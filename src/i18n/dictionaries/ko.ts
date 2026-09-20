import { PATENT_APPLICATION_NO, type NavId } from "@/lib/site";
import legalKo from "./legal.ko";

const patentNo = `제${PATENT_APPLICATION_NO}호`;

/**
 * Korean dictionary — the source of truth for the dictionary shape.
 * en.ts must satisfy the same `Dictionary` type, so a missing translation is a compile error.
 */
const ko = {
  meta: {
    title: "Vibe Trip (바이브트립) — 대화 한 번으로 완성하는 AI 여행 플래너",
    description:
      "AI 플래닝부터 바우처 자동 정리, 실시간 위치 기반 현지 케어까지. 바이브트립 하나로 여행 준비를 3분 만에 끝내세요.",
    keywords: ["바이브트립", "Vibe Trip", "AI 여행 플래너", "여행 일정", "바우처 OCR", "여행 앱"],
    ogLocale: "ko_KR",
    ogImageAlt: "바이브트립(Vibe Trip) 로고 — 나침반과 비행기 심볼",
  },

  header: {
    nav: {
      features: "특장점",
      "how-it-works": "이용안내",
      "vibe-pick": "바이브픽",
      pass: "패스안내",
      faq: "FAQ",
    } satisfies Record<NavId, string>,
    downloadApp: "앱 다운로드",
    homeAria: "Vibe Trip 홈",
    mainNavAria: "주요 메뉴",
    mobileNavAria: "모바일 메뉴",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    languageAria: "언어 선택",
  },

  store: {
    appStore: "App Store에서 다운로드",
    googlePlay: "Google Play에서 다운로드",
  },

  hero: {
    badge: "특허 출원 기술 (Patent Pending)",
    titleLine1: "대화 한 번으로 일정 완성,",
    titlePrefix: "현지에서는",
    titleGradient: "내 손안의 AI 밀착 가이드",
    description:
      "여러 앱을 오가던 여행 준비는 이제 그만. AI 플래닝부터 바우처 자동 정리, 실시간 위치 기반 현지 케어까지 바이브트립 하나로 끝내세요.",
    trustPoints: ["여행 일정 자동 생성", "여정 실시간 케어", "바우처 자동 정리", "내 일정 상품화(C2C)"],
  },

  phone: {
    aria: "바이브트립 AI 어시스턴트 루티가 오사카 1일차 여행 타임라인을 생성한 앱 화면",
    chipVoucher: { title: "바우처 4건 자동 정리", sub: "OCR로 자동 인식" },
    chipLocation: { title: "현재 위치 기반 추천", sub: "도보 4분 · 지금 영업 중" },
    assistantName: "루티 (Routi)",
    assistantStatus: "오사카 일정 생성 완료",
    userMsg: "10월 오사카 3박 4일, 맛집 위주로 짜줘!",
    botMsg: "좋아요. 도착 첫날 동선을 난바 중심으로 묶었어요 👇",
    dayLabel: "DAY 1 · 10월 17일",
    autoBadge: "자동 생성",
    arrive: { title: "간사이 공항 도착", time: "10:20", sub: "하루카 특급 · 난바역 45분" },
    checkin: { title: "호텔 체크인", time: "13:00", sub: "난바 오리엔탈 호텔", badge: "바우처 확인" },
    eats: { title: "현지 맛집 · 쿠시카츠 다루마", time: "18:30", sub: "4.7 · 도보 6분 · 웨이팅 15분" },
    viewAll: "전체 일정 보기",
    typing: "루티가 DAY 2를 짜는 중",
    placeholder: "루티에게 무엇이든 물어보세요",
  },

  painSolution: {
    eyebrow: "Pain & Solution",
    titleLines: ["여행 준비, 아직도 여러 앱 오가며", "고생하시나요?"],
    description: "흩어진 예약 정보와 끝없는 검색 대신, 바이브트립이 한 화면에서 정리합니다.",
    before: {
      badge: "BEFORE",
      caption: "복잡한 여행 준비",
      tabs: ["예약 메일", "캡처 폴더", "지도 앱", "블로그", "메모장"],
      title: "준비만 며칠, 정리만 수십 번",
      items: [
        "항공·호텔·교통 예약 메일과 캡처를 일일이 뒤져서 정리",
        "블로그, 지도 앱, 메모장을 오가며 동선을 손으로 계산",
        "일정이 하나 바뀌면 이동 시간을 처음부터 다시 계산",
        "현지에 도착하면 또 검색하고, 또 물어보고",
      ],
    },
    after: {
      badge: "AFTER",
      time: "3분 완성",
      chip: "Vibe Trip 하나로",
      title: "3분 완성, 바이브트립",
      items: [
        "대화 한 번으로 AI가 하루 단위 타임라인을 자동 생성",
        "바우처를 올리면 OCR이 항공·호텔·교통 정보를 자동 정리",
        "일정을 옮기면 이동 수단과 경로를 자동으로 다시 계산",
        "현지에서는 위치·시간에 맞춰 앱이 먼저 케어하고 안내",
      ],
    },
  },

  bento: {
    eyebrow: "Why Vibe Trip",
    titleLines: ["여행의 처음부터 끝까지,", "4가지 핵심 강점"],
    description: "일정 설계, 바우처 정리, 현지 케어, 그리고 나만의 일정 상품화까지 하나의 앱에서 이어집니다.",
    ai: {
      tag: "AI 동선",
      title: "대화로 짜고, 바뀌면 다시 계산하는 동선",
      body: "가고 싶은 곳을 말하면 AI가 세로형 타임라인으로 하루 일정을 구성해요. 일정을 옮기면 이동 수단과 경로도 자동으로 다시 계산됩니다.",
      recalc: "경로 자동 재계산",
      before: [
        { time: "10:20", label: "공항 도착" },
        { time: "11:30", label: "이동 · 45분" },
        { time: "13:00", label: "호텔 체크인" },
      ],
      after: [
        { time: "10:20", label: "공항 도착" },
        { time: "12:10", label: "이동 · 재계산" },
        { time: "13:40", label: "호텔 체크인" },
      ],
    },
    ocr: {
      tag: "바우처 OCR",
      title: "올리기만 하면 정리 끝",
      body: "Gemini Vision 기반 하이브리드 파싱으로 항공·호텔·교통 바우처를 읽어 일정에 반영해요.",
      vouchers: ["항공 바우처", "호텔 바우처", "교통 바우처"],
      recognized: "인식",
    },
    care: {
      tag: "현지 실시간 케어",
      title: "위치와 시간을 읽고 먼저 알려줘요",
      body: "지금 있는 곳과 시간에 맞춰 다음 행동과 주변 추천, 도슨트를 앱이 먼저 푸시합니다.",
      push1: { title: "지금 위치 기반 추천", sub: "도보 4분 · 지금 영업 중" },
      push2: { title: "도슨트 알림", sub: "근처 명소의 이야기를 들려드려요" },
    },
    pick: {
      tag: "바이브 픽",
      title: "내 여행 일정이 상품이 되는 C2C 마켓",
      body: "다녀온 여행을 바이브 픽에 공유하면, 다른 여행자가 내 일정을 이용해요. 이용될 때마다 크리에이터 리베이트가 지갑에 쌓입니다.",
      nodes: [
        { label: "내 일정", sub: "여행 후 공유" },
        { label: "바이브 픽", sub: "다른 여행자가 이용" },
        { label: "리베이트 지갑", sub: "수익 적립" },
      ],
    },
  },

  howItWorks: {
    eyebrow: "How It Works",
    titleLines: ["여행 전, 여행 중, 여행 후", "모든 순간을 이어줍니다"],
    description: "단계를 눌러 바이브트립이 각 순간에 어떻게 함께하는지 확인해 보세요.",
    tablistAria: "바이브트립 이용 단계",
    stepWord: "STEP",
    steps: [
      {
        phase: "Pre-Trip",
        label: "플래닝 · 바우처 OCR",
        summary: "대화로 일정을 만들고 바우처를 자동 정리",
        title: "대화로 일정을 짜고, 바우처는 올리기만 하세요",
        points: [
          { title: "대화형 AI 플래닝", body: "도시와 취향을 말하면 하루 단위 타임라인이 완성돼요." },
          { title: "바우처 OCR 자동 정리", body: "항공·호텔·교통 바우처를 읽어 알맞은 시간과 장소에 배치해요." },
        ],
      },
      {
        phase: "On-Trip",
        label: "실시간 GPS 케어 · 모빌리티 호출",
        summary: "현지에서 앱이 먼저 챙기고 이동까지 연결",
        title: "현지에서는 앱이 먼저 챙겨요",
        points: [
          {
            title: "실시간 위치·시간 케어",
            body: "지금 있는 곳과 시간에 맞춰 다음 동선, 주변 추천, 도슨트를 먼저 알려줘요.",
          },
          {
            title: "모빌리티 호출",
            body: "국가에 맞는 서비스로 바로 연결돼요. 한국·글로벌은 Uber, 동남아 6개국은 Grab.",
          },
        ],
      },
      {
        phase: "Post-Trip",
        label: "일정 마켓 공유 · 수익",
        summary: "다녀온 일정을 공유하고 리베이트 적립",
        title: "다녀온 일정이 다음 여행자의 상품이 돼요",
        points: [
          { title: "바이브 픽에 일정 공유", body: "내가 다녀온 여행 일정을 C2C 마켓 ‘바이브 픽’에 올릴 수 있어요." },
          { title: "크리에이터 리베이트 지갑", body: "내 일정이 이용되면 리베이트가 지갑에 적립돼요." },
        ],
      },
    ],
    visuals: {
      pre: {
        userMsg: "10월 오사카 3박 4일, 맛집 위주로 짜줘!",
        botMsg: "DAY 1 동선을 난바 중심으로 묶었어요.",
        vouchers: ["항공 바우처", "호텔 바우처", "교통 바우처"],
        reflected: "일정 반영",
      },
      on: {
        locationTitle: "현재 위치 기반 추천",
        locationSub: "도보 4분 · 지금 영업 중",
        nudge: "다음 일정까지 시간이 남았어요. 근처 명소의 도슨트를 들어볼까요?",
        mobilityTitle: "국가별 모빌리티 연결",
        uberRegion: "한국 · 글로벌",
        grabRegion: "VN · TH · SG · MY · PH · ID",
      },
      post: {
        itineraryTitle: "오사카 3박 4일 맛집 코스",
        pickTag: "바이브 픽",
        description: "내가 다녀온 일정을 마켓에 공유하면 다른 여행자가 그대로 이용해요.",
        walletTitle: "리베이트 지갑",
        walletSub: "일정이 이용되면 적립돼요",
      },
    },
  },

  pass: {
    eyebrow: "Pass & Reward",
    titleLines: ["여행 한 번에 패스 한 번,", "일정을 공유하면 패스권이 무료"],
    description:
      "정기 결제 없이 떠나는 여정마다 필요한 만큼만. 내 여행 일정을 공유하고 공유받은 사람이 회원가입하면 여정 패스권을 무료로 지급해 드려요.",
    passCard: {
      badge: "Pay-Per-Trip",
      title: "1회 여정 패스",
      description: "여행 한 번, 패스 한 번. 다음 여행에는 다음 패스만 있으면 돼요.",
      features: [
        "대화형 AI 일정 플래닝",
        "바우처 OCR 자동 정리",
        "실시간 현지 케어 · 도슨트",
        "Uber · Grab 모빌리티 호출 연결",
      ],
    },
    rewardCard: {
      eyebrow: "Share & Reward",
      title: "일정 공유하고 친구가 가입하면 패스권 무료",
      badge: "패스권 무료",
      badgeAria: "여정 패스권 무료 지급",
      steps: [
        { title: "내 일정을 공유해요", body: "완성한 여행 일정을 다른 사람에게 공유해요." },
        { title: "공유받은 사람이 회원가입", body: "공유받은 사람이 바이브트립에 회원가입해요." },
        { title: "여정 패스권 무료 지급", body: "일정을 공유한 나에게 여정 패스권이 무료로 지급돼요." },
      ],
      note: "* 지급 시점과 세부 조건은 앱 내 안내를 따릅니다.",
    },
  },

  faq: {
    eyebrow: "FAQ & Trust",
    title: "자주 묻는 질문",
    description:
      "궁금한 점을 먼저 확인해 보세요. 바이브트립이 무엇을 하고, 무엇을 하지 않는지 있는 그대로 안내합니다.",
    trustCards: [
      { title: "특허 출원 중", body: "실시간 컨텍스트 엔진 · 이종 데이터 파싱" },
      { title: "Gemini Vision OCR", body: "항공·호텔·교통 바우처 하이브리드 파싱" },
      { title: "Uber · Grab 연결", body: "국가별 모빌리티 딥링크" },
    ],
    /*
     * PROMO (paused): B2B offset refund FAQ. Re-enable together with the offset card in
     * PassOffsetSection.tsx (and the English copy in en.ts) when the promotion returns.
     *   Q: 제휴 예약 시 100% 환급은 어떻게 이루어지나요?
     *   A: 1회 여정 패스로 이용을 시작한 뒤 앱에서 제휴 상품을 예약하면 패스 결제 금액이 100% 환급되어
     *      실질 이용 비용이 0원이 됩니다. 환급 대상 제휴 상품과 세부 조건은 앱 내 안내를 따릅니다.
     *
     * TODO(needs confirmation): replace the refund answer and the pass-reward answer with the
     * final policy text.
     */
    items: [
      {
        question: "외부에서 예약한 바우처도 사용할 수 있나요?",
        answer:
          "예약 사이트와 직접 연동하는 방식이 아니라, 바우처 자체를 인식하는 방식이에요. 항공·호텔·교통 바우처를 앱에 올리면 Gemini Vision OCR 기반 하이브리드 파싱으로 시간과 장소 정보를 읽어 일정 타임라인에 자동 반영합니다. 현재 지원하는 유형은 항공, 호텔, 교통 바우처예요.",
      },
      {
        question: "1회 여정 패스는 환불되나요?",
        answer:
          "환불 가능 여부와 기준은 결제 시 안내되는 내용과 이용약관의 환불 규정을 따릅니다. 자세한 내용은 이용약관 또는 고객센터에서 확인하실 수 있어요.",
      },
      {
        question: "일정을 공유하면 여정 패스권을 무료로 받을 수 있나요?",
        answer:
          "내 여행 일정을 다른 사람에게 공유하고, 공유받은 사람이 바이브트립에 회원가입하면 일정을 공유한 분께 여정 패스권이 무료로 지급됩니다. 지급 시점과 세부 조건은 앱 내 안내를 따릅니다.",
      },
      {
        question: "모빌리티 호출은 어느 나라에서 되나요?",
        answer:
          "국가에 맞는 서비스로 자동 연결돼요. 한국과 글로벌 지역은 Uber, 베트남·태국·싱가포르·말레이시아·필리핀·인도네시아 등 동남아 6개국은 Grab으로 연결됩니다.",
      },
      {
        question: "바이브 픽에서는 어떻게 수익이 생기나요?",
        answer:
          "다녀온 여행 일정을 C2C 마켓 ‘바이브 픽’에 공유하면, 다른 여행자가 내 일정을 이용할 때 크리에이터 리베이트가 지갑에 적립됩니다. 세부 정산 조건은 앱 내 안내를 따릅니다.",
      },
      {
        question: "특허는 등록된 기술인가요?",
        answer: `실시간 컨텍스트 엔진 및 이종 데이터 파싱 기술에 대한 특허(출원번호 ${patentNo})는 현재 출원 단계입니다.`,
      },
    ],
  },

  footer: {
    tagline: "대화 한 번으로 일정 완성, 현지에서는 내 손안의 AI 밀착 가이드.",
    patentLabel: "특허 출원 번호",
    patentNumber: patentNo,
    patentStatus: "(특허 출원 중)",
    brand: "Vibe Trip (바이브트립)",
    rightsReserved: "All rights reserved.",
    // TODO: replace the placeholders with the real company info.
    company: {
      legalName: "바이브 트립",
      ceo: "[대표자명 입력]",
      mailOrderNo: "제0000-지역-0000호",
      address: "[사업장 주소 입력]",
    },
    labels: {
      legalName: "상호",
      ceo: "대표자",
      businessNo: "사업자등록번호",
      mailOrderNo: "통신판매업 신고번호",
      address: "주소",
      support: "고객센터",
    },
    terms: "이용약관",
    privacy: "개인정보처리방침",
    legalNavAria: "약관 및 정책",
    legal: legalKo,
  },
};

export type Dictionary = typeof ko;
export default ko;
