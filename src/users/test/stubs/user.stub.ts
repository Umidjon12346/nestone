import { User } from "../../models/user.model";

export const userStub = (): Partial<User> => {
  return {
    id: 1,
    name: "sadasd",
    email: "emailq",
    password: "12345",
  };
};
