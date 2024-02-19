import Router from "express";
import { loginUser, registerUser, testingController } from "../controllers/user.controller.js";

const router = Router();

router.route('/').get(testingController);
router.route('/register').post(registerUser)
router.route('/login').post(loginUser);

export default router;