export interface Dish {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  description: string;
  imageUrl: string;
  bestseller?: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Restaurant {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  description: string;
  isVeg: boolean;
  address: string;
  cuisine: string;
  deliveryTime: string;
  offer: string;
  dishes: Dish[];
}

export interface FoodCategory {
  id: string;
  name: string;
  imageUrl: string;
}

export type OrderStatus = 'Processing' | 'Out for Delivery' | 'Delivered';

export interface Order {
  id: string;
  date: string; // ISO string
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
}
