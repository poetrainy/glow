import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  gray?: boolean;
};

const Allow: FC<Props> = ({ gray }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      pos="relative"
      sx={{
        ...(gray
          ? {
              height: '24px',
              '&::before': {
                content: "''",
                display: 'block',
                background: 'gray',
                width: '28px',
                height: '1px',
                margin: '0 25px 0 0',
                transform: 'rotateZ(24deg)',
                position: 'absolute',
                inset: '16px auto auto auto',
              },
              '&::after': {
                content: "''",
                display: 'block',
                background: 'gray',
                width: '28px',
                height: '1px',
                margin: '0 0 0 25px',
                transform: 'rotateZ(-24deg)',
                position: 'absolute',
                inset: '16px auto auto auto',
              },
            }
          : {
              justifyContent: 'center',
              alignItems: 'center',
              width: '56px',
              height: 'auto',
              '&::before': {
                content: "''",
                display: 'block',
                background:
                  'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
                width: '28px',
                height: '1px',
                margin: 'auto auto 23px',
                transform: 'rotateZ(-304deg)',
                position: 'absolute',
                inset: 'auto',
              },
              '&::after': {
                content: "''",
                display: 'block',
                background:
                  'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
                width: '28px',
                height: '1px',
                margin: ' 23px auto auto',
                transform: 'rotateZ(304deg)',
                position: 'absolute',
                inset: 'auto',
              },
            }),
      }}
    />
  );
};

export default Allow;
