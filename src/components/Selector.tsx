import { useFaceContext } from "./FaceContext";

const BUTTON_CLASSES =
  "bg-white text-grey-700 font-semibold py-2 pr-4 pl-[14px] rounded border border-grey-700/10 hover:bg-grey-700/5";

export function Selector() {
  const { nextMouth, nextEye, toggleGlasses, shuffle, toggleLoading } =
    useFaceContext();

  return (
    <div className="mb-4">
      <div className="flex justify-around">
        <button className={BUTTON_CLASSES} onClick={nextMouth}>
          👄
        </button>
        <button className={BUTTON_CLASSES} onClick={nextEye}>
          👀
        </button>
        <button className={BUTTON_CLASSES} onClick={toggleGlasses}>
          👓
        </button>
        <button className={BUTTON_CLASSES} onClick={shuffle}>
          🔀
        </button>
        <button className={BUTTON_CLASSES} onClick={toggleLoading}>
          ⏳
        </button>
      </div>
    </div>
  );
}
