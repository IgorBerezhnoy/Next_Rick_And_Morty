import {EpisodeType, LocationType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Header} from '../../components/Header/Header';
import {dehydrate, QueryClient, useQuery} from '@tanstack/react-query';
import {API} from '../../assets/api/api';
import {Card} from '../../components/Card/Card';
//
// export const getServerSideProps = async () => {
//   const episodes = await API.rickAndMorty.getEpisodes();
// };

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(['locations'], getLocations);
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
const getLocations = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/location', {
    method: 'GET'
  });
  return await res.json();
};

const Episodes = () => {
  const {data: locations} = useQuery<ResponseType<LocationType>>(['locations'], getLocations);
  return (
    <PageWrapper>
      <Header/>
      {locations && locations.results.map(el => (<Card key={el.id} name={el.name}/>))}
    </PageWrapper>
  );
};
export default Episodes;
type Props = {
  episodes: ResponseType<EpisodeType>
};