export interface JwtPayload {
    sub: number;
    username: string;
    role?: UserRole;
    iat?: number;
    exp?: number;
}
export declare enum UserRole {
    ADMIN = 1,
    USER = 2,
    GUEST = 3
}
