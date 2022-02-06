import { getRepository } from 'typeorm';
import { User } from '@/user/domain/User';

const userRepository = ({ UserEntity }) => {
  const repository = getRepository<User.Type>(UserEntity);

  return repository;
};

export { userRepository };
