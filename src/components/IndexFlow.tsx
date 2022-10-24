import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import contents from '../libs/contents';
import { flow } from '../libs/flow';
import Allow from './Allow';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';

const IndexFlow: FC = () => {
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
        // gap="64px 0"
        flexWrap="wrap"
        w="85vw"
        maxW="1200px"
        mx="auto"
        pos="relative"
      >
        {flow.map((item, i) => (
          <Flex w="fit-content" key={i}>
            <Flex as="li" flexDirection="column" w="21%">
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
                zIndex="2"
                textStyle="textGradation"
                sx={{
                  '&::before': {
                    content: "''",
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    inset: '0 0 auto auto',
                  },
                }}
              >
                0{i + 1}
              </Flex>
              <Flex w="100%" h="200px">
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
            </Flex>
            {i === 3 || i === 6 ? '' : <Allow />}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default IndexFlow;
