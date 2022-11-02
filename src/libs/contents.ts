import { indexContentsType } from '../types/indexContents';

import service from '../assets/index_service';
import strength from '../assets/index_strength';
import flow from '../assets/index_flow';
import plans from '../assets/index_plans';
import faq from '../assets/index_faq';
import access from '../assets/index_access';

const indexContents: indexContentsType[] = [
  {
    title: 'サービスについて',
    en: 'Service',
    id: 'service',
    svg: service,
    url: false,
  },
  {
    title: 'GLOWの強み',
    en: 'Strength',
    id: 'strength',
    svg: strength,
    url: false,
  },
  {
    title: 'ご成婚までの流れ',
    en: 'Flow of Marriage',
    id: 'flow',
    svg: flow,
    url: false,
  },
  {
    title: '料金プラン',
    en: 'Rate Plans',
    id: 'plans',
    svg: plans,
    url: true,
  },
  {
    title: 'よくある質問',
    en: 'FAQ',
    id: 'faq',
    svg: faq,
    url: true,
  },
  {
    title: 'アクセス',
    en: 'Access',
    id: 'access',
    svg: access,
    url: false,
  },
];

export default indexContents;
