import {API} from '../../assets/api/api';
import {CharacterType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {Header} from '../../components/Header/Header';

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters();
  return {
    props: {
      characters
    }
  };
};
const Characters = ({characters}: Props) => {

  return (
    <PageWrapper>
      <Header/>
      {characters.results.map(el => (<div key={el.id}>
        <div>{el.name}</div>
      </div>))}
    </PageWrapper>
  );
};
export default Characters;
type Props = {
  characters: ResponseType<CharacterType>
};