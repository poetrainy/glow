import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import Allow from './Allow';

const FirstView: FC = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Flex w="100%" h={`calc(${windowHeight}px - 80px * 2)`} bg="black">
        <Box
          as="img"
          src="https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/3ee965d5d96d4ef69794c484e0c285db/fv.png?w=2000"
          alt="GLOW結婚相談所"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="80px"
        color="gray"
        pos="relative"
      >
        <Allow gray />
        <Text>scroll</Text>
      </Flex>
    </>
  );
};

export default FirstView;
