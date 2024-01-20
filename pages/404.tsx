import {PageWrapper} from '../components/PageWrapper/PageWrapper';
import {getLayout} from '../components/Layout/BaseLayout/BaseLayout';
import Character from './characters/[id]';

const NotFound = () => {
  return <PageWrapper> 404 Not Found</PageWrapper>;
};
NotFound.getLayout = getLayout;
export default NotFound;