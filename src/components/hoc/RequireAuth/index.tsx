import { useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import GetUserName from '../../../store/user/selector';

// type Prop = {
//   children: React.ReactNode | ReactChild;
// };
import { UserInfoReduserType } from '../../../store/user/types';
import { RegReduserType } from '../../../store/regstore/types';

type StoreStateType = {
  userInfoReducer: UserInfoReduserType;
  userRegReducer: RegReduserType;
};

const RequireAuth: React.FC = ({ children }) => {
  const name = useSelector((state: StoreStateType) => state.userInfoReducer.name);
  const location = useLocation();
  // const auth = true;

  if (!name) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default RequireAuth;
