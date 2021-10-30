import { useFaceContext } from "./FaceContext";
import { motion, AnimatePresence } from "framer-motion";

export function InterFace() {
  const { image } = useFaceContext();
  return (
    <div className="h-full px-12 py-8 grid grid-flow-row items-center justify-center relative">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={image}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          <img className="w-72" alt="Face" src={image} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
