import { Table, Column, Model } from "sequelize-typescript";

export type UserAttribute = {
  id: number;
  name: string;
  email: string;
  password: string;
  userGroup?: string;
}

export type UserCreationAttribute = Omit<UserAttribute, "id" | "userGroup">;

@Table({tableName:'user'})
export class UserModel extends Model<UserAttribute, UserCreationAttribute> {
  
  @Column
  name!: string

  @Column
  email!: string

  @Column
  password!: string

  @Column
  userGroup?: string
}