import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import indexContents from '../libs/contents';
// @ts-ignore
import { Link as Scroll } from 'react-scroll';
import NextLink from 'next/link';
import { useWindowSize } from 'react-use';

type Props = {
  index?: boolean;
};

const Navigation: FC<Props> = ({ index }) => {
  // const [windowWidth, setWindowWidth] = useState<number>(0);

  // useEffect(() => {
  //   const onResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', onResize);
  //   return () => window.removeEventListener('resize', onResize);
  // }, []);

  const { width, height } = useWindowSize();

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
      <Flex
        sx={{
          gap: {
            base: '16px',
            lg: '40px',
          },
        }}
      >
        {index && (
          // <Flex as="ul" alignItems="center" gap="16px">
          //   {indexContents.map((item, i) => (
          //     <Scroll to={item.id} smooth={true} offset={-130} key={i}>
          //       <Flex
          //         key={i}
          //         opacity="1"
          //         transition="opacity 0.2s"
          //         textShadow="0 0 8px #fff"
          //         _hover={{
          //           opacity: 0.4,
          //           cursor: 'pointer',
          //         }}
          //       >
          //         {item.title}
          //       </Flex>
          //     </Scroll>
          //   ))}
          // </Flex>
          <>
            {width < 1080 && (
              <Box as="button" order="2">
                <Box
                  as="span"
                  display="block"
                  w="100%"
                  h="1px"
                  bg="black"
                  pos="relative"
                  sx={{
                    '&::before': {
                      content: "''",
                      display: 'block',
                      width: '100%',
                      height: '1px',
                      background: 'black',
                      position: 'absolute',
                      inset: 'auto 0 8px 0',
                    },
                    '&::after': {
                      content: "''",
                      display: 'block',
                      width: '100%',
                      height: '1px',
                      background: 'black',
                      position: 'absolute',
                      inset: '8px 0 auto 0',
                    },
                  }}
                />
                <Text
                  fontFamily="number"
                  fontSize="1.4rem"
                  transform="translateY(12px)"
                >
                  MENU
                </Text>
              </Box>
            )}
          </>
        )}
        <Flex
          as="a"
          href="https://glow-marriage.com/contact/"
          target="page"
          justifyContent="center"
          alignItems="center"
          h="48px"
          color="white"
          textStyle="mainGradation"
          opacity="1"
          transition="opacity 0.2s"
          _hover={{
            opacity: 0.6,
          }}
          sx={{
            width: {
              base: '216px',
              sm: '240px',
            },
            fontSize: {
              base: '1.5rem',
              sm: '1.6rem',
            },
            order: {
              base: '1',
              lg: '2',
            },
          }}
        >
          無料カウンセリング予約
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
