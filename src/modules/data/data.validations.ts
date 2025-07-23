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

export const InsertKgSentValidation = {
  body: Joi.object({
    nroGuia: Joi.string().required().messages({
      'any.required': 'The nroGuia field is required.',
      'string.empty': 'The nroGuia field cannot be empty.'
    }),
    ciclo: Joi.string().required().messages({
      'any.required': 'The ciclo field is required.',
      'string.empty': 'The ciclo field cannot be empty.'
    }),
    anioSiembra: Joi.number().integer().required().messages({
      'any.required': 'The anioSiembra field is required.',
      'number.base': 'The anioSiembra must be a number.',
      'number.integer': 'The anioSiembra must be an integer.'
    }),
    lote: Joi.number().integer().required().messages({
      'any.required': 'The lote field is required.',
      'number.base': 'The lote must be a number.',
      'number.integer': 'The lote must be an integer.'
    }),
    ingresoCompra: Joi.string().required().messages({
      'any.required': 'The ingresoCompra field is required.',
      'string.empty': 'The ingresoCompra field cannot be empty.'
    }),
    tipoMaterial: Joi.string().required().messages({
      'any.required': 'The tipoMaterial field is required.',
      'string.empty': 'The tipoMaterial field cannot be empty.'
    }),
    cantidadMaterial: Joi.number().required().messages({
      'any.required': 'The cantidadMaterial field is required.',
      'number.base': 'The cantidadMaterial must be a number.'
    }),
    unidadMedida: Joi.string().required().messages({
      'any.required': 'The unidadMedida field is required.',
      'string.empty': 'The unidadMedida field cannot be empty.'
    }),
    cantidadRemitida: Joi.string().required().messages({
      'any.required': 'The cantidadRemitida field is required.',
      'number.base': 'The cantidadRemitida must be a number.'
    }),
    gramaje: Joi.number().required().messages({
      'any.required': 'The gramaje field is required.',
      'number.base': 'The gramaje must be a number.'
    }),
    proceso: Joi.string().required().messages({
      'any.required': 'The proceso field is required.',
      'string.empty': 'The proceso field cannot be empty.'
    })
  })
};