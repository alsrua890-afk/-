import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK according to system guidelines
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `당신은 대한민국 대표 산업용 및 초고순도 특수가스 전문기업 (주)MS가스의 공식 AI 상담 어시스턴트 "MS 가스봇"입니다.
방문 고객, 기업 구매 담당자, 엔지니어, 연구원들에게 항상 정중하고 전문적이며 명확하게 한국어로 답변하세요.

[(주)MS가스 핵심 정보]
- 창립: 1974년 (50년 전통, 2024년 대한민국 가스안전대상 '은탑산업훈장' 수훈)
- 본사: 부산광역시 사상구 학감대로 161 (주)MS가스
- 대표 전화: 051-314-1000 / 팩스: 051-314-1004 / 이메일: info@msgas.co.kr
- 전국 네트워크: 전국 8개 권역망, 17개 거점 직영 영업소 및 충전소 (부산 본사, 사하 공장, 울산 온산 터미널, 경기 화성 반도체 공급기지, 평택, 여수, 광주 하남산단, 군산 새만금 등)
- 주요 제품 및 솔루션:
  1. 특수가스: 반도체/디스플레이/2차전지용 6N(99.9999%) 초고순도 Ar, He, Silane, 에칭/클리닝 가스
  2. 산업용 가스: 대용량 초저온 탱크로리 벌크 및 실린더 공급 (액체산소 LOX, 액체질소 LIN, 액체아르곤 LAR, 탄산가스 LCO2)
  3. 연료용 가스: 프로판(C3H8), 프라멕스, 이소부탄 등 고열량 청정 산업연료
  4. 의료용 가스: 식약처 MFDS GMP 인증 의료용 산소(ICU 및 수술실), 마취용 N2O, 멸균가스
  5. 표준 가스: 국가공인 KOLAS 규격 분석실 기반 대기환경 측정 및 연구실 교정용 다성분 정밀 혼합가스(ppm/ppb 보증)
  6. 엔지니어링 & 안전 서비스: 초저온 저장탱크 및 기화기 시공, 클린룸 배관 공사, 가스퍼지(Purge) 용역, HAZOP 안전진단
  7. 친환경 미래 에너지: 울산 규제자유특구 암모니아 TTS(Truck to Ship) 벙커링 인프라 구축 R&D 주관, 경남 암모니아 혼소 추진선박 실증
  8. 스마트 안전관제: 24/7 실시간 무선 텔레메트리 관제를 통해 고객사 저장탱크 잔량·압력을 원격 모니터링하고 재고 소진 전 선제적 익일 직배송 (정시 도착율 99.8%)

[답변 가이드라인]
- 고객의 문의 의도(가스 규격, 공급 방식, 견적 문의, 영업소 위치, 안전자료 등)를 빠르게 파악하여 체계적이고 친절하게 안내하세요.
- 견적이나 긴급 공급 요청의 경우 홈페이지 하단의 '간편 온라인 상담 접수' 폼이나 대표전화 051-314-1000으로 연결할 수 있음을 자연스럽게 안내하세요.
- 답변은 가독성 좋게 글머리 기호(bullet points)와 짧은 단락을 활용하세요.`;

// API Route for MS Gas Chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // If Gemini API Key is available, use official GoogleGenAI SDK with gemini-3.8-flash
    if (process.env.GEMINI_API_KEY) {
      try {
        const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

        // Add previous message history if available
        if (Array.isArray(history)) {
          for (const item of history.slice(-6)) {
            if (item.sender === 'user') {
              contents.push({ role: 'user', parts: [{ text: item.text }] });
            } else if (item.sender === 'bot') {
              contents.push({ role: 'model', parts: [{ text: item.text }] });
            }
          }
        }

        // Add current user prompt
        contents.push({ role: 'user', parts: [{ text: message }] });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        const reply = response.text || '죄송합니다. 답변을 생성하지 못했습니다. 대표전화 051-314-1000으로 문의해 주세요.';
        res.json({ reply });
        return;
      } catch (geminiError: any) {
        console.error('Gemini API Error, falling back to knowledge base:', geminiError);
      }
    }

    // Domain Knowledge Base Fallback if API key is not configured or during local offline testing
    const lower = message.toLowerCase();
    let fallbackReply = '';

    if (lower.includes('특수가스') || lower.includes('반도체') || lower.includes('아르곤') || lower.includes('헬륨') || lower.includes('순도')) {
      fallbackReply = `(주)MS가스의 **초고순도 특수가스** 안내입니다.
- **순도 등급**: 99.9999% (6N) ~ 99.99999% (7N) 극미량 불순물 제어
- **주요 품목**: 고순도 아르곤(Ar), 헬륨(He), 실란(SiH4), 에칭 가스, 챔버 클리닝 가스
- **공급 형태**: 47L 고압 실린더, Y-Cylinder, ISO Module 컨테이너, 번들 스키드
- **품질 보증**: KOLAS 규격 클린룸 분석실에서 GC-MS 전수검사 후 개별 시험성적서(CoA)를 발급합니다.
상세 사양이나 배합 의뢰는 홈페이지 상단 '제품소개' 또는 대표전화(051-314-1000)로 문의 가능합니다.`;
    } else if (lower.includes('탱크로리') || lower.includes('벌크') || lower.includes('산업용') || lower.includes('산소') || lower.includes('질소') || lower.includes('탄산')) {
      fallbackReply = `(주)MS가스의 **산업용 벌크 가스 공급 서비스** 안내입니다.
- **주요 품목**: 액체산소(LOX), 액체질소(LIN), 액체아르곤(LAR), 액체탄산(LCO2)
- **운송 인프라**: 전국 8개 권역 직결 대형 초저온 탱크로리 선단 운용
- **스마트 관제**: 24시간 실시간 무선 텔레메트리 센서로 고객사 저장탱크 잔량을 원격 감지하여 잔량 소진 전 익일 직배송(정시 도착율 99.8%)을 수행합니다.
- 고객사 플랜트 규모에 맞춘 저장탱크 및 기화기 무상/리스 시공 상담도 지원합니다.`;
    } else if (lower.includes('암모니아') || lower.includes('벙커링') || lower.includes('esg') || lower.includes('친환경')) {
      fallbackReply = `(주)MS가스의 **친환경 미래 에너지 & 암모니아 벙커링 R&D** 안내입니다.
- **울산 규제자유특구 주관**: 『암모니아 TTS(Truck to Ship) 벙커링 인프라 구축 및 기자재·표준 개발』 국책 실증을 선도하고 있습니다.
- **경남 친환경 선박 실증**: 암모니아-디젤 혼소 연료 추진선박의 안전 벙커링 및 시험 운항 안전 가이드라인을 수립 중입니다.
- **탄소중립 성과**: 온실가스 감축 공로 충남도지사 표창 및 가스안전대상 은탑산업훈장을 수훈하였습니다.`;
    } else if (lower.includes('영업소') || lower.includes('지점') || lower.includes('위치') || lower.includes('전화') || lower.includes('연락처')) {
      fallbackReply = `(주)MS가스의 **전국 거점 영업소 및 연락처** 안내입니다.
- **전국 대표 전화**: 051-314-1000 (평일 08:30 ~ 17:30)
- **영남권 본부**: 부산 사상 본사, 사하 공장, 울산 온산 플랜트, 창원 지사, 양산 출장소
- **수도권·중부**: 경기 화성 반도체 공급기지, 평택 물류센터, 인천 항만 저장소, 당진/서산 지사
- **호남·서남권**: 광주 하남산단 지사, 여수 국가산단 스테이션, 군산 새만금 배터리지점
홈페이지 하단 '오시는 길'을 클릭하시면 17개 지점별 주소와 저장 용량을 한눈에 확인하실 수 있습니다.`;
    } else if (lower.includes('견적') || lower.includes('가격') || lower.includes('상담') || lower.includes('구매') || lower.includes('주문')) {
      fallbackReply = `(주)MS가스 **공급 견적 및 맞춤 기술 상담** 안내입니다.
- **간편 온라인 접수**: 웹사이트 메인 화면 하단의 '간편 온라인 상담 접수' 폼에 기업명, 연락처, 필요 가스 종류를 남겨주시면 담당 엔지니어가 영업일 기준 2시간 내로 연락드립니다.
- **긴급 견적/공급 직통**: 051-314-1000 / 이메일: info@msgas.co.kr
고객사의 월 사용 유량과 설비 입지에 가장 경제적인 공급 방안을 제시해 드리겠습니다.`;
    } else {
      fallbackReply = `반갑습니다! (주)MS가스 AI 고객지원 어시스턴트입니다.
무엇을 도와드릴까요?
- **초고순도 특수가스** (반도체/2차전지용 6N 아르곤, 헬륨, 실란 등)
- **산업용 벌크 공급** (탱크로리 액체산소, 질소, 아르곤, 탄산)
- **친환경 암모니아 벙커링 R&D** 및 지속가능경영
- **전국 17개 거점 영업소** 위치 및 긴급 공급 문의
- **공식 시험성적서(CoA) 및 MSDS(물질안전보건자료)** 열람

문의사항을 자유롭게 입력해 주시면 신속히 안내해 드리겠습니다.`;
    }

    res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    res.status(500).json({
      error: '챗봇 응답 처리 중 오류가 발생했습니다. 대표전화 051-314-1000으로 문의해 주세요.',
    });
  }
});

// Setup development vs production static hosting
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve('dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('dist/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`MS Gas Full-Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
