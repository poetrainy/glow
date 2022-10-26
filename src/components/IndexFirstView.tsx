import { Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import Allow from './Allow';
import { useWindowSize } from 'react-use';
import OriginalSpacer from './OriginalSpacer';

const IndexFirstView: FC = () => {
  const { width, height } = useWindowSize();
  const [windowHeight, setWindowHeight] = useState<number>(0);
  useEffect(() => {
    setWindowHeight(height);
  }, []);

  return (
    <>
      <Flex
        flexDirection="column"
        w="100%"
        h={`calc(${windowHeight}px - 80px * 2)`}
        color="white"
        bg="url(https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/3ee965d5d96d4ef69794c484e0c285db/fv.png?w=2000)"
        bgRepeat="no-repeat"
        bgSize="cover"
        p="80px 56px"
      >
        <Text as="h2" fontSize="5rem" textShadow="0 0 20px rgba(0, 0, 0, 0.4)">
          テキストが入ります。
        </Text>
        <OriginalSpacer size="8px" />
        <Text fontSize="2.5rem">
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
