import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import Foot from '../src/components/Foot';
import Heading from '../src/components/Heading';
import Contact from '../src/components/Contact';
import FaqComponent from '../src/components/Faq';
import indexContents from '../src/libs/contents';
import { client } from '../src/libs/client';
import { faqType } from '../src/types/microCms';

type Props = {
  faqData: faqType[];
};

const Faq: NextPage<Props> = ({ faqData }) => {
  return (
    <Box as="section">
      <OriginalSpacer size="200px" />
      <Navigation />
      <Heading data={indexContents[4]} />
      <OriginalSpacer size="120px" />
      <FaqComponent data={faqData} />
      <OriginalSpacer size="184px" />
      <Contact />
      <Foot />
    </Box>
  );
};

export default Faq;

export const getStaticProps = async () => {
  const microCMSData = await client.get({
    endpoint: 'faq',
    queries: {
      offset: 0,
      limit: 100,
    },
  });
  const data = microCMSData.contents.reverse();

  return {
    props: {
      faqData: data,
    },
  };
};
