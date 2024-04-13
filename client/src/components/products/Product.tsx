import Rating from "@/components/Rating.tsx";
import {Card, CardHeader, Image, CardBody} from "@nextui-org/react";

const Product = () => {
  return (
    <Card className="pt-1.5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <p className="text-tiny uppercase font-bold text-default-500">Daily Mix</p>
        <small className="">$ 900</small>
        <div className="flex">
          <Rating value={4.5} count={16}/>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible pt-1">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default Product;
