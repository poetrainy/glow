import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import contents from '../libs/contents';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';

const IndexService: FC = () => {
  return (
    <Box
      as="section"
      textStyle="sectionWidth"
      sx={{
        '&::before': {
          inset: 'auto auto -200px -184px',
          textStyle: 'orangeCircle',
        },
        '&::after': {
          inset: 'auto auto -600px -104px',
          textStyle: 'rainbowCircle',
        },
      }}
    >
      <Heading data={contents[0]} />
      <OriginalSpacer size="104px" />
      <Flex justifyContent="center" gap="5%" mx="auto">
        <Box
          as="img"
          w="65%"
          maxW="720px"
          h="320px"
          bg="gray"
          boxShadow="120px 64px 0 rgba(0, 0, 0, 0.015)"
          alt="結婚"
        />
        <Box w="30%" mt="80px">
          <Text fontSize="3rem">
            トランスジェンダー専門
            <br />
            結婚相談サービス
          </Text>
          <OriginalSpacer size="40px" />
          <Text
            // fontSize="1.6rem"
            lineHeight="4.2rem"
          >
            サービスの説明文が入ります。この文章はタイトルです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーサービスの説明文が入ります。この文章はタイトルです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章は
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default IndexService;
