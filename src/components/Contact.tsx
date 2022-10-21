import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

const Navigation: FC = () => {
  return (
    <Flex
      as="a"
      href="https://glow-marriage.com/contact/"
      target="page"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      h="264px"
      mx="auto"
      px="80px"
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
            inset: 'auto -72px auto auto',
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
    >
      <Flex justifyContent="space-between" gap="40px" flexDirection="column">
        <Text fontSize="3.2rem">お気軽にお問い合わせくださいませ。</Text>
        <Box>
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
        </Box>
      </Flex>
      <Flex pos="relative" transform="translateX(-64px)">
        <Text fontSize="3.2rem" opacity="1" transition="opacity 0.2s">
          無料カウンセリング予約
        </Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="48px"
          h="48px"
          bg="transparent"
          border="#ffffff 2px solid"
          borderRadius="9999px"
          transition="background 0.2s, inset 0.2s"
          pos="absolute"
          inset="auto -64px auto auto"
        >
          <Flex
            w="16px"
            h="2px"
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
                height: '2px',
                transform: 'rotateZ(45deg)',
                transition: 'background 0.2s',
                position: 'absolute',
                inset: '-3px -2px auto auto',
              },
              '&::after': {
                content: "''",
                display: 'block',
                background: 'white',
                width: '10px',
                height: '2px',
                transform: 'rotateZ(-45deg)',
                transition: 'background 0.2s',
                position: 'absolute',
                inset: '3px -2px auto auto',
              },
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navigation;
