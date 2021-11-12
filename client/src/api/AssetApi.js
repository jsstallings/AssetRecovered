import AssetApiGenerated from "./generated/AssetApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AssetApi extends AssetApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Asset List
  static getAssetList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/assets")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AssetApi;