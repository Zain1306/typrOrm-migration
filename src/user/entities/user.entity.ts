import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')

export class User extends BaseEntity
{
  @PrimaryGeneratedColumn({
    comment:'The user indentity',
  })
  id:number;

  @Column({
    type:"varchar",
    nullable: false
  })
  name:string;

  @Column({
    type:'text'
  })
  description:string;

  @Column({
    type:'boolean',
    default:1,
  })
  isActive:boolean;
}