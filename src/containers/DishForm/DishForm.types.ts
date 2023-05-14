export type DishesType = "pizza" | "soup" | "sandwich";

export interface DishData {
  name: string;
  preparationTime: string;
  type: DishesType;
  numberOfSlices?: number;
  diameter?: number;
  spicinessScale?: number;
  slicesOfBread?: number;
}

export interface DishQuery {
  name: string;
  preparation_time: string;
  type: DishesType;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
  id?: string;
}

export interface FakeErrorType {
  [id: string]: string;
}

export interface DishesTypeYup {
  [id: string]: string;
}
