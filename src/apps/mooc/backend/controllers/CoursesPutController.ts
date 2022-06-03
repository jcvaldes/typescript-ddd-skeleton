import { Request, Response } from 'express';
import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';
import { Controller } from './Controller';
import httpStatus from 'http-status';

type CoursePutRequest = Request & {
  body: {
    id: string;
    name: string;
    duration: string;
  };
};

export default class CoursesPutController implements Controller {
  constructor(private courseCreator: CourseCreator) {}

  async run(req: CoursePutRequest, res: Response): Promise<void> {
    const { id, name, duration } = req.body;

    await this.courseCreator.run({ id, name, duration });

    res.status(httpStatus.CREATED).send();
  }
}
