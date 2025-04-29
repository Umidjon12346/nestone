import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from "supertest";
import { log } from "console";

describe("User e2e", () => {
  let app: INestApplication;
  let token: String;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth/signin")
      .send({
        email: "umidsd@gamil.com",
        password: "aghfdcgcj",
        value: "admin",
      });
    token = response.body.token
  });
  it("/users (GET) --> 200 OK",()=>{
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  })
  it("/users (GET) --> 401 'Unauthorized' error", () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(401);
  });

//   it("/auth/signup (POST) --> 201",async ()=>{
//     return request(app.getHttpServer())
//       .post("/auth/signup")
//       .send({
//         name: "hjkl;fad",
//         email: "umidafhgjfhgd@gamil.com",
//         password: "aghfdcgcj",
//         value: "admin",
//       })
//       .expect("Content-Type", /json/)
//       .expect(201)
//   })



  afterAll(async ()=>{
    await app.close()
  })
});
