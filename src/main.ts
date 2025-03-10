import { HomeController } from "./pages/home/home.controller";

const homeController = new HomeController();


document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOM loaded.');
  await bootstrapAsync();
});

async function bootstrapAsync(): Promise<void> {
  console.log('Bootstrapping the application.');
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = await homeController.toHtmlAsync();
}
