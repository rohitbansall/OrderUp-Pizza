import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";


const Navbar = ({cartCount}) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}><a href="tel:012345678" className={styles.text}>012 345 678</a></div>
        </div>
        
        
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
             <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/productList" passHref>
             <li className={styles.listItem}>Products</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <Link href="/contact" passHref>
             <li className={styles.listItem}>Contact</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Link href="/cart" passHref>
        <a>
          <Image src="/img/cart.png" alt="Cart" width="30px" height="30px" />
        </a>
      </Link>
        
          <div className={styles.counter}>{cartCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
