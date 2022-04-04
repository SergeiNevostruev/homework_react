import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import AuthContainer from './containers/AuthContainer';
import PageWrapper from './components/common/PageWrapper';
import OneUserContainer from './containers/OneUserContainer';
import MyPageContainer from './containers/MyPageContainer';
import RequireAuth from './components/hoc/RequireAuth';
import { AuthProvider } from './components/hoc/AuthProvider';

const Page = () => (
  <RequireAuth>
    <MyPageContainer />
  </RequireAuth>
);

const App = () => {
  console.log('APP => start');

  useEffect(() => console.log('APP - MOUNT'), []);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          {/* //реализация вложенного роута в пайдж врапере прописывается ооуфлет,
        компонент в верхнем роуте оборачивает все вложенные роуты, чтобы не писать везде */}
          <Route index element={<h1>Main Page</h1>} />
          <Route path="users" element={<MainContainer />} />
          <Route path="users/:name" element={<OneUserContainer />} />
          <Route path="auth" element={<AuthContainer />} />
          <Route path="mypage" element={<Page />} />
          <Route path="reg" element={<RegistrationContainer />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
