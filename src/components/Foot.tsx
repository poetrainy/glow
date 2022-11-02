import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import React from 'react';
import Infomation from '../components/Infomation';

const Foot: FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="24px"
      w="100%"
      h="344px"
    >
      <Text>Logo</Text>
      <Infomation />
      <Text as="small" fontSize="1.2rem">
        Copyright &copy; 2022 結婚相談所 GLOW All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default Foot;
