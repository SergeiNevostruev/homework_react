import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

type UserListItemPropsType = {
  id: number;
  name: string;
};

const UserListItem = ({ id, name }: UserListItemPropsType) => {
  useEffect(() => console.log('USER_LIST_ITEM - MOUNT'), []);
  return (
    <li>
      <Link to={`${id}`}>
        <h3>{name}</h3>
      </Link>
    </li>
  );
};

export default UserListItem;
