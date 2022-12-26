import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean{
    const user={
      name:"zain",
      roles:["standard-user"],
    };
    const roles=this.reflector.get<string>('roles',context.getHandler())
    console.log(roles)
    const reqiredrole='admin';
    if(!user.roles.includes(reqiredrole)){
      return false;
    }
   
  }
}
