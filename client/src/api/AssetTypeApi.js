import AssetTypeApiGenerated from "./generated/AssetTypeApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AssetTypeApi extends AssetTypeApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get AssetType List
  static getAssetTypeList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/assettypes")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AssetTypeApi;