import { Request, Response } from 'express';
import { GroupEntity, SubjectEntity } from '../domain';
import { Types } from 'mongoose';

class SubjectController {
  async create(req: Request, res: Response) {
    try {
      const params = req.body;
      const subject = await new SubjectEntity().setName(params.name).create();
      return res.status(200).json({
        data: subject.toSchema(),
      });
    } catch (error) {
      console.error(error);
    }
  }

  async findById(req: Request, res: Response) {
    console.log(req.params);
    try {
      const id = req.params.id; // Assuming the ID is a URL parameter
      const subject = await new SubjectEntity().setId(id as unknown as Types.ObjectId).syncById();

      if (!subject) {
        res.status(404).json({
          message: `Subject not found`,
        });
      } else {
        res.status(200).json(subject);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `Internal Server Error`,
      });
    }
  }

  async updateById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const name = req.body.name;
      // Create a SubjectEntity instance and set the _id and other properties as needed
      console.log(name, id);
      const subject = await new SubjectEntity().setId(new Types.ObjectId(id)).setName(name).update();
      console.log(subject);
      res.status(200).json({
        message: `successfully`,
        data: subject.toSchema(),
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: `Internal Server Error`,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const title = req.body.title;
      console.log(title, id);
      const subject = await new SubjectEntity().setId(new Types.ObjectId(id)).delete();
      if (!subject) {
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
}

export const subjectController = new SubjectController();
