import { Box, Flex, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import indexContents from '../libs/contents';
import NextLink from 'next/link';
import { useMount } from 'react-use';
import arrow from '../assets/icon_arrow';
import { useRouter } from 'next/router';
// @ts-ignore
import { Link as Scroll } from 'react-scroll';
import { useMediaQuery } from '@chakra-ui/react';
import Infomation from '../components/Infomation';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  index?: boolean;
};

const Navigation: FC<Props> = ({ index }) => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)');
  const [isSmailerThan1000] = useMediaQuery('(max-width: 999px)');
  const [navDomFlag, setNavDomFlag] = useState<boolean>(false);
  const [navDisplayFlag, setNavDisplayFlag] = useState<boolean>(false);

  const navButtonClick = () => {
    if (!navDomFlag) {
      setNavDomFlag(true);
    }
    setNavDisplayFlag(!navDisplayFlag);
  };

  const router = useRouter();

  useMount(() => {
    if (window && router.query.hash) {
      window.location.hash = String(router.query.hash);
    }
  });

  return (
    <Flex
      w="100%"
      h="80px"
      justifyContent="space-between"
      alignItems="center"
      background="transparent"
      transition="background 0.3s"
      px="24px"
      pos="fixed"
      inset="0 0 auto auto"
      zIndex="30"
      sx={{
        ...(isSmailerThan1000 &&
          navDisplayFlag && {
            background: 'white',
          }),
      }}
    >
      <Box as="h1">
        <NextLink href="/" passHref>
          <Text
            as="a"
            opacity="1"
            transition="opacity 0.2s"
            _hover={{
              opacity: 0.5,
              cursor: 'pointer',
            }}
          >
            GLOW
          </Text>
        </NextLink>
      </Box>
      <Flex
        h="100%"
        alignItems="center"
        sx={{
          gap: {
            base: '16px',
            xl: '40px',
          },
        }}
      >
        {isLargerThan1000 || navDomFlag ? (
          <Flex
            flexDirection="column"
            sx={{
              justifyContent: {
                lg: 'center',
              },
              ...(isSmailerThan1000 && {
                width: '100%',
                minHeight: 'calc(100vh - 80px)',
                background: 'white',
                padding: '0 0 80px',
                position: 'fixed',
                inset: '80px 0 auto auto',
                overflow: 'scroll',
                transform: 'translateX(100%)',
                transition: 'transform 0.3s, opacity 0.3s',
              }),
              ...(isSmailerThan1000 &&
                navDisplayFlag && {
                  transform: 'translateX(0)',
                }),
            }}
          >
            <Flex
              as="ul"
              alignItems="center"
              sx={{
                gap: {
                  base: '0',
                  lg: '8px',
                },
                ...(isSmailerThan1000 && {
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  width: '100%',
                  fontSize: '2rem',
                  padding: '0 7%',
                }),
              }}
            >
              {indexContents.map((item, i) => (
                <Flex
                  as="li"
                  key={i}
                  textStyle="navigation"
                  p={{ lg: '0 12px' }}
                >
                  {index ? (
                    <Scroll
                      to={item.id}
                      smooth={false}
                      offset={-130}
                      onClick={() => navButtonClick()}
                    >
                      {item.title}
                      {isSmailerThan1000 && <Box as={arrow} />}
                    </Scroll>
                  ) : (
                    <NextLink
                      href={{
                        pathname: item.url ? item.id : '/',
                        ...(!item.url && {
                          query: {
                            hash: item.id,
                          },
                        }),
                      }}
                      passHref
                    >
                      <Flex as="a">
                        <Text>{item.title}</Text>
                        {isSmailerThan1000 && <Box as={arrow} />}
                      </Flex>
                    </NextLink>
                  )}
                </Flex>
              ))}
            </Flex>
            {isSmailerThan1000 && (
              <>
                <OriginalSpacer size="40px" />
                <Infomation />
              </>
            )}
          </Flex>
        ) : (
          ''
        )}
        {isSmailerThan1000 && (
          <Box
            onClick={() => navButtonClick()}
            order="2"
            opacity="1"
            transition="opacity 0.2s"
            _hover={{
              opacity: '0.5',
              cursor: 'pointer',
            }}
          >
            <Box
              display="inline-block"
              transition="all 0.4s"
              position="relative"
              width="100%"
              height="22px"
              background="none"
              border="none"
              appearance="none"
              cursor="pointer"
              sx={{
                span: {
                  display: 'inline-block',
                  transition: 'all 0.4s',
                  position: 'absolute',
                  left: '0',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'black',
                  borderRadius: '4px',
                  ...(navDisplayFlag && {
                    '&:nth-of-type(1)': {
                      transform: 'translateY(12px) rotate(-315deg)',
                    },
                    '&:nth-of-type(2)': {
                      opacity: '0',
                    },
                    '&:nth-of-type(3)': {
                      transform: 'translateY(-8.5px) rotate(315deg)',
                    },
                  }),
                },
              }}
            >
              <Box as="span" top="0" />
              <Box as="span" top="10px" />
              <Box as="span" bottom="0" />
            </Box>
            <Text
              as="span"
              display="block"
              fontFamily="number"
              fontSize="1.3rem"
              lineHeight="1.3rem"
            >
              MENU
            </Text>
          </Box>
        )}
        <Flex
          as="a"
          href="https://glow-marriage.com/contact/"
          target="page"
          justifyContent="center"
          alignItems="center"
          h="48px"
          color="white"
          background="gradation"
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
              xl: '2',
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