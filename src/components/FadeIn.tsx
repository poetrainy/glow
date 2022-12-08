import { FC, ReactNode, useEffect, useRef } from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import OriginalSpacer from './OriginalSpacer';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: ReactNode;
  size: number;
};

const FadeIn: FC<Props> = ({ children, size }) => {
  const animation = useAnimation();
  const variants = {
    hidden: {
      opacity: 0,
      // transition: 'opacity 0.2s',
    },
    show: {
      opacity: 1,
      // transition: 'opacity 0.2s',
    },
  };

  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-200px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <>
      <OriginalSpacer size={size + 'px'} />
      <Box
        as={motion.div}
        initial="hidden"
        animate={inView && 'show'}
        variants={variants}
        ref={ref}
      >
        {children}
      </Box>
    </>
  );
};

export default FadeIn;
