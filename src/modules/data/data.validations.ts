import { Joi} from 'express-validation';
import { DataRequest } from '../../interfaces/data.interfaces';

export const GetWaybillValidation = {
  body: Joi.object<DataRequest>({
    option: Joi.string().required().valid('GSG', 'GSK')
      .messages({
        'any.required': 'The option field is required.',
        'string.empty': 'The option field cannot be empty.',
        'any.only': 'The option must be one of the following values: GSG, GSK'
      })
  })
};