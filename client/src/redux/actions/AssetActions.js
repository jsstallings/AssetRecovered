import actionsFunction from "./generated/AssetActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AssetApi from "../../api/AssetApi";
 
 actionsFunction.loadAssetList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AssetApi
     .getAssetList()
     .then(list => {
       dispatch(actionsFunction.loadAssetSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
