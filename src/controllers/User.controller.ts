import { Request, Response } from 'express';
import { UserEntity } from '../domain';
import { PasswordService } from '../services/Password.service';
import { compare } from 'bcrypt';
import { TokenService } from '../services/Token.service';

class UserController {
  async register(req: Request, res: Response) {
    try {
      console.log('Request params: ', req.body);
      const params = req.body;

      const hashedPassword = new PasswordService().setPassword(params.password).hash();
      const user: UserEntity = await new UserEntity()
        .setFirsName(params.firstName)
        .setLastName(params.lastName)
        .setPhone(params.phone)
        .setPassword(hashedPassword)
        .setRole(params.role)
        .create();

      console.log('User entity: ', user);
      res.status(201).json(user.toSchema());
    } catch (error) {
      console.log('Create user entity error: ', error);
      console.error(error);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const params = req.body;
      const user = await new UserEntity().setPhone(params.phone).syncByPhone();

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      const isValidPassword = new PasswordService().setPassword(params.password).setHash(user.getPassword()).compare();
      if (!isValidPassword) {
        return res.status(400).json({
          message: 'Invalid password',
        });
      }
      // TODO send json web token

      const accessToken = new TokenService()
        .setPayload({
          userId: user.getId(),
          firstName: user.getFirstName(),
          lastName: user.getLastName(),
          phone: user.getPhone(),
          role: user.getRole(),
        })
        .sign();

      return res.status(200).json({
        accessToken: accessToken,
        user: user.toSchema(),
      });
    } catch (error) {
      console.log(`${error}`);
    }
  }
}

export const userController = new UserController();
