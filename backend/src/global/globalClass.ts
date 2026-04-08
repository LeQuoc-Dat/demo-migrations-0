export class ResponseData<Data> {
    data: Data | Data [];
    statusCode: number;
    message: string

    constructor(data: Data | Data[], statusCode: number, message: string) {
        this.data = data;
        this.statusCode = statusCode;
        this.message = message

        return this
    }
}