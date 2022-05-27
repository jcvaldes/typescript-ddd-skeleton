import { Request, Response } from 'express';
import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';
import { Controller } from './Controller';
import httpStatus from 'http-status';
export default class CoursesPutController implements Controller {
  constructor(private courseCreator: CourseCreator) {}

  async run(req: Request, res: Response) {
    const { id, name, duration } = req.body;

    await this.courseCreator.run(id, name, duration);

    res.status(httpStatus.CREATED).send();
  }
}
