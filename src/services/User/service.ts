import { IUserService } from "./interface";
import User from "../../models/user.model";
import { addUser } from "../../facade/User";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async findAll(): Promise<any[]> {
    console.log(User.findAll);

    return User.findAll();
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async addUser(user: any): Promise<any> {
    return User.create(user);
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async updateUser(user: any): Promise<any[]> {
    const updatedUser = User.update(
      { name: user.name },
      { where: { id: user.id }, returning: true }
    );

    return updatedUser;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async deleteUser(userId: any): Promise<any> {
    const deletedUser = User.destroy({
      where: {
        id: userId,
      },
    });
    return deletedUser;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async findUserById(userId: any): Promise<any> {
    const user = User.findByPk(userId);
    return user;
  },
};

export default UserService;
