import { useFaceContext } from "./FaceContext";

export function InterFace() {
  const { mouth, eye, glasses } = useFaceContext();
  return (
    <div className="h-full px-12 py-8 grid grid-flow-row items-center justify-center relative">
      <img className={eye.imgClasses} alt="Eyes" src={eye.img} />
      {glasses && (
        <img className={glasses.imgClasses} alt="Glasses" src={glasses.img} />
      )}
      <img className={mouth.imgClasses} alt="Mouth" src={mouth.img} />
    </div>
  );
}
