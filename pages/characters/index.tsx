import {API} from '../../assets/api/api';
import {CharacterType, ResponseType} from '../../assets/api/rick-and-morty-api';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {CharacterCard} from '../../components/Card/CharacterCard/CharacterCard';
import {getLayout} from '../../components/Layout/BaseLayout/BaseLayout';

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
      {characters.results.map(el => <CharacterCard character={el} key={el.id}/>)}
    </PageWrapper>
  );
};

Characters.getLayout = getLayout;


export default Characters;
type Props = {
  characters: ResponseType<CharacterType>
};