import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '경희대학교',
      subTitle: '유전공학과 전공 학사 졸업',
      startedAt: '2015-03',
      endedAt: '2021-02',
    },
    {
      title: '우아한테크코스 2기',
      subTitle: '프리코스 2주',
      startedAt: '2020-12',
      endedAt: '2020-12',
    },
  ],
};

export default education;
