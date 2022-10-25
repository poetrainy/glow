import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Allow from './Allow';
import { useWindowSize } from 'react-use';

const IndexFirstView: FC = () => {
  const { width, height } = useWindowSize();

  console.log(height);

  return (
    <>
      <Flex
        w="100%"
        h={`calc(${height}px - 80px * 2)`}
        bg="url(https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/3ee965d5d96d4ef69794c484e0c285db/fv.png?w=2000)"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Text>テキストが入ります。</Text>
        <Text>
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
