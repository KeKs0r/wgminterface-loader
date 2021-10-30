import { useState, createContext, useContext } from "react";
import { random } from "lodash";

import Face_0_1_1 from "../img/faces/0_1_1.png";
import Face_0_2_1 from "../img/faces/0_2_1.png";
import Face_0_3_1 from "../img/faces/0_3_1.png";
import Face_0_4_1 from "../img/faces/0_4_1.png";

import Face_1_1_0 from "../img/faces/1_1_0.png";
import Face_1_1_1 from "../img/faces/1_1_1.png";
import Face_1_2_0 from "../img/faces/1_2_0.png";
import Face_1_2_1 from "../img/faces/1_2_1.png";
import Face_1_3_0 from "../img/faces/1_3_0.png";
import Face_1_3_1 from "../img/faces/1_3_1.png";
import Face_1_4_0 from "../img/faces/1_4_0.png";
import Face_1_4_1 from "../img/faces/1_4_1.png";

import Face_2_1_0 from "../img/faces/2_1_0.png";
import Face_2_1_1 from "../img/faces/2_1_1.png";
import Face_2_2_0 from "../img/faces/2_2_0.png";
import Face_2_2_1 from "../img/faces/2_2_1.png";
import Face_2_3_0 from "../img/faces/2_3_0.png";
import Face_2_3_1 from "../img/faces/2_3_1.png";
import Face_2_4_0 from "../img/faces/2_4_0.png";
import Face_2_4_1 from "../img/faces/2_4_1.png";

import Face_3_1_0 from "../img/faces/3_1_0.png";
import Face_3_1_1 from "../img/faces/3_1_1.png";
import Face_3_2_0 from "../img/faces/3_2_0.png";
import Face_3_2_1 from "../img/faces/3_2_1.png";
import Face_3_3_0 from "../img/faces/3_3_0.png";
import Face_3_3_1 from "../img/faces/3_3_1.png";
import Face_3_4_0 from "../img/faces/3_4_0.png";
import Face_3_4_1 from "../img/faces/3_4_1.png";

type FaceContextType = {
  image: string;
  nextMouth(): void;
  nextEye(): void;
  toggleGlasses(): void;
  shuffle(): void;
  loading: boolean;
  toggleLoading(): void;
};

const FaceContext = createContext<FaceContextType>(null as any);

export function Provider({ children }: { children: React.ReactNode }) {
  const [mouthIndex, setMouthIndex] = useState(1);
  const [eyeIndex, setEyeIndex] = useState(0);
  const [showGlasses, setShowGlasses] = useState(false);
  const [loading, setLoading] = useState(true);

  const nextMouth = () => setMouthIndex((v) => (v >= 4 ? 1 : v + 1));
  const nextEye = () => setEyeIndex((v) => (v >= 3 ? 0 : v + 1));
  const toggleGlasses = () => setShowGlasses((t) => !t);
  const shuffle = () => {
    const eye = random(0, 3, false);
    const mouth = random(1, 4, false);
    const glass = random(0, 1, false) ? true : false;
    setEyeIndex(eye);
    setMouthIndex(mouth);
    setShowGlasses(glass);
  };

  const toggleLoading = () => setLoading((a) => !a);

  const image = getImage(eyeIndex, mouthIndex, showGlasses || eyeIndex === 0);

  const value = {
    image,
    nextMouth,
    nextEye,
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

const IMAGE_MAP = {
  0: {
    1: {
      1: Face_0_1_1,
    },
    2: {
      1: Face_0_2_1,
    },
    3: {
      1: Face_0_3_1,
    },
    4: {
      1: Face_0_4_1,
    },
  },
  1: {
    1: {
      0: Face_1_1_0,
      1: Face_1_1_1,
    },
    2: {
      0: Face_1_2_0,
      1: Face_1_2_1,
    },
    3: {
      0: Face_1_3_0,
      1: Face_1_3_1,
    },
    4: {
      0: Face_1_4_0,
      1: Face_1_4_1,
    },
  },
  2: {
    1: {
      0: Face_2_1_0,
      1: Face_2_1_1,
    },
    2: {
      0: Face_2_2_0,
      1: Face_2_2_1,
    },
    3: {
      0: Face_2_3_0,
      1: Face_2_3_1,
    },
    4: {
      0: Face_2_4_0,
      1: Face_2_4_1,
    },
  },
  3: {
    1: {
      0: Face_3_1_0,
      1: Face_3_1_1,
    },
    2: {
      0: Face_3_2_0,
      1: Face_3_2_1,
    },
    3: {
      0: Face_3_3_0,
      1: Face_3_3_1,
    },
    4: {
      0: Face_3_4_0,
      1: Face_3_4_1,
    },
  },
} as any;

function getImage(eye: number, mouth: number, glasses: boolean) {
  const glassIndex = glasses ? 1 : 0;

  const image = IMAGE_MAP[eye]?.[mouth]?.[glassIndex];
  if (!image) {
    console.warn("Could not find", eye, mouth, glassIndex);
  }
  return image;
}
