import Product from "@/components/products/Product.tsx";

const Home = () => {
  return (
    <div className="p-2">
      <div className="flex flex-wrap gap-2 justify-center">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
};

export default Home;
