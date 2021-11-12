import AssetModelGenerated from "./generated/AssetModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AssetModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AssetModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AssetModelGenerated,
  ...customModel
};
