import { UserDetails } from "src/app/pages/auth/model/user.model";


export class Response<T> {
    data: T;
    userDetails: UserDetails;
    errors: string[];
}