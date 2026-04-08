import { Module } from "@nestjs/common";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { usersProviders } from "./users.providers";
import { DatabaseModule } from "src/data/data.module";




@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        UsersService,
        ...usersProviders
    ]
})

export class UsersModule {}