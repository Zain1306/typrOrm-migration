import { Injectable,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
  private readonly userRepositary: Repository<User>){

  }
   
  gethello(){
    return 'hello word';
  }
  
  findUserById(){
   return  this.userRepositary.find();
  }
  
  createUser(cretuse :CreateUserDto)
  {
    return this.userRepositary.save(cretuse);
  }

    updateUser(id:number,updateuser:CreateUserDto)
    {
      return this.userRepositary.update({id},{...updateuser});
    }

    deletUser(id:number){
      return this.userRepositary.delete({id});
    }

    patchUser(id:number,updateuser:UpdateUserDto){
      return this.userRepositary.update({id},{...updateuser});
    }

}
