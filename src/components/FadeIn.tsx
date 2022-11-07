import { FC, ReactNode, useEffect, useRef } from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import OriginalSpacer from './OriginalSpacer';
import { useInView } from 'react-intersection-observer';

// const animationKeyframes = keyframes`
//   0% { transform: translateX(-80%); opacity: 0 }
// 100% { transform: translateX(0); opacity: 1; }
// `;

type Props = {
  children: ReactNode;
  size: number;
};

// const animation = `${animationKeyframes} 2s ease-in-out`;

const FadeIn: FC<Props> = ({ children, size }) => {
  const animation = useAnimation();
  const variants = {
    // animation: `${animationKeyframes} 2s ease-in-out`,
    hidden: {
      opacity: 0,
      // background: 'tomato',
      // transform: 'translateX(-80%)',
    },
    show: {
      opacity: 1,
      // background: 'skyblue',
      // transform: 'translateX(0)',
      // transition: { duration: 2, type: 'tween' },
    },
  };

  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-200px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  useEffect(() => {
    if (inView) {
      animation.start;
    }
  }, [inView]);

  return (
    <>
      <OriginalSpacer size={size + 'px'} />
      <Box
        as={motion.div}
        // animate={animation}
        initial="hidden"
        animate={inView && 'show'}
        variants={variants}

        ref={ref}
        // @ts-ignore
        // transition={{
        //   delay: 1,
        //   duration: 2,
        //   type: 'tween',
        //   ease: [5],
        //   default: { ease: 'linear' },
        // }}
      >
        {children}
      </Box>
    </>
  );
};

export default FadeIn;
