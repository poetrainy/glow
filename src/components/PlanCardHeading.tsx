import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
};

const PlanCardHeading: FC<Props> = ({ data }) => {
  return (
    <Flex
      as="h3"
      justifyContent="center"
      fontSize="2rem"
      position="relative"
      sx={{
        '&::before': {
          content: "''",
          display: 'block',
          width: '64px',
          height: '1px',
          background: 'gradation',
          position: 'absolute',
          inset: 'auto auto -4px auto',
        },
      }}
    >
      {data}
    </Flex>
  );
};

export default PlanCardHeading;
