import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { faqType } from '../types/microCms';

type Props = {
  data: faqType[];
};

const Faq: FC<Props> = ({ data }) => {
  return (
    <Flex
      as="ul"
      flexDirection="column"
      gap="48px"
      maxW="960px"
      mx="auto"
      sx={{
        width: {
          base: '90vw',
          md: '80vw',
        },
        fontSize: {
          base: '1.4rem',
          sm: '1.6rem',
        },
        lineHeight: {
          base: '2.5rem',
          sm: '3rem',
        },
      }}
    >
      {data.map((item, i) => (
        <Flex as="li" flexDirection="column" gap="16px" key={i}>
          <Text fontWeight="bold">Q. {item.question}</Text>
          <Text>A. {item.answer}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Faq;
