import { EntitySchema } from 'typeorm';

interface User {
  id: number;
  name: string;
}

const UserEntity = () => new EntitySchema({
  name: 'category',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
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

export { UserEntity };
export type { User };
