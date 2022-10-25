import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Navigation: FC = () => {
  return (
    <Flex
      // as="a"
      // href="https://glow-marriage.com/contact/"
      // target="page"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      minH="264px"
      mx="auto"
      color="white"
      opacity="0.9"
      textStyle="mainGradation"
      _hover={{
        '>div:nth-of-type(2)': {
          '>p': {
            opacity: '0.7',
          },
          '>div': {
            background: 'white',
            inset: {
              base: 'auto',
              md: 'auto -128px auto auto',
            },
            '>div': {
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
      <Flex justifyContent="space-between" gap="40px" flexDirection="column">
        <Text
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
          flexDirection="column"
          sx={{
            alignItems: {
              base: 'center',
              md: 'flex-start',
            },
          }}
        >
          <Text fontSize="2rem" mb="12px">
            お電話でも受付しております。
          </Text>
          <Flex
            as="a"
            href="tel:08072672149"
            w="fit-content"
            p="4px 32px"
            fontSize="3.2rem"
            pos="relative"
            textStyle="textGradation"
            sx={{
              '&::before': {
                content: "''",
                width: '100%',
                height: '100%',
                background: 'white',
                borderRadius: '9999px',
                position: 'absolute',
                inset: '0 0 auto auto',
                zIndex: '-1',
              },
            }}
          >
            080-7267-2149
          </Flex>
          <Text fontSize="1.2rem" mt="4px">
            ※受付時間 11:00～23:30（木曜定休日）
          </Text>
        </Flex>
      </Flex>
      <Flex
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
        <Text fontSize="3.2rem" opacity="1" transition="opacity 0.2s">
          無料カウンセリング予約
        </Text>
        <Flex
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
              md: '0e',
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
