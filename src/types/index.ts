export type UserType = {
  id: Number;
  name: string;
  email: string;
};

export type SubCategoryType = {
  title: String;
  CatId: Number;
  id: Number;
};

export type CategoriesType = {
  id: Number;
  title: String;
};

export type CartItemsType = {
  cartid: number;
  title: string;
  price: number;
};

export type StoreType = {
  id: number;
  name: string;
  coverImage: string;
  useremail: string;
};

export type ProductType = {
  id: number;
  name: string;
  price: number;
  images: string[];
  storeId: number;
};

export type CartItem = {
  title: string;
  price: number;
  images: string[];
};
