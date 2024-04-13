import Rating from "@/components/Rating.tsx";
import {Card, CardHeader, Image, CardBody} from "@nextui-org/react";
import {Link} from "react-router-dom";

const Product = () => {
  return (
    <Link to="/products/1">
      <Card>
        <CardHeader className="p-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Frontend Radio</h4>
          <p className="text-tiny uppercase font-bold text-default-500">Daily Mix</p>
          <small className="">$ 900</small>
          <Rating value={4.5} count={16}/>
        </CardHeader>
        <CardBody className="overflow-visible p-0">
          <Image
            alt="Card background"
            className="object-cover rounded-none"
            src="https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg"
            width={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
}

export default Product;
