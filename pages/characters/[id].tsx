import {API} from 'assets/api/api';
import {CharacterType} from 'assets/api/rick-and-morty-api';
import {PageWrapper} from 'components/PageWrapper/PageWrapper';
import {CharacterCard} from 'components/Card/CharacterCard/CharacterCard';
import {getLayout} from 'components/Layout/BaseLayout/BaseLayout';
import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import styled from 'styled-components';

export const getStaticPaths: GetStaticPaths = async () => {
  const {results} = await API.rickAndMorty.getCharacters();
  const paths = results.map(el => ({
    params: {id: String(el.id)}
  }));
  return {
    paths, fallback: 'blocking'
  };
};
export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params || {};
  const character = await API.rickAndMorty.getCharacter(id as string);
  if (!character) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      character
    }
  };
};
const Character = ({character}: Props) => {
  const router = useRouter();
  if (router.isFallback) return <>Loading...</>;
  const chapterId = router.query.id || '';
  const goToCharacters = () => {
    router.push(`${+chapterId + 1}`);
  };
  return (
    <PageWrapper>
      <Container><IdText>ID:{chapterId}</IdText>
        <CharacterCard character={character} key={character.id}/>
        <Button onClick={goToCharacters}>go to characters</Button></Container>
    </PageWrapper>
  );
};

Character.getLayout = getLayout;


export default Character;
type Props = {
  character: CharacterType
};

const IdText = styled.div`
    font-size: 40px
`;

const Button = styled.button`
    transition: all 0.5s;
    width: 330px;
    height: 60px;
    border-radius: 4px;
    border: none;
    background: #facaff;

    &:hover {
        background: #fa52d3;
        color: white;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px`;