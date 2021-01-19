import User from "../../models/user.model";

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {
  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  findAll(): Promise<any[]>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  addUser(user: any): Promise<any[]>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  updateUser(user: any): Promise<any[]>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  deleteUser(userId: any): Promise<any[]>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  findUserById(userId: any): Promise<any[]>;
}
