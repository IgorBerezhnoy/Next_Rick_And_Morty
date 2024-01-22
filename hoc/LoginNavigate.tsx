import {useRouter} from 'next/router';
import React, {PropsWithChildren} from 'react';

export const LoginNavigate: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const router = useRouter();

  const isAuth = true;
  if (!isAuth) router.push('/test');

  return <>{children}</>;
};