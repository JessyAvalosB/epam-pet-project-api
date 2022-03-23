import { BaseError } from "./BaseError";
import { HttpStatusCode } from "../interfaces/HttpStatusCode";

export class APIError extends BaseError {
    constructor(name: string, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = "Internal Server Error") {
        super(name, httpCode, isOperational, description);
    }
}