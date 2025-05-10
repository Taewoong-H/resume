import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '롯데이노베이트',
      positions: [
        {
          title: 'AI기술팀 프론트엔드 개발',
          startedAt: '2024-07',
          descriptions: [
            '롯데 그룹사 만의 AI 플랫폼, AI 개발자 대상 MLOps 서비스 프론트엔드 개발',
            '그룹사 대내외 고객을 대상으로 한 프로젝트 화면 설계',
            'Kubernetes 기반 프론트엔드 인프라 서버 환경 구축',
            'PM, 화면 디자이너, 백엔드 개발자, AI 모델 개발자와의 커뮤니케이션',
            '기술 세미나 참석 및 팀내 발표/공유를 통한 팀 내 전문성 강화',
          ],
          skillKeywords: [
            'Javascript',
            'Typescript',
            'Next.js',
            'TailwindCss',
            'Recoil',
            'React-Query',
            'Nginx',
            'Jenkins',
            'Git',
          ],
        },
        {
          title: '이노베이트 IS팀',
          startedAt: '2021-10',
          endedAt: '2024-06',
          descriptions: [
            '사내 포탈, 전자결재, 계열사 계정 관리 운영 업무',
            '사내 인트라넷 신규 서비스 프론트엔드 개발',
            '레거시 시스템 리팩토링 및 유지보수',
            'MsSQL 데이터베이스 유지보수 및 관리',
            '대내 고객 CS 처리 및 안정적인 운영 업무 능력 발휘',
            '철저한 장애 대응 훈련, 시스템 보안 관리 등 특이상황 미연에 방지',
          ],
          skillKeywords: ['C#', 'Java', 'Node.js', 'Next.js', 'MsSQL', 'Docker', 'Jenkins', 'Git'],
        },
      ],
    },
    {
      title: '(주)트라이패스',
      positions: [
        {
          title: '링크드마켓 서비스 개발',
          startedAt: '2021-02',
          endedAt: '2021-09',
          descriptions: [
            '링크드마켓 웹/앱 마켓 서비스 프론트엔드 개발, 백엔드 및 데이터베이스 관리',
            '애자일 방식을 활용해, 2주간의 스프린트와 매일 회의 및 리뷰로 빠른 개발과 의사소통',
            '사용자 수 증가로 인한 페이지 성능 개선(DB Query 수정, API 분산, 레이지 로딩 적용 등)',
            'UI/UX팀과 협업으로 디자인 리뉴얼, 이용자수 50% 증가 달성',
          ],
          skillKeywords: ['php', 'Vue.js', 'MySQL', 'Git'],
        },
      ],
    },
  ],
};

export default experience;
