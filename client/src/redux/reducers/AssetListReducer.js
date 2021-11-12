// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function AssetListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_ASSET_SUCCESS:
      return { ...state, listAsset: action.payload };
    case types.DELETE_ASSET_SUCCESS:
      return { ...state, asset: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}