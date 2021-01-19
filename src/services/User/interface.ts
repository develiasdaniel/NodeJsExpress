
/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;
    
    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    addUser(user: any): Promise<any>;
    
    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    updateUser(user: any): Promise<any>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    deleteUser(userId: any): Promise<any>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findUserById(userId: any): Promise<any>;
}