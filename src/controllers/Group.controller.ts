import { Request, Response } from 'express';
import { GroupEntity } from '../domain';
import { Types } from 'mongoose';

class GroupController {
  async create(req: Request, res: Response) {
    try {
      const params = req.body;
      const group = await new GroupEntity().setTitle(params.title).setSubjectId(params.subjectId).create();
      res.status(200).json({
        message: 'group created successfully',
        data: group.toSchema(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const title = req.body.title;
      console.log(title, id);
      const group = await new GroupEntity().setId(new Types.ObjectId(id)).delete();
      if (!group) {
        res.status(404).json({
          message: `group not found`,
        });
      } else {
        res.status(200).json({
          message: `successfully deleted`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findBYId(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const group = await new GroupEntity().setId(id as unknown as Types.ObjectId).syncById();
      if (!group) {
        res.status(404).json({
          message: 'group not found',
        });
      } else {
        res.status(200).json(group);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const title = req.body.title;
      console.log(title, id);
      const group = await new GroupEntity().setId(new Types.ObjectId(id)).setTitle(title).update();
      if (!group) {
        res.status(404).json({
          message: `group not found`,
        });
      } else {
        res.status(200).json({
          message: `successfully`,
          data: group.toSchema(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

// @ts-ignore
export const groupController = new GroupController();
