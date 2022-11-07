import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

type Props = {
  text: string;
  url: string;
};

const Link: FC<Props> = ({ text, url }) => {
  return (
    <NextLink href={url} passHref>
      <Flex
        as="a"
        justifyContent="center"
        alignItems="center"
        gap="16px"
        w="fit-content"
        mx="auto"
        transform="translateX(16px)"
        transition="opacity 0.2s"
        fontSize="2.4rem"
        _hover={{
          '>p': {
            opacity: '0.5',
          },
          '>span': {
            background: 'linear-gradient(90deg, #FFE259 0%, #FFA751 100%)',
            inset: 'auto -72px auto auto',
            '&::after': {
              content: "''",
              background: 'transparent',
            },
            '>span': {
              background: '#ffffff',
              '&::before': {
                content: "''",
                background: '#ffffff',
              },
              '&::after': {
                content: "''",
                background: '#ffffff',
              },
            },
          },
        }}
      >
        <Text opacity="1" transition="opacity 0.2s">
          {text}
        </Text>
        <Flex
          as="span"
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          w="48px"
          h="48px"
          borderRadius="9999px"
          transition="inset 0.2s"
          sx={{
            '&::before': {
              content: "''",
              display: 'block',
              width: '48px',
              height: '48px',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #FFE259 0%, #FFA751 100%)',
              position: 'absolute',
              inset: 'auto',
              zIndex: '-1',
            },
            '&::after': {
              content: "''",
              display: 'block',
              width: '45px',
              padding: '45px 0 0',
              borderRadius: '9999px',
              background: 'white',
              transition: 'background 0.2s',
              position: 'absolute',
              inset: 'auto',
            },
          }}
        >
          <Flex
            as="span"
            display="inline-flex"
            w="16px"
            h="2px"
            transition="background 0.2s"
            pos="relative"
            zIndex="2"
            textStyle="orangeGradation"
            sx={{
              '&::before': {
                content: "''",
                display: 'block',
                background: 'linear-gradient(90deg, #FFE259 0%, #FFA751 100%)',
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
                background: 'linear-gradient(90deg, #FFE259 0%, #FFA751 100%)',
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
    </NextLink>
  );
};

export default Link;
