import { IActivity, IAward, IProject } from '@/types/about';

export const introductions: string[] = [
  '더 나은 서비스 제공이라는 공통된 목표를 위해 서로의 지식을 공유하고 고민하는 개발자라는 직업에 푹 빠졌습니다.',
  '개발자의 본질은 사용자의 불편함을 해소하는 것이라고 생각합니다.',
  `“이 기능을 추가함으로써 사용자의 어떤 문제를 해결할 수 있어?” 라는 질문을 자주 던지며 개발 방향을 정해나가고 있습니다.`,
  '원활한 커뮤니케이션, 개발자로서의 깊은 전문성, 그리고 지속적인 성장을 바탕으로 비즈니스 성공에 적극적으로 기여하는 개발자가 되고자 합니다.',
];

export const projects: IProject[] = [
  {
    name: '< HYUN />',
    title: '개인 기술 블로그',
    role: 'Front-End',
    period: '2024.12 ~ 2025.02 (5주)',
    skills: ['Next.js', 'TypeScript', 'MDX', 'Tailwind CSS', 'SEO', 'Google Analytics'],
    descriptions: [
      'MDX를 활용하여 마크다운 기반 블로그 포스팅 작성 환경 구축',
      '반응형 디자인을 적용하여 다양한 디바이스에서 일관된 사용자 경험 제공',
      'Google Lighthouse 기반으로 성능 분석 및 최적화 작업 진행',
      '각 포스팅 별 제목, 설명, 태그 등 동적 메타 데이터 처리로 SEO 향상',
      'generateStaticParams를 활용하여 빌드 타임에 동적 URL 경로를 미리 생성, 페이지 로딩 성능 30% 이상 향상',
      'MDX 파일 경로와 포스팅 데이터를 캐싱, 반복되는 콘텐츠 요청 시 응답 시간 단축',
      'Google Analytics를 통한 사용자 행동 분석 및 블로그 성과 측정',
    ],
    imageSrc: '/project/blog_logo.png',
    githubLink: 'https://github.com/hyun812/my-blog',
    primaryColor: '#375995',
  },
  {
    name: 'EaziONE',
    title: '외국인 노동자 민원 처리 서비스',
    role: 'Front-End',
    period: '2024.07 ~ 2024.08 (3주)',
    skills: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS'],
    descriptions: [
      '새싹 해커톤에 참여하여 다양한 이해 관계자들과의 원할한 협업 진행',
      'openAI ChatGPT API를 활용하여 prompt 작성 및 AI 챗봇 기능 구현',
      '디자인 토큰을 활용하여 프로젝트 UI 요소 전반의 일관성 보장',
      'Axios Interceptor를 활용하여 중복된 로직 처리 및 에러 핸들링 구현',
      '위치 기반 외국인 사무소 추천 및 실시간 길안내 기능 구현',
    ],
    imageSrc: '/project/eazione_logo.png',
    githubLink: 'https://github.com/sesac-dev/eazione-front',
    primaryColor: '#0066FE',
  },
  {
    name: '가까이',
    title: '가족 간 일상 및 추억 공유 서비스',
    role: 'Front-End',
    period: '2024.04 ~ 2024.05 (6주)',
    skills: ['React', 'TypeScript', 'FCM', 'TanStack Query', 'Tailwind CSS', 'Zustand'],
    descriptions: [
      '프론트엔드 리더로 참여하여 컴포넌트 및 디렉토리 설계와 기술 스택 선정',
      'Google Forms을 통한 실사용자들의 피드백을 바탕으로 서비스 유지보수 진행',
      '아바타 상태 변경 및 꾸미기 낙관적 업데이트 적용으로 사용자 경험 향상',
      '재사용 가능한 공통 컴포넌트 개발 (Button, Modal, BottomSheet 등)',
      'MediaStream API 및 canvas를 활용하여 카메라 전, 후면 캡쳐 구현',
      '메시지 조회 무한스크롤 구현',
    ],
    imageSrc: '/project/nearby_logo.png',
    githubLink: 'https://github.com/TeamAbbboo/nearby',
    primaryColor: '#8BA177',
  },
  {
    name: 'preview',
    title: 'AI 기반 면접 피드백 서비스',
    role: 'Front-End',
    period: '2024.02 ~ 2024.04 (6주)',
    skills: ['React', 'TypeScript', 'Storybook', 'MSW', 'TanStack Query', 'Tailwind CSS', 'Zustand'],
    descriptions: [
      'Mock Service Worker 도입하여 프론트엔드와 백엔드 팀 간의 작업 병목 현상 해소',
      'Storybook 도입하여 독립적인 컴포넌트 개발 및 커뮤니케이션 강화',
      'MediaStream API를 활용한 면접 진행 및 녹화 핵심 기능 구현',
      'Speech-to-Text를 활용하여 질문에 대한 답변 기반 꼬리 질문 생성 로직 구현',
      '이력서 기반 질문 생성 완료 시 Server-Sent Events 실시간 알림 기능 구현',
    ],
    imageSrc: '/project/preview_logo.png',
    githubLink: 'https://github.com/d102-preview/preview',
    primaryColor: '#5A8AF2',
  },
  {
    name: 'BID',
    title: '라이브 스트리밍 개인 경매 서비스',
    role: 'Front-End',
    period: '2024.01 ~ 2024.02 (6주)',
    skills: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Zustand'],
    descriptions: [
      'Gerrit를 통한 커밋 단위 코드 리뷰로 명확한 변경 사항 추적 및 코드 품질 향상',
      '상위 입찰 발생 및 라이브 방송 전 Server-Sent Events 실시간 알림 기능 구현',
      'iamport API를 활용하여 카카오 페이를 통한 모의 포인트 충전 구현',
      'useState를 이용하여 카테고리, 지역, 경매 상태 등 다양한 필터링 상태 관리 구현',
      '경매글 작성 구현 ( 다중 사진 등록 및 이미지 미리보기 등 )',
    ],
    imageSrc: '/project/bid_logo.png',
    githubLink: 'https://github.com/Team928/BID',
    primaryColor: '#6B54C4',
  },
];

export const activities: IActivity[] = [
  {
    name: '블레이버스 MVP 해커톤',
    period: '2025.02.09 ~ 2025.02.20',
    descriptions: ['초기 창업팀의 MVP를 구현, 실질적인 비즈니스 가치에 대한 고민'],
  },
  {
    name: '새싹 해커톤',
    period: '2024.07.15 ~ 2024.08.02',
    descriptions: ['다양한 이해 관계자들과 협업하며 짧은 기간 안에 완성도 높은 서비스 구현'],
  },
  {
    name: '삼성 청년 SW 아카데미',
    period: '2023.07 ~ 2024.06',
    descriptions: [
      'SW 필수 지식과 알고리즘 중심 교육 및 총 3번의 실무 환경과 동일한 개발방식의 팀 프로젝트 수행 (1600시간 이수)',
    ],
  },
  {
    name: '계명대학교 컴퓨터공학과',
    period: '2017.03 ~ 2023.02',
    descriptions: [
      '컴퓨터공학과에서 4년간 학습하며 컴퓨터 구조, 소프트웨어 공학, 알고리즘, 데이터베이스 등의 과목을 우수한 성적으로 졸업',
    ],
  },
];

export const awards: IAward[] = [
  {
    name: 'SSAFY 우수 자율 프로젝트',
    date: '2024.05.20',
    descriptions: '가족 간 일상 및 추억 공유 서비스 "가까이" 프로젝트를 진행하여 2등 우수상을 수상',
  },
  {
    name: 'SSAFY 우수 특화 프로젝트',
    date: '2024.04.04',
    descriptions: 'AI 기반 면접 피드백 서비스 "preview" 프로젝트를 진행하여 1등 최우수상 수상',
  },
  {
    name: '정보처리기사 자격증',
    date: '2023.06.09',
    descriptions: '한국산업인력공단',
  },
];
