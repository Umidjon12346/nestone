import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3030;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("Nest-One project")
      .setDescription("NEST-ONE REST API")
      .setVersion("1.0")
      .addTag("Nestjs", "Validation")
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, document);
    await app.listen(PORT, () => {
      console.log(`sercewgffdsf ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
