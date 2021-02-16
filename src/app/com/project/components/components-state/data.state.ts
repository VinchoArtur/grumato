import {DataModel} from "../component-models/data-model/data-model";

export interface DataState {
  data: DataModel
}

export const initialDataState: DataState = {
    data: {
      users: [],
      customers: [],
      orders: []
    }
};
