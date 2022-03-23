import React from 'react';

type UserListItemPropsType = {
  name: string;
  age: string;
};

const UserListItem = ({ name, age }: UserListItemPropsType) => (
  <li>
    <h3>{name}</h3>
    <p>{`${age} - лет`}</p>
  </li>
);

export default UserListItem;
