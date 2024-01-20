import {NextPage} from 'next';
import {PropsWithChildren} from 'react';
import {Header} from '../Header/Header';
import s from './Layout.module.css';

export const Layout: NextPage<PropsWithChildren> = ({children}) => {
  return (
    <div className={s.container}>
      <Header/>
      <div className={s.main}>{children}</div>
    </div>
  );
};