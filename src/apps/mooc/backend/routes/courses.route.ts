import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import CoursesPutController from '../controllers/CoursesPutController';

export const register = (router: Router) => {
  const controller: CoursesPutController = container.get('Apps.mooc.controllers.CoursesPutController');
  router.get('/courses/:id', (req: Request, res: Response) => controller.run(req, res));
};
