
export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  codmsg: number;
  message?: string;
  token?: string;
}

export interface StoredProcedureResult {
  codmsg: number;
  message: string;
}