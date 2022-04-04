import React, { useEffect } from 'react';
import MyPage from '../../components/pages/MyPage';

const MyPageContainer = () => {
  useEffect(() => console.log('MAIN_CONTAINER - MOUNT'), []);
  return <MyPage />;
};

export default MyPageContainer;
