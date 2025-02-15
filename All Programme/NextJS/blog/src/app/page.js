import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Link href="/addproduct">Add Products</Link>
       <Link href="/productlist">Products List</Link>
       <Link href="/productlist/editproduct">Edit Products</Link>
      </main>
      
    </div>
  );
}
