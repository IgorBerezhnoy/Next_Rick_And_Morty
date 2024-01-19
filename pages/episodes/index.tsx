import {API} from '../../assets/api/api';
import {EpisodeType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Header} from '../../components/Header/Header';

export const getServerSideProps = async () => {
  const episodes = await API.rickAndMorty.getEpisodes();
  if (!episodes) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      episodes
    }
  };
};
const Episodes = ({episodes}: Props) => {

  return (
    <PageWrapper>
      <Header/>
      {episodes.results.map(el => (<div key={el.id}>
        <div>{el.name}</div>
      </div>))}
    </PageWrapper>
  );
};
export default Episodes;
type Props = {
  episodes: ResponseType<EpisodeType>
};