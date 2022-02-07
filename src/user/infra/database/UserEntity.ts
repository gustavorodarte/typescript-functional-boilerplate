import { EntitySchema } from 'typeorm';
import { User } from '@/user/domain/User';

type UserEntity = EntitySchema<User.Type>

const makeUserEntity = () =>
  new EntitySchema<User.Type>({
    name: 'user',
    columns: {
      id: {
        type: Number,
        primary: true,
      },
      username: {
        type: String,
      },
      password: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  });

  
export { makeUserEntity };
export type { UserEntity };
