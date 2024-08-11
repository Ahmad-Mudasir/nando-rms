export type MenuItem = {
    _id:number,
    name:string,
    image:string,
    price:number,
    category:string,
}

export type MenuItemWithQuantity = MenuItem & { quantity: number };

export type CartItem = {
    [key: string]: number;
}

export type OrderDetails = {
    items: MenuItemWithQuantity[];
    amount: number;
    payment: boolean;
    tableNo: number;
    status?: string;
};