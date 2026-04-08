import { IsNotEmpty, MinLength} from 'class-validator'

export class UserDto {
    @MinLength(7, {message: 'Full name is must be equal or longer than 7'})
    fullName?: string;

    @IsNotEmpty({message: "Gender shouln't be emptied"}) 
    gender?: string;

    @IsNotEmpty({message: "Birthday shouln't be emptied"})
    birthday?: string;

}