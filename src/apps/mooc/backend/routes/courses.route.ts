import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import CoursePutController from '../controllers/CoursePutController';

export const register = (router: Router) => {
  const controller: CoursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.get('/courses/:id', (req: Request, res: Response) => controller.run(req, res));
};
