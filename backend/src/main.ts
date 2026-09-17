import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");
  app.enableShutdownHooks();

  await app.listen(Number(process.env.PORT ?? 3000));
};

bootstrap().catch((error: unknown) => {
  console.error("Не удалось запустить сервер:", error);
  process.exitCode = 1;
});