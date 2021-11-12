/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE AssetControllerGenerated.js PLEASE EDIT ../AssetController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import AssetModel from "../../../models/AssetRecovered_db/AssetModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import AssetController from "../AssetController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/asset`;
    router.delete(baseUrl + "/:id", authorize([]), AssetController.delete);
    router.get(baseUrl + "", authorize([]), AssetController.list);
  },


  // CRUD METHODS


  /**
  * AssetModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await AssetModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * AssetModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await AssetModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  
  // Custom APIs

};

export default generatedControllers;
