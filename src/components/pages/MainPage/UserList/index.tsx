import React from 'react';
import UserListItem from './UserListItem';

type UserListPropsType = {
  data: { id: number; name: string; age: string }[];
};
const UserList = ({ data }: UserListPropsType) => (
  <ul>
    {data.map((el) => (
      <UserListItem key={el.id} name={el.name} age={el.age} />
    ))}
  </ul>
);

export default UserList;
