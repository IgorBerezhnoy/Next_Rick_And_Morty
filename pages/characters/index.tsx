import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/characterCard';
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import {getLayout} from '@/components/Layout/Layout';
import Link from 'next/link';

function Characters() {
  const {characters} = useCharacters();
  return (
    <>
      <HeadMeta title={'Characters'}/>
      {characters && characters.map(el => (
        <Link href={`/characters/${el.id}`} key={el.id}><CharacterCard character={el}/></Link>
      ))}
    </>
  );
}

Characters.getLayout = getLayout;
export default Characters;