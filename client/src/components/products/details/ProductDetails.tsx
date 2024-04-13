import ProductImage from "@/components/products/details/ProductImage.tsx";
import Purchase from "@/components/products/details/Purchase.tsx";

const ProductDetails = () => {
  return (
    <div className="flex flex-wrap justify-center w-full items-center gap-4 p-4 md:p-16 ">
      <div className="flex">
        <ProductImage/>
      </div>
      <div className="flex">
        <Purchase/>
      </div>
    </div>
  )
}

export default ProductDetails;
