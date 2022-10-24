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
      w="80vw"
      maxW="960px"
      mx="auto"
    >
      {data.map((item, i) => (
        <Flex as="li" flexDirection="column" gap="16px" key={i}>
          <Text fontWeight="bold">Q. {item.question}</Text>
          <Text lineHeight="3rem">A. {item.answer}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Faq;
