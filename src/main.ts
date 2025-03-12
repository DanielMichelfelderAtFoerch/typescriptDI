import 'reflect-metadata';
import Container from 'typedi';
import { HomeController } from "./pages/home/home.controller";
import { PermissionNewService } from './framework/permission/permission-new.service';
import { PERMISSON_TOKEN } from './framework/permission/permission-token';
import { IPermissionService } from './framework/permission/permission-service.interface';
import { PermissionOldService } from './framework/permission/permission-old.service';




// Container.set({ id: PERMISSON_TOKEN, type: PermissionNewService });

function resolveIPermissionService(): IPermissionService {

  const result = 5;

  if (result === 5) {
    return Container.get(PermissionNewService);
  }
  else {
    return Container.get(PermissionOldService);
  }
}


Container.set({
  id: PERMISSON_TOKEN,
  factory: resolveIPermissionService,
});

const homeController = Container.get(HomeController);

document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapAsync();
});

async function bootstrapAsync(): Promise<void> {
  console.log('Bootstrapping the application.');
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = await homeController.toHtmlAsync();
}
