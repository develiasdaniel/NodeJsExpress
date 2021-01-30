import { Router } from "express";
import { UserFacade } from "../facade";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/home/users
 * @swagger
 * /home/users/:
 *  post:
 *    description: sign up user to application
 *    tags: ["home"]
 *    requestBody:
 *      description: sign up body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserSchema'
 *          example:
 *            email: test.user@mail.com
 *            password: test_test
 *    responses:
 *      200:
 *        description: user successfuly signed in
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              logged: true
 *              message: Sign in successfull!!
 *      400:
 *        description: sign in failed
 *        content:
 *          application/json:
 *            example:
 *              status: 400
 *              logged: false
 *              message: Email already exists
 */
router.get("/users", UserFacade.findAll);

router.post("/users", UserFacade.addUser);

router.put("/users", UserFacade.updateUser);

router.delete("/users/:id", UserFacade.deleteUser);

router.get("/users/:id", UserFacade.findUserById);

/**
 * GET method route
 * @example http://localhost:PORT/home/ping
 * @swagger
 * /home/ping/:
 *  post:
 *    description: sign up user to application
 *    tags: ["home"]
 *    requestBody:
 *      description: sign up body
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserSchema'
 *          example:
 *            email: test.user@mail.com
 *            password: test_test
 *    responses:
 *      200:
 *        description: user successfuly signed in
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              logged: true
 *              message: Sign in successfull!!
 *      400:
 *        description: sign in failed
 *        content:
 *          application/json:
 *            example:
 *              status: 400
 *              logged: false
 *              message: Email already exists
 */
router.get("/ping", async (req, res) => {
  res.send("pong");
});

router.get("/test", async (req, res) => {
  const user = {
    id: 11,
    name: "Elias Daniel",
    lastname: "Sanchez Lopez"
  }
  res.send(user);
});

/**
 * @export {express.Router}
 */
export default router;
