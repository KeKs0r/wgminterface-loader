import Eyes2 from "../img/Eyes_02.png";
import Mouth1 from "../img/Mouth_03.png";

export function InterFace() {
  return (
    <div className="px-12 py-8 grid grid-flow-row items-center justify-center">
      <img className="w-36" alt="Eyes" src={Eyes2} />
      <div className="flex items-center  mt-6">
        <img className="w-18" alt="Mout" src={Mouth1} />
      </div>
    </div>
  );
}
