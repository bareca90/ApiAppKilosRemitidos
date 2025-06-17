import { Request, Response, Router } from "express";
import { validate } from "express-validation";
import { LoginValidation } from "./auth.validations";
import { validateUserController } from "./auth.controller";
import { CodesHttpEnum } from "../../enums/codesHttpsEnums";
import { HttpResponse } from "../../utils/httpresponse.utils";


const routes = Router();

routes.post(
    "/validateuser",
    validate(LoginValidation,{},{}) as any ,
    async (req: Request, res: Response) => {
        try {
          const response = await validateUserController(req);
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