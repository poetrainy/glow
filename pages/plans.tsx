import type { NextPage } from 'next';
import { Box, Flex, Text } from '@chakra-ui/react';
import Navigation from '../src/components/Navigation';
import OriginalSpacer from '../src/components/OriginalSpacer';
import Foot from '../src/components/Foot';
import Heading from '../src/components/Heading';
import Contact from '../src/components/Contact';
import indexContents from '../src/libs/contents';
import { conditions, option, plans } from '../src/libs/plans';
import PlanCardCopy from '../src/components/PlanCardCopy';
import PlanCardHeading from '../src/components/PlanCardHeading';
import HeadOgp from '../src/components/HeadOgp';
import { path } from '../src/libs/path';

const consultation = [
  {
    target: '非会員様',
    time: '60〜80分',
    price: '10,000円',
  },
  {
    target: '非会員様（4回コース）',
    time: '30〜40分',
    price: '25,000円',
  },
];

const plansPage: NextPage = () => {
  return (
    <>
      <HeadOgp data={path[1]} />
      <Box>
        <OriginalSpacer size="200px" />
        <Navigation />
        <Heading data={indexContents[3]} />
        <OriginalSpacer size="120px" />
        <Box as="table" w="80vw" maxW="1000px" mx="auto">
          <Box as="tbody">
            {plans.map((item: any, i: number) => (
              <Box
                as="tr"
                key={i}
                sx={{
                  ...(i === 0
                    ? {
                        height: '56px',
                        color: 'white',
                        background:
                          'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                      }
                    : { height: '72px' }),
                  ...(i !== 0 && i % 2 === 0 ? { background: '#F7FAFC' } : {}),
                }}
              >
                {item.map((td: any, i2: number) => (
                  <Box
                    as="td"
                    key={i2}
                    textAlign="center"
                    sx={{
                      ...(i2 === 0
                        ? { width: '22%', fontWeight: 'bold' }
                        : { width: '26%' }),
                    }}
                  >
                    {td}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
        <Flex
          as="ul"
          justifyContent="space-between"
          gap="10%"
          flexWrap="wrap"
          w="75vw"
          maxW="1000px"
          mx="auto"
        >
          <Flex
            as="li"
            alignItems="center"
            flexDirection="column"
            w="calc((100% - 10% * 1) / 2)"
            minW="320px"
            m="64px 0 0"
          >
            <Flex textStyle="planCard">
              <PlanCardHeading data="恋愛・婚活相談" />
              <Text
                w="fit-content"
                fontSize="4rem"
                lineHeight="6rem"
                m="16px 0 8px"
              >
                <Text as="span">会員様</Text>
                <Text as="span" textStyle="textGradation">
                  無料
                </Text>
              </Text>
              <Flex gap="5%">
                {consultation.map((item: any, i: number) => (
                  <Box key={i} w="calc((100% - 5%) / 2)">
                    <Text>{item.target}</Text>
                    <Box>
                      <Text as="span">{item.time}</Text>
                      <Text as="span">{item.price}</Text>
                    </Box>
                  </Box>
                ))}
              </Flex>
              {/* <Text fontSize="1.5rem" lineHeight="2.8rem" m="16px 0 0">
              {item.text}
            </Text>
            {item.priceNotes !== undefined && (
              <Text fontSize="1.3rem" m="8px 0 0">
                {item.textNotes}
              </Text>
            )} */}
            </Flex>
          </Flex>
          {option.map((item, i) => {
            return (
              <Flex
                as="li"
                alignItems="center"
                flexDirection="column"
                w="calc((100% - 10% * 1) / 2)"
                key={i}
              >
                {item.copy !== undefined && (
                  <>
                    <PlanCardCopy data={item.copy} />
                    <OriginalSpacer size="24px" />
                  </>
                )}
                <Flex textStyle="planCard">
                  <PlanCardHeading data={item.title} />
                  <Flex
                    flexDirection="column"
                    justifyContent="flex-end"
                    m="16px 0 8px"
                  >
                    <Text as="p" textStyle="planCardPrice">
                      ¥{item.price}~
                    </Text>
                    {item.priceNotes !== undefined && (
                      <Text m="8px 0 0" textAlign="center">
                        {item.priceNotes}
                      </Text>
                    )}
                  </Flex>
                  <Text fontSize="1.5rem" lineHeight="2.8rem" m="16px 0 0">
                    {item.text}
                  </Text>
                  {item.priceNotes !== undefined && (
                    <Text fontSize="1.3rem" m="8px 0 0">
                      {item.textNotes}
                    </Text>
                  )}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        {conditions.map((item: any, i: number) => (
          <Box as="section" key={i} w="fit-content" m="120px auto 0">
            <Text as="h2" w="fit-content" mx="auto" fontSize="2.4rem">
              {item.title}
            </Text>
            <OriginalSpacer size="64px" />
            <Flex
              flexDirection="column"
              as="ul"
              gap="20px"
              w="fit-content"
              bg="white"
              p="64px 80px"
              boxShadow="0px 3px 16px rgba(0, 0, 0, 0.05)"
              borderRadius="8px"
            >
              {item.list.map((list: any, i2: number) => (
                <Box as="li" key={i2} fontSize="1.8rem">
                  {list}
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
        <OriginalSpacer size="184px" />
        <Contact />
        <Foot />
      </Box>
    </>
  );
};

export default plansPage;
