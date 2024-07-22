import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useAnimateOnScroll = (animationVariants) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start("visible");
  }

  return [ref, controls, animationVariants];
};

export default useAnimateOnScroll;
