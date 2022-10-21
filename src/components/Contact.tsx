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
    >
      <Flex justifyContent="space-between" gap="40px" flexDirection="column">
        <Text fontSize="3.2rem">お気軽にお問い合わせくださいませ。</Text>
        <Box>
          <Text fontSize="2rem" mb="8px">
            お電話でも受付しております。
          </Text>
          <Text fontSize="3.2rem">080-7267-2149</Text>
          <Text fontSize="1.2rem">※受付時間 11:00～23:30（木曜定休日）</Text>
        </Box>
      </Flex>
      <Text fontSize="3.2rem">無料カウンセリング予約</Text>
    </Flex>
  );
};

export default Navigation;
