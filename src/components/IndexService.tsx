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
      <Flex
        justifyContent="center"
        gap="5%"
        maxW="1200px"
        mx="auto"
        pos="relative"
        sx={{
          flexDirection: {
            base: 'column',
            md: 'row',
          },
          width: {
            md: '90%',
          },
          '&::before': {
            content: "''",
            display: {
              base: 'none',
              md: 'block',
            },
            width: {
              base: '400px',
              xl: '600px',
            },
            height: '320px',
            background:
              "url('https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/0b618942efa24b0ea4abc8087574a2e6/icon_service_2.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            inset: {
              base: 'auto -2% -200px auto',
              xl: 'auto -5% -200px auto',
            },
          },
        }}
      >
        <Box
          h="320px"
          bg="gray"
          sx={{
            width: {
              md: '60%',
            },
            maxWidth: {
              md: '720px',
            },
            boxShadow: {
              md: '120px 64px 0 rgba(0, 0, 0, 0.015)',
            },
          }}
        >
          <Box
            as="img"
            src="https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/2a82c36ea580471189d7af9dfb5de439/service.png?w=2000"
            alt="結婚"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box
          w="35%"
          sx={{
            width: {
              md: '35%',
            },
            margin: {
              base: '0',
              sm: '40px 0 0',
              md: '80px 0 0',
            },
            padding: {
              base: '0 5%',
              md: '0',
            },
          }}
        >
          <Text fontSize="3rem">
            トランスジェンダー専門
            <br />
            結婚相談サービス
          </Text>
          <OriginalSpacer size="40px" />
          <Text lineHeight="4.2rem">
            サービスの説明文が入ります。この文章はタイトルです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーサービスの説明文が入ります。この文章はタイトルです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章は
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default IndexService;
