import { getRepository } from 'typeorm';
import { User } from '../database/UserEntity';

const userRepository = ({ UserEntity }) => {
  const repository = getRepository<User>(UserEntity);

  return repository;
};

export { userRepository };
