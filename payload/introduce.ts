import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'React와 Next.js를 기반으로 한 웹 프론트엔드 개발을 하고 있습니다. 사용자 경험을 최우선으로 하는 UI/UX 구현과 효율적인 상태 관리, 모듈화된 재사용 가능한 컴포넌트 설계에 중점을 두고 일하고 있습니다. Recoil, React Query, TailwindCSS, TanStack Table 등 다양한 도구를 상황에 맞게 적절히 활용하여 실용적인 서비스를 개발해왔습니다. Nginx 서버 구성과 서버 프록시 설정, 이미지 렌더링 최적화 등 프론트엔드의 경계를 넘어선 기술들도 적극적으로 학습하며, 전체 시스템의 맥락을 깊이 있게 이해하는 것을 중요하게 생각합니다.',
    '단순한 기능 구현을 넘어, 개발의 "근본적인 목적"과 "대상 사용자"에 대해 깊이 있게 고민하며 개발합니다. 개발의 효율성과 완성도를 추구하면서도, 이것이 팀원들과의 협업과 소통을 저해하지 않도록 항상 균형을 유지합니다. 개발자의 본질은 문제 해결자라고 믿으며, 더 나은 해결책을 끊임없이 탐구하고 실제 적용하는 과정을 즐깁니다.',
    '기술적 전문성뿐만 아니라, 강한 책임감과 문제를 철저히 해결하려는 끈기를 핵심 가치로 삼고 있습니다. 궁극적으로는 함께 일하고 싶은 동료이자, 의미 있는 서비스를 공동으로 창출할 수 있는 개발자가 되고자 합니다.',
  ],
  sign: 'Hwang',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
