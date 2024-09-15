import { connect } from "@/setups";
import { UserModel } from "@/models";
import { UserCreationAttribute } from "@/models";

export class UserRepository {
  async findOneUser(id: number) {
    // const user = await connect().sequelize.getRepository(UserModel).findOne({ where: { id } });
    const user = await UserModel.findOne({ where: { id } });

    return user;
  }

  async findAllUser() {
    const allUser = await connect().sequelize.getRepository(UserModel).findAll();

    return allUser;
  }

  async createUser(user: UserCreationAttribute) {
    const createdUser = await connect().sequelize.getRepository(UserModel).create(user);

    return createdUser;
  }
}