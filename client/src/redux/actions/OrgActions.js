import actionsFunction from "./generated/OrgActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import OrgApi from "../../api/OrgApi";
 
 actionsFunction.loadOrgList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return OrgApi
     .getOrgList()
     .then(list => {
       dispatch(actionsFunction.loadOrgSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
