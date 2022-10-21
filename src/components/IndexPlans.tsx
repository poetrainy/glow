import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import contents from '../libs/contents';
import { indexPlans, plans } from '../libs/plans';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';
import Link from './Link';

const IndexStrength: FC = () => {
  return (
    <Box as="section">
      <Heading data={contents[3]} />
      <OriginalSpacer size="104px" />
      <Flex
        as="ul"
        justifyContent="space-between"
        gap="5%"
        w="80vw"
        maxW="1080px"
        mx="auto"
      >
        {indexPlans.map((item, i) => {
          return (
            <Flex
              as="li"
              alignItems="center"
              flexDirection="column"
              w="calc((100% - 5% * 2) / 3)"
              key={i}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                h="40px"
                color="white"
                p="0 24px"
                textStyle="mainGradation"
                boxShadow="0px 3px 16px rgba(0, 0, 0, 0.07)"
              >
                {item.copy}
              </Flex>
              <OriginalSpacer size="24px" />
              <Flex
                alignItems="center"
                flexDirection="column"
                w="100%"
                p="40px 32px"
                boxShadow="0px 3px 16px rgba(0, 0, 0, 0.07)"
                borderRadius="16px"
              >
                <Text fontSize="2rem">{plans[0][i + 1]}</Text>
                <Text>
                  <Text as="span" fontSize="6rem" fontFamily="number">
                    ¥{plans[2][i + 1]}
                  </Text>
                  <Text as="span">/月</Text>
                </Text>
                <Text fontSize="2.5rem">＋</Text>
                <Text fontSize="1.2rem" lineHeight="1.2rem">
                  初期費用
                </Text>
                <Text fontSize="2.4rem" fontFamily="number" mr="8px">
                  ¥{plans[1][i + 1]}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Text
        w="80vw"
        maxW="1080px"
        mx="auto"
        fontSize="1.2rem"
        mt="24px"
        textAlign="right"
      >
        ※料金は税込表記です。
      </Text>
      <OriginalSpacer size="64px" />
      <Link text="料金プランを詳しく見る" url="/plans" />
      {/* <NextLink href="/plans" passHref>
        <Link text="料金プランを詳しく見る" />
      </NextLink> */}
    </Box>
  );
};

export default IndexStrength;
