import type { NextPage } from 'next';
import Navigation from '../src/components/Navigation';
import FirstView from '../src/components/IndexFirstView';
import OriginalSpacer from '../src/components/OriginalSpacer';
import IndexService from '../src/components/IndexService';
import IndexStrength from '../src/components/IndexStrength';
import IndexFlow from '../src/components/IndexFlow';
import IndexPlans from '../src/components/IndexPlans';
import Contact from '../src/components/Contact';
import IndexFaq from '../src/components/IndexFaq';
import IndexAccess from '../src/components/IndexAccess';
import Foot from '../src/components/Foot';
import HeadOgp from '../src/components/HeadOgp';
import FadeIn from '../src/components/FadeIn';
import React from 'react';
import { useGetFaq } from '../src/libs/getFaq';

const Home: NextPage = () => {
  const { getIndexFaq } = useGetFaq();
  const faq = getIndexFaq();


  const components = [
    {
      component: <IndexService />,
      size: 184,
    },
    {
      component: <IndexStrength />,
      size: 240,
    },
    {
      component: <IndexFlow />,
      size: 184,
    },
    {
      component: <IndexPlans />,
      size: 184,
    },
    {
      component: <Contact />,
      size: 184,
    },
    {
      component: <IndexFaq data={faq} />,
      size: 184,
    },
    {
      component: <IndexAccess />,
      size: 184,
    },
    {
      component: <Contact />,
      size: 184,
    },
  ];
  return (
    <>
      <HeadOgp />
      <OriginalSpacer size="80px" />
      <Navigation index />
      <FirstView />
      {components.map((item, i) => (
        <FadeIn children={item.component} size={item.size} key={i} />
      ))}
      <Foot />
    </>
  );
};

export default Home;
