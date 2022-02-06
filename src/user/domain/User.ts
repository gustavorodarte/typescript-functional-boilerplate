namespace User {
  type User = Readonly<{
    id: number;
    username: string;
    password: string;
    email: string;
  }>;

  type UserProps = Readonly<{
    id: number;
    username: string;
    password: string;
    email: string;
  }>;

  export const create = (props: UserProps): User => ({
    id: props.id,
    username: props.username,
    password: props.password,
    email: props.email,
  });

  export type Type = User;
}

export { User };
