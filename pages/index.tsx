import {NextPageWithLayout} from './_app';
import {PageWrapper} from '../components/PageWrapper/PageWrapper';
import {Header} from '../components/Header/Header';
import {getLayout} from '../components/Layout/BaseLayout/BaseLayout';

const Home: NextPageWithLayout = () => (
  <PageWrapper>
  </PageWrapper>
);
Home.getLayout = getLayout;
export default Home;
