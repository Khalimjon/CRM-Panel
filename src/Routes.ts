import { Router } from 'express';
import { groupController, subjectController, userController } from './controllers';

function prefix(path: string, configure: Router): void {
  const router = Router({ mergeParams: true });
  this.use(path, router);
  // @ts-ignore
  configure(router);
}

Router['prefix'] = prefix;
const routes = Router({ mergeParams: true });

// @ts-ignore
routes.prefix('/user', (user) => {
  user.post('', userController.register);
  user.post('/login', userController.login);
});

//
// @ts-ignore
routes.prefix('/subject', (subject) => {
  subject.post('', subjectController.create);
  subject.get('/:id', subjectController.findById);
  subject.put('/:id', subjectController.updateById);
  subject.delete('/:id', subjectController.delete);
});

// @ts-ignore
routes.prefix('/group', (group) => {
  group.post('', groupController.create);
  group.get('/:id', groupController.findBYId);
  group.put('/:id', groupController.update);
  group.delete('/:id', groupController.delete);
});

export default routes;
