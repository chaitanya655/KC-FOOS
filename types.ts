export interface Dish {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
  description: string;
  imageUrl: string;
  bestseller?: boolean;
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

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export type OrderStatus = 'Processing' | 'Out for Delivery' | 'Delivered';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
}

export interface FoodCategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface User {
  name: string;
  email: string;
  address: string;
}
