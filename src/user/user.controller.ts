import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Req, Res, ParseIntPipe, HttpException, HttpStatus, Put, UseGuards, SetMetadata, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Validation } from '@nestjsx/crud/lib/crud';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { LoggerInterceptor } from 'src/looger.interceptor';
import { RolesGuard } from 'src/roles.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';


@Controller('user')
@UseInterceptors(new LoggerInterceptor())
export class UserController {
  CustomerService: any;
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(RolesGuard)
  @SetMetadata('roles','admin')
  gethello(){
    return this.userService.gethello();
  }


  @Get('/user')
  getUser(){
         return this.userService.findUserById(); 
  }

  // @Post('/file')
  // @UseInterceptors(
  //   FileInterceptor('file',{
  //   storage :diskStorage({
  //     destination:'./files',
  //     filename:(req,file,callback)=>{
  //       const uniqueName= 
  //       Date.now()+'-'+ Math.round(Math.random()+1e90);
  //       const ext=extname(file.originalname);
  //       const filename='$(file.originalname)+$(uniqueName)$(ext)';
  //       callback(null,filename);
  //     }
  //   }),
    
  // }))

  // fileuplode(@UploadedFile() file:Express.Multer.File){
  //      console.log('file',file);
  // }

  @Post('create')
  createUser(@Body() create: CreateUserDto ){
   return this.userService.createUser(create) ;     
  }
  
  @Put(':id')
  updateUserbyId(@Param('id',ParseIntPipe) id:number,@Body() update:CreateUserDto){
    return this.userService.updateUser(id,update);
  }
  @Delete(':id')
 DelUserbyId(@Param('id',ParseIntPipe) id:number){
    return this.userService.deletUser(id);
  }
//   @Patch('id')
//   async PatchUser(@Param('id',ParseIntPipe) id:number,@Body() updates:UpdateUserDto){
//     await  this.userService.patchUser(id,updates);
// }
}