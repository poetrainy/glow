import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
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
            background: {
              base: "url('https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/0b618942efa24b0ea4abc8087574a2e6/icon_service_2.png?w=400')",
            },
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            pointerEvents: 'none',
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
              md: '96px 64px 0 rgba(0, 0, 0, 0.015)',
            },
          }}
        >
          <Box
            as="img"
            src="https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/2a82c36ea580471189d7af9dfb5de439/service.png?w=1000"
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
              base: '40px 0 0',
              md: '80px 0 0',
            },
            padding: {
              base: '0 5%',
              md: '0',
            },
          }}
        >
          <Text
            fontSize="3rem"
            sx={{
              margin: {
                base: '0 0 24px',
                md: '0 0 40px',
              },
            }}
          >
            トランスジェンダー専門
            <br />
            結婚相談サービス
          </Text>
          <Text lineHeight="4.2rem">
            愛する者同士が夫婦になる事で、心が軽くなり互いに生きやすくなる。そんな人を増やすために。{' '}
            <br />
            結婚相談所GLOWでは、IBJ(日本結婚相談所連盟)のシステムを使った婚活ができるよう、直談判いたしました。{' '}
            <br />
            IBJ加盟店で日本唯一のトランスジェンダー当事者の目線から、皆様をサポートします。
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default IndexService;
