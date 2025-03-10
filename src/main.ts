import { HomeController } from "./pages/home/home.controller";

// const permissionLocalStorageRepository = new PermissionLocalStorageRepository();
// const permissionService = new PermissionService(permissionLocalStorageRepository);
// const homeDataService = new HomeDataService();
// const userService = new UserService();

// const loggingConfigurationService = new LoggingConfigurationService();
// const loggingService = new LoggingService(loggingConfigurationService)
// const homeService = new HomePageService(loggingService, userService, homeDataService, permissionService);

const homeController = new HomeController(homeService);


document.addEventListener('DOMContentLoaded', async () => {
  await bootstrapAsync();
});

async function bootstrapAsync(): Promise<void> {
  console.log('Bootstrapping the application.');
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = await homeController.toHtmlAsync();
}
