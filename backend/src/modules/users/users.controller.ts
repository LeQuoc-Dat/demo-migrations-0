import { Body, Controller, Delete, Get, Param, Query, Post, Put, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalNum";
import { User } from "src/models/user.model";
import { UserDto } from "src/dto/user.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getUsers(
        @Query('limit') limit: number = 30,
        @Query('skip') skip: number = 0
    ): Promise <ResponseData<User>> {
        try {
            return new ResponseData<User>(await this.usersService.getUsers(limit, skip),HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch(error) {
            return new ResponseData<User>(null,HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Get('/:id')
    async getUserById(@Param('id') id: string): Promise <ResponseData<User>> {
        try {
            return new ResponseData<User>(await this.usersService.getUsersById(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch(error) {
            return new ResponseData<User>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Post()
    async createUser(@Body(new ValidationPipe) userDto: UserDto): Promise <ResponseData<UserDto>> {
        try {
            return new ResponseData<UserDto>( await this.usersService.createUser(userDto),HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch(error) {
            return new ResponseData<UserDto>(null,HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string ,@Body(new ValidationPipe) userDto: UserDto):Promise <ResponseData<User>> {
        try {
            return new ResponseData<User>(await this.usersService.updateUser(id, userDto),HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch(error) {
            return new ResponseData<User>(null,HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string):Promise <ResponseData<User>> {
        try {
            return new ResponseData<User>(await this.usersService.deleteUser(id),HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch(error) {
            return new ResponseData<User>(null,HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

}