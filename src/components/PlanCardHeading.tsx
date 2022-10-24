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
          background:
            'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
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
