import { UsersService } from "../users.service";
import { UsersController } from "../users.controller";
import { Test } from "@nestjs/testing";
import { JwtService } from "@nestjs/jwt";
import { User } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";

jest.mock("../users.service");

describe("Users controller test", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();

    usersController = modulRef.get<UsersController>(UsersController);
    usersService = modulRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it("User controller should be defined", () => {
    expect(usersController).toBeDefined();
  });
  test("USer service ", () => {
    expect(usersService).toBeDefined();
  });

  describe("Create user test", () => {
    describe("when create user called", () => {
      let user: User;
      let createUserDto: CreateUserDto;

      beforeAll(async () => {
        createUserDto = {
          name: userStub().name!,
          email: userStub().email!,
          password: userStub().password!,
          value: "user",
        };
        user = await usersController.create(createUserDto);
      });

      it("then it should call userService", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });

      it("then it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("Get all user", () => {
    describe("when findAll called", () => {
      let users: User[];

      beforeAll(async () => {
        users = await usersController.findAll();
      });
      it("then it should call USerService", () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });
      it("then it should return user array", () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe("Get One user", () => {
    describe("when findOne colled", () => {
      let user: User | null;
      let id: number;

      beforeAll(async () => {
        id = userStub().id as number;
        user = await usersController.findOne(String(id));
      });
      it("then it should call userService", () => {
        expect(usersService.findOne).toHaveBeenCalledWith(id);
      });
      it("then it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("Remove user", () => {
    describe("when remove colled", () => {
      let result:Object

      beforeAll(async () => {
        result = await usersController.remove(String(userStub().id));
      });
      it("then it should call userService", () => {
        expect(usersService.remove).toHaveBeenCalledWith(userStub().id);
      });
      it("then it should return user", () => {
        expect(result).toEqual({ message: "tuiopsuadoaihfjadhfsafasuf" });
      });
    });
  });
});
