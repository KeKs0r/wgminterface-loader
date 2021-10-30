import { useState, createContext, useContext } from "react";

import Mouth1 from "../img/Mouth_01.png";
import Mouth2 from "../img/Mouth_02.png";
import Mouth3 from "../img/Mouth_03.png";
import Mouth4 from "../img/Mouth_04.png";

import Eyes1 from "../img/Eyes_01.png";
import Eyes2 from "../img/Eyes_02.png";
import Eyes3 from "../img/Eyes_03.png";
import Glasses1 from "../img/Glasses_01.png";

type Mouth = {
  img: string;
  imgClasses: string;
};
type Eyes = {
  img: string;
  imgClasses: string;
};
type Glasses = {
  img: string;
  imgClasses: string;
};
type FaceContextType = {
  mouth: Mouth;
  nextMouth(): void;
  eye: Eyes;
  nextEye(): void;
  glasses?: Glasses;
  toggleGlasses(): void;
  shuffle(): void;
  loading: boolean;
  toggleLoading(): void;
};

const FaceContext = createContext<FaceContextType>(null as any);

export function Provider({ children }: { children: React.ReactNode }) {
  const [mouthIndex, setMouthIndex] = useState(0);
  const [eyeIndex, setEyeIndex] = useState(0);
  const [showGlasses, setShowGlasses] = useState(false);
  const [loading, setLoading] = useState(false);
  const mouth = MOUTHS[mouthIndex];
  const eye = EYES[eyeIndex];
  const glasses = showGlasses
    ? {
        img: Glasses1,
        imgClasses: "absolute w-[300px] top-10 left-[24px]",
      }
    : undefined;

  const nextMouth = () =>
    setMouthIndex((v) => (v >= MOUTHS.length - 1 ? 0 : v + 1));
  const nextEye = () => setEyeIndex((v) => (v >= EYES.length - 1 ? 0 : v + 1));
  const toggleGlasses = () => setShowGlasses((t) => !t);
  const shuffle = () => {
    nextEye();
    nextMouth();
    toggleGlasses();
  };

  const toggleLoading = () => setLoading((a) => !a);

  const value = {
    mouth,
    nextMouth,
    eye,
    nextEye,
    glasses,
    toggleGlasses,
    shuffle,
    loading,
    toggleLoading,
  };
  return <FaceContext.Provider value={value}>{children}</FaceContext.Provider>;
}

export function useFaceContext() {
  return useContext(FaceContext);
}

const mouthClasses = "absolute w-20 top-28 left-[140px]";

const MOUTHS: Mouth[] = [
  {
    img: Mouth1,
    imgClasses: mouthClasses,
  },
  {
    img: Mouth2,
    imgClasses: mouthClasses,
  },
  {
    img: Mouth3,
    imgClasses: mouthClasses,
  },
  {
    img: Mouth4,
    imgClasses: mouthClasses,
  },
];

const EYES: Eyes[] = [
  {
    img: Eyes1,
    imgClasses: "absolute w-52 top-12 left-[74px]",
  },
  {
    img: Eyes2,
    imgClasses: "absolute w-48 top-16 left-[82px]",
  },
  {
    img: Eyes3,
    imgClasses: "absolute w-52 top-12 left-[74px]",
  },
];
