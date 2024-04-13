import {
  Card,
} from "@/components/ui/card.tsx"
import '../styles/styles.css'
import {Image} from "@nextui-org/react";
import {useState, MouseEvent} from "react";

const ProductImage = () => {
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const percentX = (offsetX / rect.width) * 100;
    const percentY = (offsetY / rect.height) * 100;

    setTransformOrigin(`${percentX}% ${percentY}%`);
  };

  return (
    <Card className="max-w-[400px] relative overflow-hidden" onMouseMove={handleMouseMove}>
      <Image
        alt="Product Image"
        className="transition-transform duration-300 transform hover:scale-zoom hover:cursor-plus rounded-none"
        src="https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg"
        style={{ transformOrigin }}
      />
    </Card>
  )
}

export default ProductImage;
