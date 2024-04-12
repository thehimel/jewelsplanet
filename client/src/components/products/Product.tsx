import {Card, CardHeader, Image, CardBody} from "@nextui-org/react";

const Product = () => {
  return (
    <Card className="pt-1.5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <p className="text-tiny uppercase font-bold text-default-500">Daily Mix</p>
        <small className="">$ 900</small>
      </CardHeader>
      <CardBody className="overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default Product;
