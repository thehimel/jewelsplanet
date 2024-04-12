import {Card, CardHeader, Image, CardFooter, Button} from "@nextui-org/react";

const Product = () => {
  return (
    <Card className="border-none" isFooterBlurred>
      <CardHeader className="pb-0 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <p className="text-default-500">12 Tracks</p>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <Image
        alt="Card background"
        className="object-cover"
        src="https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg"
        radius="none"
        width={270}
      />
      <div className="flex justify-center">
        <CardFooter className="mb-4 py-2 justify-between border-white/20 border-1 overflow-hidden absolute rounded-large bottom-1 w-[calc(100%_-_30%)] shadow-small z-10">
          <p className="text-tiny text-white/80 pl-2">$949</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            Add to Cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default Product;
