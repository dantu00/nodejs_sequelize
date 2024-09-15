import { UserAttribute, UserCreationAttribute } from "@/models";
import { UserRepository } from "@/repository";

export class UserService {
  private userRepository: any = {};

  constructor() {
    this.userRepository = new UserRepository();
  }

  async readUser(id: string) {
    return await this.userRepository.findOneUser(id);
  }

  async readUsers() {
    const allUsers = await this.userRepository.findAllUser();

    return allUsers;
  }

  async createUser(user: UserCreationAttribute) {
    const createdUser = await this.userRepository.createUser(user);

    return createdUser;
  }

  async updateUser(user: UserAttribute) {
    return user.id;
  }

  async deleteUser(id: string) {
    return id;
  }
}
