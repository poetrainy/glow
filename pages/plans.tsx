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
import check from '../src/assets/icon_check';

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
      <Navigation />
      <OriginalSpacer size="200px" />
      <Heading data={indexContents[3]} />
      <OriginalSpacer size="120px" />
      <Box as="section">
        <Text as="h2" w="fit-content" mx="auto" fontSize="2.4rem">
          プラン詳細
        </Text>
        <OriginalSpacer size="64px" />
        <Box w="100%" p="0 5%" overflowX="auto" overflowY="hidden">
          <Box as="table" w="80vw" maxW="1000px" minW="800px" mx="auto">
            <Box as="tbody">
              {plans.map((item: string[], i: number) => (
                <Flex
                  as="tr"
                  height="72px"
                  key={i}
                  sx={{
                    ...(i === 0
                      ? {
                          height: '56px',
                          color: 'white',
                          background: 'gradation',
                          fontSize: '2rem',
                          fontWeight: 'bold',
                        }
                      : { height: '72px' }),
                    ...(i !== 0 && i % 2 === 0 && { background: '#F7FAFC' }),
                  }}
                >
                  {item.map((td: string, i2: number) => (
                    <Flex
                      as="td"
                      key={i2}
                      justifyContent="center"
                      alignItems="center"
                      h="100%"
                      textAlign="center"
                      sx={{
                        ...(i2 === 0
                          ? { width: '22%', fontWeight: 'bold' }
                          : { width: '26%' }),
                      }}
                    >
                      {td}
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <OriginalSpacer size="120px" />
      <Box as="section">
        <Text as="h2" w="fit-content" mx="auto" fontSize="2.4rem">
          追加オプション
        </Text>
        <OriginalSpacer size="64px" />
        <Flex
          as="ul"
          justifyContent="space-between"
          gap="64px"
          flexWrap="wrap"
          maxW="1000px"
          mx="auto"
          sx={{
            justifyContent: {
              base: 'center',
              md: 'space-between',
            },
            width: {
              base: '90vw',
              sm: '75vw',
            },
          }}
        >
          <Flex
            as="li"
            w="100%"
            textStyle="planCardWrap"
            sx={{
              margin: {
                base: '0',
                md: '64px 0 0',
              },
            }}
          >
            <Flex
              w="100%"
              textStyle="planCard"
              sx={{
                padding: {
                  base: '80px 40px',
                  lg: '80px 32px',
                },
              }}
            >
              <PlanCardHeading data="恋愛・婚活相談" />
              <Text fontSize="4rem" lineHeight="6rem" m="16px 0 16px">
                <Text as="span">会員様</Text>
                <Text as="span" textStyle="textGradation">
                  無料
                </Text>
              </Text>
              <Flex
                w="100%"
                m="0 auto 0 0"
                fontSize="1.5rem"
                lineHeight="2.8rem"
                sx={{
                  flexWrap: {
                    base: 'wrap',
                    lg: 'nowrap',
                  },
                  gap: {
                    base: '8px 0',
                    lg: '5%',
                  },
                }}
              >
                {consultation.map((item: any, i: number) => (
                  <Box
                    key={i}
                    sx={{
                      width: {
                        base: '100%',
                        lg: 'calc((100% - 5%) / 2)',
                      },
                    }}
                  >
                    <Text>{item.target}</Text>
                    <Box>
                      <Text as="span">{item.time}</Text>
                      <Text as="span">{item.price}</Text>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Flex>
          </Flex>
          {option.map((item, i) => {
            return (
              <Flex as="li" key={i} textStyle="planCardWrap">
                {item.copy !== undefined && (
                  <>
                    <PlanCardCopy data={item.copy} />
                    <OriginalSpacer size="24px" />
                  </>
                )}
                <Flex p="40px 32px" textStyle="planCard">
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
      </Box>
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
            bg="white"
            boxShadow="0px 3px 16px rgba(0, 0, 0, 0.05)"
            borderRadius="8px"
            sx={{
              width: {
                base: '90vw',
                md: '70vw',
                lg: '50vw',
              },
              padding: {
                base: '40px 24px',
                sm: '64px 80px',
              },
            }}
          >
            {item.list.map((list: any, i2: number) => (
              <Flex as="li" key={i2} gap="8px">
                <Box as={check} w="20px" m="4px 0 0" />
                <Text w="calc(100% - 20px)" lineHeight="3rem">
                  {list}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      ))}
      <OriginalSpacer size="184px" />
      <Contact />
      <Foot />
    </>
  );
};

export default plansPage;
