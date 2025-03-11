// import { HomeController } from "./pages/home/home.controller";

import { DecoratorExample2ReadParams } from "./docorators/decorator-example2-read-params";
import { LoggingConfigurationService } from "./framework/logging-configuration.service";
import { LoggingService } from "./framework/logging.service";

// import { DecoratorExample2EasyWithParams, DecoratorExample2ReadParams } from "./docorators/decorator-example2-read-params";

// const permissionLocalStorageRepository = new PermissionLocalStorageRepository();
// const permissionService = new PermissionService(permissionLocalStorageRepository);
// const homeDataService = new HomeDataService();
// const userService = new UserService();

const loggingConfigurationService = new LoggingConfigurationService();
const loggingService = new LoggingService(loggingConfigurationService)
// const homeService = new HomePageService(loggingService, userService, homeDataService, permissionService);

// const homeController = new HomeController(homeService);



document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapAsync();
});

async function bootstrapAsync(): Promise<void> {
  console.log('Bootstrapping the application.');
  // const body = document.getElementsByTagName('body')[0];
  //body.innerHTML = await homeController.toHtmlAsync();


  // const decoratorsExample2Easy2 = new DecoratorExample2EasyWithParams('http://api.example.com', 1000);
  // console.log(decoratorsExample2Easy2.apiUrl);

  // const decoratorExample2ReadParams = new DecoratorExample2WithContext(1, "max mustermann", loggingService);
  // console.log("Name:", decoratorExample2ReadParams.getName());

  const decoratorExampleReadingParams = new DecoratorExample2ReadParams(1, "max mustermann", loggingService);
  console.log("Name:", decoratorExampleReadingParams.getName());
}
