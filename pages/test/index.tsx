import {PageWrapper} from 'components/PageWrapper/PageWrapper';
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout';
import * as path from 'path';
import fs from 'fs/promises';

export const getStaticProps = async () => {
  const getParsedData = async (): Promise<{ title: string }> => {
    const filePath = path.join(process.cwd(), 'public', 'staticData.json');

    try {
      const jsonData = await fs.readFile(filePath);
      return JSON.parse(jsonData.toString());
    } catch (err) {
      return {title: 'error title'};
    }
  };
  const {title} = await getParsedData();
  return {
    props: {
      title
    },
  };
};


const Test = ({title}: PropsType) => {
  return (
    <PageWrapper>
      test={title}
    </PageWrapper>
  );
};

Test.getLayout = getLayout;
export default Test;


type PropsType = {
  title: string
}