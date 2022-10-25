import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import contents from '../libs/contents';
import Heading from './Heading';
import OriginalSpacer from './OriginalSpacer';

const IndexService: FC = () => {
  return (
    <Box
      as="section"
      textStyle="sectionWidth"
      sx={{
        '&::after': {
          inset: 'auto auto -200px -104px',
          textStyle: 'rainbowCircle',
        },
      }}
    >
      <Heading data={contents[5]} />
      <OriginalSpacer size="104px" />
      <Flex
        justifyContent="space-between"
        w="80vw"
        maxW="1000px"
        mx="auto"
        sx={{
          flexDirection: {
            base: 'column',
            md: 'row',
          },
          gap: {
            base: '40px 0',
            md: '5%',
          },
        }}
      >
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1807751837127!2d135.51526913183184!3d34.645856636869624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000ddeff6311ea9%3A0x7cca4c95b3981a6b!2z44CSNTQ1LTAwNTMg5aSn6Ziq5bqc5aSn6Ziq5biC6Zi_5YCN6YeO5Yy65p2-5bSO55S677yR5LiB55uu77yS4oiS77yY!5e0!3m2!1sja!2sjp!4v1666257023568!5m2!1sja!2sjp"
          w="55%"
          h="320px"
          border="0"
          loading="lazy"
          sx={{
            width: {
              base: '100%',
              md: '55%',
            },
          }}
        />
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          sx={{
            width: {
              base: '100%',
              md: '40%',
            },
          }}
        >
          <Text
            fontSize="2.4rem"
            sx={{
              margin: {
                base: '0 0 24px',
                md: '0',
              },
            }}
          >
            まずは、お気軽にご相談ください。
            <br />
            都シティ大阪天王寺でお会いしましょう。
          </Text>
          <Box>
            <Text fontSize="1.8rem">
              〒545-0053
              <br />
              大阪府大阪市阿倍野区松崎町1-2-8
            </Text>
            <OriginalSpacer size="16px" />
            <Text fontSize="1.2rem">
              ※都シティ 大阪天王寺に有料駐車場がございます。
              <br />
              JR天王寺駅東口すぐ
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default IndexService;
