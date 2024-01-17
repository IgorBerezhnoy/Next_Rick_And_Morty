import styles from '@/styles/Home.module.css';
import {useCharacters} from '@/assets/hooks/useCharacters';
import {CharacterCard} from '@/components/CharacterCard/characterCard';
import {HeadMeta} from '@/components/HeadMeta/HeadMeta';
import Navbar from '@/components/Navbar/Navbar';

export default function Characters() {
  const {characters} = useCharacters();
  return (
    <>
      <HeadMeta title={'Create Next App'}/>
      <Navbar/>
      <main className={`${styles.main}`}>
        {characters && characters.map(el => (
          <CharacterCard key={el.id} character={el}/>
        ))}
      </main>
    </>
  );
}
