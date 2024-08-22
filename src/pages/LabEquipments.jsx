import image2 from "../assets/images/products/Sava-Site-Pic-2.webp";
import image3 from "../assets/images/products/Sava-Site-Pic-3.webp";
import image4 from "../assets/images/products/Sava-Site-Pic-4.webp";
import image5 from "../assets/images/products/Sava-Site-Pic-5.webp";
import image6 from "../assets/images/products/Sava-Site-Pic-6.webp";
import image7 from "../assets/images/products/Sava-Site-Pic-7.webp";
import image8 from "../assets/images/products/Sava-Site-Pic-8.webp";
import image9 from "../assets/images/products/Sava-Site-Pic-9.webp";
import image10 from "../assets/images/products/Sava-Site-Pic-10.webp";
import image11 from "../assets/images/products/Sava-Site-Pic-11.webp";

import image13 from "../assets/images/products/Sava-Site-Pic-13.webp";
import image14 from "../assets/images/products/Sava-Site-Pic-14.webp";
import image15 from "../assets/images/products/Sava-Site-Pic-15.webp";
import image16 from "../assets/images/products/Sava-Site-Pic-16.webp";
import image17 from "../assets/images/products/Sava-Site-Pic-17.webp";
import image18 from "../assets/images/products/Sava-Site-Pic-18.webp";
import image19 from "../assets/images/products/Sava-Site-Pic-19.webp";

import Header from "../layouts/Header";
import ProductsCard from "../components/ProductsCard";
import Footer from "../layouts/Footer";

export default function LabEquipments() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-4 grid-rows-3 gap-4 px-16">
        <ProductsCard imageURL={image2} />
        <ProductsCard imageURL={image3} />
        <ProductsCard imageURL={image4} />
        <ProductsCard imageURL={image5} />
        <ProductsCard imageURL={image6} />
        <ProductsCard imageURL={image7} />
        <ProductsCard imageURL={image8} />
        <ProductsCard imageURL={image9} />
        <ProductsCard imageURL={image10} />
        <ProductsCard imageURL={image11} />

        <ProductsCard imageURL={image13} />
        <ProductsCard imageURL={image14} />
        <ProductsCard imageURL={image15} />
        <ProductsCard imageURL={image16} />
        <ProductsCard imageURL={image17} />
        <ProductsCard imageURL={image18} />
        <ProductsCard imageURL={image19} />
      </div>
      <Footer />
    </>
  );
}
