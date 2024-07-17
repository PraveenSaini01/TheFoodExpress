 import { Food } from "./food";

export type Restaurant= {
  restaurantId?: string;
  restaurantName?: string;
  description?: string;
  restaurantImage?: string;
  location?: string;
  rating?: number;
  food:Food[];

}
