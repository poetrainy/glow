import { Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import Allow from './Allow';

const FirstView: FC = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <Flex w="100%" h={`calc(${windowHeight}px - 80px * 2)`} bg="black"></Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="80px"
        color="gray"
        pt="24px"
        pos="relative"
      >
        <Allow gray />
        <Text>scroll</Text>
      </Flex>
    </>
  );
};

export default FirstView;
