export class User {
    _id?: string;
    fullName?: string;
    gender?: string;
    bir

    constructor({id, fullName, gender}) {
        if (id !== null) this._id =id;
        if (fullName !== null) this.fullName = fullName
        if (gender !== null) this.gender = gender
    }
}