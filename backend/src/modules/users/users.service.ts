import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { UserDto } from "src/dto/user.dto";
import { User } from "src/models/user.model";

@Injectable()
export class UsersService {

    constructor(
        @Inject('USER_MODEL') 
        
        private userModel: Model<User>,
    ){}

    getUsers(limit: number, skip: number):Promise<User[]> {
        return this.userModel.find().skip(skip).limit(limit).exec()
    }

    getUsersById(id: string) {
        return this.userModel.findOne({_id: `${id}`})
    }

    createUser(userDto: UserDto):Promise<User> {
        const createUser = new this.userModel(userDto);
        return createUser.save()
    }

    updateUser(id: string, userDto:UserDto) {
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true, overwrite: true}).exec()
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id)
    }
}