import type { NextPage } from 'next';
import { Box, Flex, Text } from '@chakra-ui/react';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import Foot from '../src/components/Foot';
import Contact from '../src/components/Contact';
import { faqType } from '../src/types/microCms';

const NotFound: NextPage = () => {
  return (
    <Box as="section">
      <Navigation />
      <OriginalSpacer size="200px" />
      <Flex flexDirection="column" gap="48px" w="80vw" maxW="1000px" mx="auto">
        <Text as="h2" fontSize="2.4rem">ページが存在しません。</Text>
        <Text>
          ページはすでに削除されているか、ご指定のURLに誤りがあります。
        </Text>
      </Flex>
      <OriginalSpacer size="120px" />
      <Contact />
      <Foot />
    </Box>
  );
};

export default NotFound;
