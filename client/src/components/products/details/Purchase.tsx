import Rating from "@/components/Rating.tsx";
import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Label } from "@/components/ui/label.tsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx"

const Purchase = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Golden Necklace</CardTitle>
      </CardHeader>

      <CardContent>
        <Rating value={4.5} count={16}/>
        <p>In stock</p>
        <p className="">$ 900</p>
      </CardContent>

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Select defaultValue="1" name="quantity">
                <SelectTrigger id="quantity">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export default Purchase;
