import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'MLOps 데이터 저장 스토리지 및 자동 학습 플랫폼 개발',
      startedAt: '2024-07',
      where: '롯데이노베이트 AI기술팀',
      descriptions: [
        {
          content:
            '대용량 이미지 및 바이너리 데이터 저장을 고려한 스토리지 구조 설계 및 UI/UX 개발',
        },
        {
          content: 'Next-Auth 기반의 로그인 인증 도입으로 세션 관리 및 보안성 강화',
        },
        {
          content: 'ErrorBoundary & Suspense를 활용한 UX, DX 향상 노력',
        },
        {
          content: 'Nginx 리버스 프록시 설정, 내부 API 연동 구조 설계',
        },
        {
          content: 'Jenkins 기반 CI/CD 구축, GitLab 알림 연동으로 개발 효율성 개선',
        },
        {
          content: '기술적 고려 및 성과 달성',
          weight: 'MEDIUM',
          descriptions: [
            { content: '실제 사용자의 반복 작업을 줄이기 위한 직관적 인터페이스 설계' },
            { content: '운영자 작업 시간 30% 단축, 팀 내 공통 데이터 저장 시스템 확립' },
          ],
        },
      ],
    },
    {
      title: ' 롯데 그룹 AI 플랫폼 ‘아이멤버’ 프론트엔드 개발',
      startedAt: '2024-07',
      endedAt: '2025-02',
      where: '롯데이노베이트 AI기술팀',
      descriptions: [
        {
          content: 'GPT 및 롯데GPT 기반 대화형 보고서 생성 서비스 UI 및 기능 구현',
        },
        {
          content: 'LLM Streaming API 기반 채팅 인터페이스 설계 및 UX 최적화',
        },
        {
          content:
            'Provider, Context API 를 활용해 Chat 기능 페이지 별 공유, 웹/앱 환경에서도 분리해 편리한 유지보수 환경 구축',
        },
        {
          content: 'AI 응답 지연에 대응한 UX 보완 (타이핑 시각화, 스크롤 유지 등)',
        },
        {
          content: 'AI API 호출 속도와 사용자 입력 속도 간 비동기 처리 최적화',
        },
        {
          content: '기술적 고려 및 성과 달성',
          weight: 'MEDIUM',
          descriptions: [
            { content: '보고서 작성 시간 50% 이상 단축' },
            {
              content:
                '출시 이후 누적 사용자 수 216% 증가, 내부 파일 관리 프로세스 디지털 전환 성공',
            },
          ],
        },
      ],
    },
    {
      title: '롯데이노베이트 사내 인트라넷 서비스 개발',
      startedAt: '2022-06',
      endedAt: '2024-06',
      where: '롯데이노베이트 IS팀',
      descriptions: [
        {
          content:
            'SSR과 CSR을 적절히 활용해서 최적화된 렌더링 환경 구성. 매 페이지 lighthouse 점수 90점 이상',
        },
        {
          content:
            '타입스크립트를 사용해 타입 정의해 타입에 의한 오류 최소화, eslint와 prettier를 사용해 빌드 오류 최소화. 빌드 최적화와 무중단 배포를 활용해 CI/CD 향상(빌드 타임 1분내외, 배포 시 중단 시간 5초 내외)',
        },
        {
          content:
            'Git flow를 활용해 4명의 개발자들과 공동 개발, 협업능력 강화. Git commit 로그 수 4명 중 최다',
        },
        {
          content:
            '관리자 화면 Grid를 활용해 일목요연하게 데이터 표현, 느린 화면 로딩 시 인피니티 스크롤을 활용해 속도 50% 개선',
        },
        {
          content: '다중 사용 컴포넌트 공통화 개발',
        },
        {
          content: 'Front - Back 구조에서 SAML 인증 방식 구현으로 SSO 인증 서비스 구독료 절감',
        },
      ],
    },
    {
      title: '링크드마켓 서비스 개발',
      startedAt: '2021-02',
      endedAt: '2021-08',
      where: '트라이패스',
      descriptions: [
        {
          content:
            '상품 등록, 검색, 채팅, 결제 흐름까지 포함한 엔드 투 엔드 전반의 프론트 개발 수행',
        },
        {
          content:
            '모바일 앱 대응 UI/UX 설계 및 하이브리드 앱 빌드, Cordova 또는 Ionic 기반으로 웹을 모바일 앱 형태로 빌드하여 앱스토어 배포',
        },
        {
          content: 'PHP 기반 백엔드 API 연동 및 상태 관리 구현',
        },
        {
          content:
            'MySQL을 활용한 상품/사용자 데이터 모델링 및 조회 최적화, 검색, 필터링, 정렬 등 다양한 조건을 반영한 효율적 쿼리 구조 설계',
        },
        {
          content:
            '사용자 관점의 서비스 품질 개선 주도, 사용자 이탈 포인트를 분석하고 UI 흐름을 단순화하여 재방문율 향상',
        },
      ],
    },
  ],
};

export default project;
