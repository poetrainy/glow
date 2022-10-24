import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import indexContents from '../libs/contents';
// @ts-ignore
import { Link as Scroll } from 'react-scroll';
import NextLink from 'next/link';

type Props = {
  index?: boolean;
};

const Navigation: FC<Props> = ({ index }) => {
  return (
    <Flex
      w="100%"
      h="80px"
      justifyContent="space-between"
      alignItems="center"
      px="24px"
      pos="fixed"
      inset="0 0 auto auto"
      zIndex="30"
    >
      <Box as="h1">
        <NextLink href="/" passHref>
          <Text
            as="a"
            opacity="1"
            transition="opacity 0.2s"
            _hover={{
              opacity: 0.6,
              cursor: 'pointer',
            }}
          >
            GLOW
          </Text>
        </NextLink>
      </Box>
      <Flex gap="40px">
        {index && (
          <Flex as="ul" alignItems="center" gap="28px">
            {indexContents.map((item, i) => (
              <Scroll to={item.id} smooth={true} offset={-130} key={i}>
                <Flex
                  key={i}
                  opacity="1"
                  transition="opacity 0.2s"
                  textShadow="0 0 8px #fff"
                  _hover={{
                    opacity: 0.4,
                    cursor: 'pointer',
                  }}
                >
                  {item.title}
                </Flex>
              </Scroll>
            ))}
          </Flex>
        )}
        <Flex
          as="a"
          href="https://glow-marriage.com/contact/"
          target="page"
          justifyContent="center"
          alignItems="center"
          w="240px"
          h="48px"
          color="white"
          textStyle="mainGradation"
          opacity="1"
          transition="opacity 0.2s"
          _hover={{
            opacity: 0.6,
          }}
        >
          無料カウンセリング予約
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
