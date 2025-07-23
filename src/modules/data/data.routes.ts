import { Request, Response, Router } from "express";
import { validate } from "express-validation";
import { GetWaybillValidation, InsertKgSentValidation, UpdateDateTimeWaybillValidation } from "./data.validations";  
import { getWaybillController, insertKgSentController, updateDateTimeWaybillController } from "./data.controller";
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
routes.post(
    "/updatedatetimewaybill", 
    validationToken as any,
    validate(UpdateDateTimeWaybillValidation,{},{}) as any ,
    async (req: Request, res: Response) => {
        try {
          const response = await updateDateTimeWaybillController(req);
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
routes.post(
    "/insertkgsent", 
    validationToken as any,
    validate(InsertKgSentValidation,{},{}) as any ,
    async (req: Request, res: Response) => {
        try {
          const response = await insertKgSentController(req);
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