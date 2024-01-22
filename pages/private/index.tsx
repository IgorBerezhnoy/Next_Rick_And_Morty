import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';
import {LoginNavigate} from '../../hoc/LoginNavigate';

const Private = () => {
  return (
    <LoginNavigate>
      Private
    </LoginNavigate>
  );
};
Private.getLayout = getLayout;
export default Private;