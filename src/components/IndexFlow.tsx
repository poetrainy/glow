import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import contents from '../libs/contents';
import { flow } from '../libs/flow';
import Allow from './Allow';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';
import { useWindowSize } from 'react-use';

const IndexFlow: FC = () => {
  const { width, height } = useWindowSize();

  return (
    <Box
      as="section"
      textStyle="sectionWidth"
      sx={{
        '&::before': {
          inset: 'auto auto -200px -40px',
          textStyle: 'orangeCircle',
        },
        '&::after': {
          inset: 'auto auto -560px -104px',
          textStyle: 'rainbowCircle',
        },
      }}
    >
      <Heading data={contents[2]} />
      <OriginalSpacer size="104px" />
      <Flex
        as="ul"
        justifyContent="center"
        flexWrap="wrap"
        gap="80px 0"
        w="85vw"
        maxW="1200px"
        p="0 0 0 28px"
        mx="auto"
        pos="relative"
      >
        {flow.map((item, i) => (
          <Flex
            as="li"
            key={i}
            sx={{
              width: {
                base: '100%',
                md: '50%',
                xl: '25%',
              },
            }}
          >
            <Box w="calc(100% - 56px)">
              <Flex
                justifyContent="center"
                alignItems="center"
                w="48px"
                h="48px"
                borderRadius="4px"
                m="-24px 0 0 -24px"
                fontSize="2rem"
                pos="absolute"
                inset="auto"
                textStyle="borderGradation"
                sx={{
                  '&::before': {
                    content: "''",
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    position: 'absolute',
                    inset: '0 0 auto auto',
                    // zIndex: '3',
                  },
                }}
              >
                <Text zIndex="5" textStyle="textGradation">
                  0{i + 1}
                </Text>
              </Flex>
              <Flex
                w="100%"
                sx={{ height: { base: '200px', sm: '320px', md: '200px' } }}
              >
                <Box
                  as="img"
                  src={item.img}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Flex>
              <OriginalSpacer size="28px" />
              <Flex
                as="p"
                justifyContent="center"
                alignItems="center"
                fontSize="2.2rem"
              >
                {item.title}
              </Flex>
              <OriginalSpacer size="8px" />
              <Text lineHeight="3rem" fontSize="1.4rem">
                {item.text}
              </Text>
            </Box>
            {i === 6 ? '' : <Allow />}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default IndexFlow;
