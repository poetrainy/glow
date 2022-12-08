import { FC, ReactNode, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import OriginalSpacer from './OriginalSpacer';

type Props = {
  children: ReactNode;
  size: number;
  unmove?: boolean;
};

const FadeIn: FC<Props> = ({ children, size, unmove = false }) => {
  return (
    <>
      <OriginalSpacer size={size + 'px'} />
      <Box>{children}</Box>
    </>
  );
};

export default FadeIn;
