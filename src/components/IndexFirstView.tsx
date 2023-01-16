import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Allow from './Allow';
import OriginalSpacer from './OriginalSpacer';

const IndexFirstView: FC = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        w="100%"
        color="white"
        bg={{
          base: 'url(https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/3ee965d5d96d4ef69794c484e0c285db/fv.png?h=1000)',
          sm: 'url(https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/3ee965d5d96d4ef69794c484e0c285db/fv.png?w=2000)',
        }}
        bgRepeat="no-repeat"
        bgSize={{
          base: 'cover',
          sm: 'cover',
        }}
        p="80px 5%"
        height={{
          base: 'calc(100vh - 80px * 2 - 80px)',
          sm: 'calc(100vh - 80px * 2)',
        }}
      >
        <Text
          as="h2"
          textShadow="0 0 20px rgba(0, 0, 0, 0.4)"
          fontSize={{
            base: '3.5rem',
            sm: '5rem',
          }}
        >
          トランスジェンダー婚活を
          <br />
          成功させるならGLOW
        </Text>
        <OriginalSpacer size="8px" />
        <Text
          fontSize={{
            base: '2rem',
            sm: '2.5rem',
          }}
        >
          トランスジェンダー専門
          <br />
          結婚相談サービス
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="80px"
      >
        <Allow gray />
        <Text color="gray">scroll</Text>
      </Flex>
    </>
  );
};

export default IndexFirstView;
