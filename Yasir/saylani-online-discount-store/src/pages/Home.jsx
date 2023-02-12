import { Box } from "@chakra-ui/react";

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import CTA from "../components/CTA";

const Meat = [
  {
    title: "Mutton",
    img: "https://unsplash.com/photos/Xedxbjx7MFg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2MTg3ODg4&force=true&w=1920",
    price: "100 PKR",
  },
  {
    title: "Mutton",
    img: "https://unsplash.com/photos/Xedxbjx7MFg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2MTg3ODg4&force=true&w=1920",
    price: "100 PKR",
  },
  {
    title: "Mutton",
    img: "https://unsplash.com/photos/Xedxbjx7MFg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc2MTg3ODg4&force=true&w=1920",
    price: "100 PKR",
  },
];

export default function Home() {
  return (
    <div>
      <Box>
        <Hero />
        <Gallery />

        {/* <Products title={"Best Sellings"} products={BestSellings} /> */}
        <Products title={"Meat"} products={Meat} />
        {/* <Products title={"Vegetables"} products={Vegetables} /> */}
        {/* <Products title={"Frozen Food"} products={Frozen} /> */}
        {/* <Products title={"Beverages"} products={Beverages} /> */}
        {/* <Products title={"Snacks"} products={Snacks} /> */}
        {/* <Products title={"Beauty & Personal Care"} products={Beauty} /> */}
        {/* <Products title={"Baby Products"} products={Baby} /> */}

        <CTA />
      </Box>
    </div>
  );
}
