import type { JwtPayload } from "jsonwebtoken"

export interface extendedJwtPayload extends JwtPayload {
  id: number
}
export interface UserType {
  id: number,
  username: string,
  password_hash: string,
}

export type NewUser = Omit<UserType, 'id'>