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

const images = [
  Face_0_1_1,
  Face_0_2_1,
  Face_0_3_1,
  Face_0_4_1,
  Face_1_1_0,
  Face_1_1_1,
  Face_1_2_0,
  Face_1_2_1,
  Face_1_3_0,
  Face_1_3_1,
  Face_1_4_0,
  Face_1_4_1,
  Face_2_1_0,
  Face_2_1_1,
  Face_2_2_0,
  Face_2_2_1,
  Face_2_3_0,
  Face_2_3_1,
  Face_2_4_0,
  Face_2_4_1,
  Face_3_1_0,
  Face_3_1_1,
  Face_3_2_0,
  Face_3_2_1,
  Face_3_3_0,
  Face_3_3_1,
  Face_3_4_0,
  Face_3_4_1,
];

export function PrefetchImages() {
  return (
    <>
      {images.map((a) => (
        <img key={a} style={{ display: "none" }} src={a} alt="" />
      ))}
    </>
  );
}
