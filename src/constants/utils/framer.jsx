export const slideup = {
  initial: {
    opacity: 0,
    y: "80%",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      delay: i * 0.03,
      // ease: [0.62, 0.05, 0.01, 0.99],
    },
  }),
  exit: {
    opacity: 0,
    y: "80%",
  },
};

export const LargeSlideUp = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0%",
    transition: {
      duration: .7,
      delay: i * 0.09,
      ease: [0.62, 0.05, 0.01, 0.99],
    },
  }),
  exit: {
    opacity: 0,
    y: "100%",
  },
};

export const smallslideup = {
  initial: {
    opacity: 0,
    y: "60%",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: .3, delay: i * 0.03 },
  }),
  exit: {
    opacity: 0,
    y: "60%",
  },
};

export const slideup2 = {
  initial: {
    opacity: 0,
    y: "80%",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.3, delay: i * 0.03 },
  }),
  exit: {
    opacity: 0,
    y: "80%",
  },
};

export const slideup3 = {
  initial: {
    opacity: 0,
    y: "75px",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0",
    transition: {
      duration: 1,
      delay: i * 0.4,
    
    },
  }),
  exit: {
    opacity: 0,
    y: "75px",
  },
};


export const opacity = {
  initial: {
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    transition: { duration: .6, delay: i * 0.04 },
  }),
  exit: {
    opacity: 0,
  },
};

export const scaleAnimations = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const preloaderAnimations = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 4 },
  },
};

export const slidingAnimations = {
  initial: {
    height: "100vh",
  },
  enter: {
    height: "0",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    height: "0",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const perspectiveAnimations = {
  initial: {
    scale: 0,
    y: 0,
    opacity: 0,
  },
  enter: {
    scale: 0,
    y: 0,
    opacity: 0,
  },
  exit: {
    scale: 0.9,
    y: 100,
    opacity: 0.8,
    transition: { duration: 3, ease: [0.76, 0, 0.24, 1] },
  },
};
export const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity1 = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};
