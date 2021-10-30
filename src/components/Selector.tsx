import { useFaceContext } from "./FaceContext";
import { motion } from "framer-motion";

const BUTTON_CLASSES =
  "bg-white text-grey-700 font-semibold py-2 pr-4 pl-[14px] rounded border border-grey-700/10 hover:bg-grey-700/5";

export function Selector() {
  const { nextMouth, nextEye, toggleGlasses, shuffle, toggleLoading } =
    useFaceContext();

  return (
    <div className="mb-4">
      <div className="flex justify-around">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={BUTTON_CLASSES}
          onClick={nextMouth}
        >
          👄
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={BUTTON_CLASSES}
          onClick={nextEye}
        >
          👀
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={BUTTON_CLASSES}
          onClick={toggleGlasses}
        >
          👓
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={BUTTON_CLASSES}
          onClick={shuffle}
        >
          🔀
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={BUTTON_CLASSES}
          onClick={toggleLoading}
        >
          ⏳
        </motion.button>
      </div>
    </div>
  );
}
