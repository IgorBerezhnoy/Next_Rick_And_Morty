import Link from 'next/link';
import s from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={s.links}>
      <Link href={'/'}>Main</Link>
      <Link href={'/characters'}>Characters</Link>
    </div>
  );
}
