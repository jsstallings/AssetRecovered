import actionsFunction from "./generated/AssetTypeActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AssetTypeApi from "../../api/AssetTypeApi";
 
 actionsFunction.loadAssetTypeList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AssetTypeApi
     .getAssetTypeList()
     .then(list => {
       dispatch(actionsFunction.loadAssetTypeSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
