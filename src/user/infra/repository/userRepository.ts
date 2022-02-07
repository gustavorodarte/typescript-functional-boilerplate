import { getRepository, Repository } from 'typeorm';
import { User } from '@/user/domain/User';
import { UserEntity } from '@/user/infra/database/UserEntity';

type Dependencies = {
  userEntity: UserEntity;
};

const makeUserRepository = ({ userEntity }: Dependencies): Repository<User.Type> => {
  const repository = getRepository<User.Type>(userEntity);
  return repository;
};

export type UserRepository = Repository<User.Type>;
export { makeUserRepository };
