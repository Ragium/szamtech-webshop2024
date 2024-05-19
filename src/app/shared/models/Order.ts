import { Cart } from "./Cart";

export interface Order{
    id?: string;
    cart: Cart;
    createdAt: number;
    userId: string;
    user_email: string;
    total: number;
    status: string

}