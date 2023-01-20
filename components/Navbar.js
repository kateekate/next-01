import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/navbar.module.scss'

const navigation = [
  {id: 1, title: 'Home', path:'/'},
  {id: 2, title: 'Posts', path:'/posts'},
  {id: 3, title: 'Contacts', path:'/contacts'},
]

const Navbar = () => {
  const {pathname} = useRouter()

return (
  <nav className={styles.navbar}>
    <div>
      <Image src='/logo1.svg' width={60} height={60} alt='webDev'/>
    </div>
<div className={styles.links}>
{navigation.map(({id, title, path}) => (
  <Link className={pathname === path ? styles.active : null} key={id} href={path}>{title}</Link>
))}
    </div> 
    </nav>
  )
}

export default Navbar