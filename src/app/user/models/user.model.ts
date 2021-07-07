export interface User {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    picture?: string;
    location?: string;
    bio?: string;
    registrationDate?: Date;
    isActive?: boolean;
    roleId?: number;
    token?: string;
}