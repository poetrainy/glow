import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
};

const PlanCardCopy: FC<Props> = ({ data }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="40px"
      color="white"
      p="0 24px"
      textStyle="mainGradation"
      boxShadow="0px 3px 16px rgba(0, 0, 0, 0.07)"
    >
      {data}
    </Flex>
  );
};

export default PlanCardCopy;
