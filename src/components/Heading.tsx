import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { indexContentsType } from '../types/indexContents';

type Props = {
  data: indexContentsType;
};

const Heading: FC<Props> = ({ data }) => {
  return (
    <Flex
      id={data.id}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="fit-content"
      mx="auto"
      pos="relative"
      sx={{
        '&::before': {
          content: `'${data.en}'`,
          display: 'block',
          fontSize: '1.4rem',
        },
      }}
    >
      <Text fontSize="3rem">{data.title}</Text>
      <Box
        as={data.svg}
        sx={{
          g: {
            fill: 'orange',
            opacity: '0.2',
          },
        }}
        pos="absolute"
        inset="auto auto auto auto"
        zIndex="-1"
      />
    </Flex>
  );
};

export default Heading;
