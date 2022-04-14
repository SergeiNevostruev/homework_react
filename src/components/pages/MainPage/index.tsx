import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import { data } from '../../../helpers';
import { useDispatch } from 'react-redux';
import UserList from './UserList';
import Button from '../../common/Button';
import { GetUsersAction } from '../../../store/users/actions';

type MainPagePropsType = {
  userData: {
    info: any;
    results: any[];
  };
};

const MainPage = ({ userData }: MainPagePropsType) => {
  useEffect(() => console.log('MAIN_PAGE - MOUNT'), []);

  // const { state } = useLocation() as { state: { isOpen: boolean } };
  const location: any = useLocation();

  const [listVisible, setListVisible] = useState(false);

  const [page, setPage] = useState(1);
  const previous = () => {
    setPage((v) => {
      if (v <= 1) {
        return 1;
      }
      return v - 1;
    });
  };
  const next = () => {
    setPage((v) => (v >= userData.info.pages ? v : v + 1));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUsersAction(page));
    console.log(page);
  }, [page]);

  const handler = () => {
    setListVisible((prev) => !prev);
  };

  useEffect(() => {
    if (location?.state?.isOpen) {
      setListVisible(true);
    }
  }, [location?.state?.isOpen]);

  return (
    <>
      <h1>User List</h1>
      <div>
        <h2>{`Page ${page} of ${userData.info.pages}`}</h2>
      </div>
      <div>
        <button type="button" onClick={previous}>
          {'<Previous page'}
        </button>
        <button type="button" onClick={next}>
          {'Next page>'}
        </button>
      </div>

      {userData.results.length ? (
        <>
          {listVisible ? <UserList data={userData.results} /> : <h2>Список скрыт</h2>}
          {/* {listVisible && <UserList data={data} />} */}
          <Button title={listVisible ? 'Скрыть список' : 'Показать список'} onClick={handler} />
        </>
      ) : (
        <h1>LOADING</h1>
      )}
    </>
  );
};
export default MainPage;
