import UserService from "./service";

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
  return await UserService.findAll();
}

export async function addUser(user: any): Promise<any[]> {
  return await UserService.addUser(user);
}

export async function updateUser(user: any): Promise<any[]> {
  return await UserService.updateUser(user);
}

export async function deleteUser(userId: any): Promise<any[]> {
  return await UserService.deleteUser(userId);
}

export async function findUserById(userId: any): Promise<any[]> {
  return await UserService.findUserById(userId);
}
