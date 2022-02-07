import { UserRepository } from '@/user/infra/repository/userRepository';
import { User } from '@/user/domain/User';

type Dependencies = {
  userRepository: UserRepository;
};

type CreateUserDTO = {
  id: number;
  username: string;
  password: string;
  email: string;
};

// type CreateUser = Function<CreateUserDTO, Promise<User.Type>>;

const makeCreateUser =
  ({ userRepository }: Dependencies) =>
  async (userData: CreateUserDTO): Promise<User.Type> => {
    const newUser = User.create(userData);
    const result = await userRepository.create(newUser);
    return result;
  };

export { makeCreateUser };