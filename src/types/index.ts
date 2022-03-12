export interface Product {
  _id: string;
  name: string;
  description: string;
  brand: string;
  imageUrl: string;
  price: number;
  category: string;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Review {
  comment: string;
  rate: number;
  productId: string;
  _id: string;
}
