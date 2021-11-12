import OrgModelGenerated from "./generated/OrgModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = OrgModelGenerated.init();
  
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
      return await OrgModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...OrgModelGenerated,
  ...customModel
};
