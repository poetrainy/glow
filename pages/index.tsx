import type { NextPage } from 'next';
import Navigation from '../src/components/Navigation';
import FirstView from '../src/components/FirstView';
import OriginalSpacer from '../src/components/OriginalSpacer';
import IndexService from '../src/components/IndexService';
import IndexStrength from '../src/components/IndexStrength';
import IndexFlow from '../src/components/IndexFlow';
import IndexPlans from '../src/components/IndexPlans';
import Contact from '../src/components/Contact';
import IndexFaq from '../src/components/IndexFaq';
import IndexAccess from '../src/components/IndexAccess';
import Foot from '../src/components/Foot';

const Home: NextPage = () => {
  return (
    <>
      <OriginalSpacer size="80px" />
      <Navigation />
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
      <IndexFaq />
      <OriginalSpacer size="184px" />
      <IndexAccess />
      <OriginalSpacer size="184px" />
      <Contact />
      <Foot />
    </>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const microCMSData = await client.get({
//     endpoint: 'endpoint名',
//     // queries: {
//     //   offset: 0,
//     //   limit: 100,
//     // },
//   });

//   return {
//     props: {
//       data: microCMSData.contents,
//     },
//   };
// };
