import React from 'react';
import Image from 'next/image';
import {CharacterType} from '@/assets/hooks/useCharacters';
import s from './characterCard.module.scss';

export const CharacterCard = (props: Props) => {
  const {name, image} = props.character;
  return (
    <div className={s.card}>
      <div>{name}</div>
      <Image src={image} alt={'Picture of ' + name} width={300} height={300}/>
    </div>
  );
};

type Props = {
  character: CharacterType
}