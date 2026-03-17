import rawProducts from "./products.json";
import prod1 from "../images/prod1.jpg";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";
import prod5 from "../images/prod5.jpg";
import prod6 from "../images/prod6.jpg";

import prod8 from "../images/prod8.jpg";
import prod9 from "../images/prod20.jpg";
import prod10 from "../images/prod10.jpg";
import prod11 from "../images/prod21.jpg";
import prod12 from "../images/prod12.jpg";
import prod13 from "../images/prod13.jpg";
import prod14 from "../images/prod22.jpg";
import prod15 from "../images/prod15.jpg";
import prod16 from "../images/prod16.jpg";
import prod17 from "../images/prod17.jpg";
import prod18 from "../images/prod18.jpg";
import prod19 from "../images/prod19.jpg";

const imageMap = {
  "prod1.jpg": prod1,
  "prod2.jpg": prod2,
  "prod3.jpg": prod3,
  "prod4.jpg": prod4,
  "prod5.jpg": prod5,
  "prod6.jpg": prod6,
  
  "prod8.jpg": prod8,
  "prod9.jpg": prod9,
  "prod10.jpg": prod10,
  "prod11.jpg": prod11,
  "prod12.jpg": prod12,
  "prod13.jpg": prod13,
  "prod14.jpg": prod14,
  "prod15.jpg": prod15,
  "prod16.jpg": prod16,
  "prod17.jpg": prod17,
  "prod18.jpg": prod18,
  "prod19.jpg": prod19,
};

const products = rawProducts.map((item) => ({
  ...item,
  image: imageMap[item.image] || "",
}));

export default products;
