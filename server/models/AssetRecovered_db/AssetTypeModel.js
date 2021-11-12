import AssetTypeModelGenerated from "./generated/AssetTypeModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AssetTypeModelGenerated.init();
  
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
      return await AssetTypeModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AssetTypeModelGenerated,
  ...customModel
};
