export interface JwtPayload {
    sub: number;
    username: string;
    roles: string[];
    roleIds: number[];
    iat?: number;
    exp?: number;
}
export declare enum UserRole {
    ADMIN = 1,
    USER = 2,
    GUEST = 3
}
