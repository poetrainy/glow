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
import { client } from '../src/libs/client';
import { faqType } from '../src/types/microCms';
import HeadOgp from '../src/components/HeadOgp';

type Props = {
  indexFaqData: faqType[];
};

const Home: NextPage<Props> = ({ indexFaqData }) => {

  return (
    <>
      <HeadOgp />
      <OriginalSpacer size="80px" />
      <Navigation index />
      <FirstView />
      <OriginalSpacer size="184px" />
      <IndexService />
      <OriginalSpacer size="184px" />
      <IndexStrength />
      <OriginalSpacer size="184px" />
      <IndexFlow />
      <OriginalSpacer size="184px" />
      <IndexPlans />
      <OriginalSpacer size="184px" />
      <Contact />
      <OriginalSpacer size="184px" />
      <IndexFaq data={indexFaqData} />
      <OriginalSpacer size="184px" />
      <IndexAccess />
      <OriginalSpacer size="184px" />
      <Contact />
      <Foot />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const microCMSData = await client.get({
    endpoint: 'faq',
    queries: {
      offset: 0,
      limit: 100,
    },
  });
  const data = microCMSData.contents.reverse();
  const indexFaq = [];

  for (let i = 0; i < 3; i++) {
    indexFaq.push(data[i]);
  }

  return {
    props: {
      indexFaqData: indexFaq,
    },
  };
};
