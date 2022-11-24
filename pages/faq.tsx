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
import HeadOgp from '../src/components/HeadOgp';
import { path } from '../src/libs/path';
import { useGetFaq } from '../src/libs/getFaq';

const Faq: NextPage = () => {
  const { getAllFaq } = useGetFaq();
  const faq = getAllFaq();
  return (
    <>
      <HeadOgp data={path[0]} />
      <Box as="section">
        <OriginalSpacer size="200px" />
        <Navigation />
        <Heading data={indexContents[4]} />
        <OriginalSpacer size="120px" />
        <FaqComponent data={faq} />
        <OriginalSpacer size="184px" />
        <Contact />
        <Foot />
      </Box>
    </>
  );
};

export default Faq;
