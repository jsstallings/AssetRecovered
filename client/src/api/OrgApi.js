import OrgApiGenerated from "./generated/OrgApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class OrgApi extends OrgApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Org List
  static getOrgList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/orgs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default OrgApi;