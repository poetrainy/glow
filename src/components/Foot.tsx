import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import React from 'react';
import ig from '../assets/icon_ig';
import tw from '../assets/icon_tw';

const sns: {
  url: string;
  icon: (props: any) => JSX.Element;
}[] = [
  {
    url: 'https://www.instagram.com/glow.shikada11.22/',
    icon: tw,
  },
  {
    url: 'https://twitter.com/GLOW_shikada',
    icon: ig,
  },
];

const Foot: FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="24px"
      w="100%"
      h="344px"
    >
      <Text>Logo</Text>
      <Text textAlign="center">
        大阪府大阪市阿倍野区松崎町1-2-8
        <br />
        JR天王寺駅東口すぐ（カウンセリング場所）
      </Text>
      <Text>TEL. 080-7267-2149</Text>
      <Flex as="ul" gap="16px">
        {sns.map((item, i) => (
          <Box as="li" key={i}>
            <Box as="a" href={item.url}>
              <Box as={item.icon} w="32px" h="32px" />
            </Box>
          </Box>
        ))}
      </Flex>
      <Text as="small" fontSize="1.2rem">
        Copyright &copy; 2022 結婚相談所 GLOW All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default Foot;
