import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { userInfo } from 'os';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor (private service:UsersService){

    }

@Get()
getAllUsers(){
    return this.service.getAllUsers();
}

@Get(":id")
getUser(@Param() params){
    return this.service.getUser(params.id);
}

@Post()
addUser(@Body() user: UserEntity){
    return this.service.createUser(user);
}

@Put()
updateUser(@Body() user:UserEntity){
    this.service.updateUser(user);
}

@Delete(":id")
deleteUser(@Param() params){
    this.service.deleteUser(params.id);
}



//@Patch(atributo:string){
//    return "Update Attribute";
//}


}
