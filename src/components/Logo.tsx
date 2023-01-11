import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <Flex w="200px" h="32px">
      <Box
        as="img"
        src="https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/d65cade51bf2471fbeb5610a699c1dd8/logo.png"
        w="100%"
        h="100%"
        objectFit="contain"
      />
    </Flex>
  );
};

export default Logo;
