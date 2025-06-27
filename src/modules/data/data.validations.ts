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
export const UpdateDateTimeWaybillValidation = {
  body: Joi.object({
    /* nroPesca: Joi.string().required().messages({
      'any.required': 'The nroPesca field is required.',
      'string.empty': 'The nroPesca field cannot be empty.'
    }), */
    nroGuia: Joi.string().required().messages({
      'any.required': 'The nroGuia field is required.',
      'string.empty': 'The nroGuia field cannot be empty.'
    }),
    inicioPesca: Joi.string().required().messages({
      'any.required': 'The inicioPesca field is required.',
      'string.empty': 'The inicioPesca field cannot be empty.'
    }),
    finPesca: Joi.string().required().messages({
      'any.required': 'The finPesca field is required.',
      'string.empty': 'The finPesca field cannot be empty.'
    }),
    fechaCamaroneraPlanta: Joi.string().required().messages({
      'any.required': 'The fechaCamaroneraPlanta field is required.',
      'string.empty': 'The fechaCamaroneraPlanta field cannot be empty.'
    }),
    fechaLlegadaCamaronera: Joi.string().required().messages({
      'any.required': 'The fechaLlegadaCamaronera field is required.',
      'string.empty': 'The fechaLlegadaCamaronera field cannot be empty.'
    })
  })
};