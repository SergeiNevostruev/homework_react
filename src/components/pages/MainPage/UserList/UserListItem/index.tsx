import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type UserListItemPropsType = {
  name: string;
  age: string;
};

const UserListItem = ({ name, age }: UserListItemPropsType) => {
  useEffect(() => console.log('USER_LIST_ITEM - MOUNT'), []);
  return (
    <li>
      <Link to={name}>
        <h3>{name}</h3>
        <p>{`${age} - лет`}</p>
      </Link>
    </li>
  );
};

export default UserListItem;
