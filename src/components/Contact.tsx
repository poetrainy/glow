import { Flex, Text } from '@chakra-ui/react';
import { FC, useRef } from 'react';

const Navigation: FC = () => {
  const refContactLink = useRef<HTMLDivElement | null>(null);
  const clickTelBtn = () => {
    if (window !== undefined) {
      window.location.href = 'tel:08072672149';
    }
  };

  return (
    <Flex
      as="a"
      href="https://glow-marriage.com/contact/"
      target="page"
      // @ts-ignore
      ref={refContactLink}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      minH="264px"
      mx="auto"
      color="white"
      background="linear-gradient(90deg, rgba(129, 214, 238, 0.9) 0%, rgba(188, 197, 227, 0.9) 55%, rgba(252, 182, 190, 0.9) 100%), url('https://images.microcms-assets.io/assets/91ccec7b6d554ddcaee759c5cdf7b840/68cd38c8e3b94fb0940bccdd3a0922e6/contact.jpeg?w=2000')"
      backgroundRepeat="no-repeat, no-repeat"
      backgroundSize="cover, cover"
      backgroundPosition="center center, center center"
      _hover={{
        '>span:nth-of-type(2)': {
          '>span': {
            '&:nth-of-type(1)': {
              opacity: '0.7',
            },
            '&:nth-of-type(2)': {
              background: 'white',
              inset: {
                base: 'auto',
                md: 'auto -128px auto auto',
              },
              '>span': {
                background: '#FCB6BE',
                '&::before': {
                  background: '#FCB6BE',
                },
                '&::after': {
                  background: '#FCB6BE',
                },
              },
            },
          },
        },
      }}
      sx={{
        flexDirection: {
          base: 'column',
          md: 'row',
        },
        flexWrap: {
          base: 'wrap',
          md: 'nowrap',
        },
        padding: {
          base: '32px 0',
          md: '24px 80px',
        },
      }}
    >
      <Flex
        as="span"
        justifyContent="space-between"
        gap="40px"
        flexDirection="column"
      >
        <Text
          as="span"
          fontSize="3.2rem"
          sx={{
            textAlign: {
              base: 'center',
              md: 'left',
            },
            width: {
              base: 'calc(3.2rem * 10)',
              lg: 'auto',
            },
          }}
        >
          お気軽にお問い合わせくださいませ。
        </Text>
        <Flex
          as="span"
          flexDirection="column"
          sx={{
            alignItems: {
              base: 'center',
              md: 'flex-start',
            },
          }}
        >
          <Text as="span" fontSize="2rem" mb="12px">
            お電話でも受付しております。
          </Text>
          <Flex
            as="button"
            onClick={() => clickTelBtn()}
            w="fit-content"
            bg="white"
            p="4px 32px"
            fontSize="3.2rem"
            pos="relative"
            opacity="1"
            transition="opacity 0.2s"
            borderRadius="9999px"
            zIndex="5"
            sx={{
              pointerEvents: {
                base: 'auto',
                sm: 'none',
              },
              '&:hover': {
                opacity: '0.8',
              },
            }}
          >
            <Text textStyle="textGradation">080-7267-2149</Text>
          </Flex>
          <Text as="span" fontSize="1.2rem" mt="4px">
            ※受付時間 11:00～23:30（木曜定休日）
          </Text>
        </Flex>
      </Flex>
      <Flex
        as="span"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="fit-content"
        pos="relative"
        sx={{
          transform: {
            base: '0',
            md: 'translateX(-96px)',
          },
          margin: {
            base: '64px 0 0',
            md: '0',
          },
        }}
      >
        <Text as="span" fontSize="3.2rem" opacity="1" transition="opacity 0.2s">
          無料カウンセリング予約
        </Text>
        <Flex
          as="span"
          justifyContent="center"
          alignItems="center"
          w="80px"
          h="80px"
          bg="transparent"
          border="#ffffff 1px solid"
          borderRadius="9999px"
          transition="background 0.2s, inset 0.2s"
          sx={{
            margin: {
              base: '16px 0 0',
              md: '0',
            },
            position: {
              base: 'relative',
              md: 'absolute',
            },
            inset: {
              base: 'auto',
              md: 'auto -114px auto auto',
            },
          }}
        >
          <Flex
            as="span"
            w="16px"
            h="1px"
            bg="white"
            transition="background 0.2s"
            pos="relative"
            zIndex="2"
            sx={{
              '&::before': {
                content: "''",
                display: 'block',
                background: 'white',
                width: '10px',
                height: '1px',
                transform: 'rotateZ(45deg)',
                transition: 'background 0.2s',
                position: 'absolute',
                inset: '-3.3px -2px auto auto',
              },
              '&::after': {
                content: "''",
                display: 'block',
                background: 'white',
                width: '10px',
                height: '1px',
                transform: 'rotateZ(-45deg)',
                transition: 'background 0.2s',
                position: 'absolute',
                inset: '3.3px -2px auto auto',
              },
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
