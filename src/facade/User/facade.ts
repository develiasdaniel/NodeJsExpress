import { use } from "chai";
import { findUserById } from ".";
import User from "../../models/user.model";
import { UserService } from "../../services";
import { IUserFacade } from "./interface";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let users = await UserService.findAll();
        return users;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async addUser(user: any): Promise<any[]> {        
        let users = await UserService.addUser(user);
        return users;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async updateUser(user: any): Promise<any[]> {        
        let users = await UserService.updateUser(user);
        return users;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async deleteUser(userId: any): Promise<any[]> {        
        let users = await UserService.deleteUser(userId);
        return users;
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findUserById(userId: any): Promise<any[]> {        
        let users = await UserService.findUserById(userId);
        return users;
    },
}

export default UserFacade;