import { configureStore } from '@reduxjs/toolkit'

export interface ProductState {
  name: string;
}

const defaultState: ProductState = {
  name: "default name"
}

export const REDUX_MUTATION_USER = 'SET_USER';

export function productReducer(state: ProductState = { name: defaultState.name }, action: any): any {
  switch (action.type) {
    case REDUX_MUTATION_USER:
      return { name: action.payload.newName };
    default:
      return state;
  }
}
