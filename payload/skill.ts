import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'React.js',
      level: 3,
    },
    {
      title: 'Next.js',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 3,
    },
    {
      title: 'MsSQL',
      level: 2,
    },
    {
      title: 'Node.js',
      level: 1,
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'Nginx',
      level: 3,
    },
    {
      title: 'Linux',
      level: 3,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 2,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Vim',
      level: 3,
    },
    {
      title: 'Git',
      level: 3,
    },
    {
      title: 'Jenkins',
      level: 2,
    },
    {
      title: 'VS Code',
      level: 2,
    },
    {
      title: 'GitHub',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'ReactQuery',
      level: 3,
    },
    {
      title: 'Recoil',
      level: 3,
    },
    {
      title: 'Tailwind Css',
      level: 2,
    },
    {
      title: 'NextAuth',
      level: 2,
    },
    {
      title: 'React Table',
      level: 1,
    },
    {
      title: 'React Konva',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, kernelDevelopment, virtualization, automation],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
