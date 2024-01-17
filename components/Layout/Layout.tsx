import React, {ReactElement, ReactNode} from 'react';
import Navbar from './../Navbar/Navbar';
import s from '../../styles/Home.module.css';

export const Layout = ({children}: { children: ReactNode }) => {
  return (
    <main className={s.main}>
      <Navbar/>
      {children}
    </main>
  );
};
export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};