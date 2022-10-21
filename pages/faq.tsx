import type { NextPage } from 'next';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import Foot from '../src/components/Foot';
import Heading from '../src/components/Heading';
import Contact from '../src/components/Contact';
import FaqComponent from '../src/components/Faq';
import indexContents from '../src/libs/contents';
import { Box } from '@chakra-ui/react';

const Faq: NextPage = () => {
  return (
    <Box as="section">
      <OriginalSpacer size="200px" />
      <Navigation />
      <Heading data={indexContents[4]} />
      <OriginalSpacer size="120px" />
      <FaqComponent />
      <OriginalSpacer size="184px" />
      <Contact />
      <Foot />
    </Box>
  );
};

export default Faq;
