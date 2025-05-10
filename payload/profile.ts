import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/taewoong.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '황태웅',
    small: '(Taewoong-H)',
  },
  contact: [
    {
      title: 'taeung2008@gmail.com',
      link: 'mailto:taeung2008@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/Taewoong-H/resume',
      icon: faGithub,
    },
  ],
  notice: {
    title: '문의는 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
