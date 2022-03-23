import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import { data } from '../../../helpers';
import UserList from './UserList';

const MainPage = () => (
  <PageWrapper>
    <h1>User List</h1>
    <UserList data={data} />
  </PageWrapper>
);

export default MainPage;
