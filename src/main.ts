import 'reflect-metadata';
import Container from 'typedi';
import { HomeController } from "./pages/home/home.controller";

// import { LoggingConfigurationService } from "./framework/logging-configuration.service";
// import { LoggingService } from "./framework/logging.service";

// import { DecoratorExample2EasyWithParams, DecoratorExample2ReadParams } from "./docorators/decorator-example2-read-params";

// const permissionLocalStorageRepository = new PermissionLocalStorageRepository();
// const permissionService = new PermissionService(permissionLocalStorageRepository);
// const homeDataService = new HomeDataService();
// const userService = new UserService();

// const loggingConfigurationService = new LoggingConfigurationService();
// const loggingService = new LoggingService(loggingConfigurationService)
// const homeService = new HomePageService(loggingService, userService, homeDataService, permissionService);

// const homeController = new HomeController(homeService);

const homeController = Container.get(HomeController);

document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapAsync();
});

async function bootstrapAsync(): Promise<void> {
  console.log('Bootstrapping the application.');
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = await homeController.toHtmlAsync();
}
