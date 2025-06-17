import { Request, Response, NextFunction } from 'express';
import { AuthRequest } from '../interfaces/auth.interface';
import { CodesHttpEnum } from '../enums/codesHttpsEnums';
import { HttpResponse } from '../utils/httpresponse.utils';

export const validateAuthInput = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as AuthRequest;

  if (!username || !password) {
    return HttpResponse.fail(res,CodesHttpEnum.forbidden,null, 'Username and password are required');
    
  }

  if (typeof username !== 'string' || typeof password !== 'string') {
    return HttpResponse.fail(res,CodesHttpEnum.forbidden,null, 'Username and password must be strings');
  }

  if (username.length > 20) {
    return HttpResponse.fail(res,CodesHttpEnum.forbidden,null, 'Username must be 20 characters or less');
  }

  if (password.length > 40) {
    return HttpResponse.fail(res,CodesHttpEnum.forbidden,null, 'Password must be 40 characters or less');
  }

  next();
};