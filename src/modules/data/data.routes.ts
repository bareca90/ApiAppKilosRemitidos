import { Request, Response, Router } from "express";
import { validate } from "express-validation";
import { GetWaybillValidation } from "./data.validations";  
import { getWaybillController } from "./data.controller";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpresponse.utils";  
import {validationToken} from "../../middlewares/validationtoke.middleware";

const routes = Router();

routes.post(
    "/getwaybill", 
    validationToken as any,
    validate(GetWaybillValidation,{},{}) as any ,
    async (req: Request, res: Response) => {
        try {
          const response = await getWaybillController(req);
          res.status(response.code).json(response);
        } catch (error) {
          HttpResponse.fail(
            res,
            CodesHttpEnum.internalServerError,
            null,
            (error as any).toString()
        );
        }
      }
);



export default routes;