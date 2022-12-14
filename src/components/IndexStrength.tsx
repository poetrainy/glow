import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import contents from '../libs/contents';
import { strength } from '../libs/strength';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';

const IndexStrength: FC = () => {
  return (
    <Box
      as="section"
      textStyle="sectionWidth"
      sx={{
        '&::before': {
          inset: 'auto -160px -200px auto',
          textStyle: 'orangeCircle',
        },
        '&::after': {
          inset: 'auto -64px -400px auto',
          textStyle: 'rainbowCircle',
        },
      }}
    >
      <Heading data={contents[1]} />
      <OriginalSpacer size="104px" />
      <Flex
        as="ul"
        justifyContent="space-between"
        w="80vw"
        maxW="1080px"
        mx="auto"
        sx={{
          flexDirection: {
            base: 'column',
            md: 'row',
          },
          gap: {
            base: '48px',
            md: '0',
          },
        }}
      >
        {strength.map((item, i) => (
          <Flex
            as="li"
            flexDirection="column"
            w="30%"
            key={i}
            sx={{
              width: {
                base: '100%',
                md: '30%',
              },
            }}
          >
            <Box w="100%" h="200px" bg="gray">
              <Box
                as="img"
                src={item.img}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            <OriginalSpacer size="28px" />
            <Flex
              as="p"
              alignItems="center"
              h="calc(3.2rem * 2)"
              fontSize="2.2rem"
              lineHeight="3.2rem"
            >
              {item.title}
            </Flex>
            <OriginalSpacer size="8px" />
            <Text lineHeight="3.2rem" fontSize="1.4rem">
              {item.text}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default IndexStrength;
