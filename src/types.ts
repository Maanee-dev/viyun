export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  color: string[];
  size: string[];
  image: string;
  images: string[];
  description: string;
  isNewArrival?: boolean;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
