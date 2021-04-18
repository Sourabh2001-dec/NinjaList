import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Ninja List | Home</title>
          <meta name="keywords" content="Lorem" />
        </Head>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem
          quaerat dignissimos accusantium quasi iure ex neque id illo
          voluptatibus sunt illum enim distinctio consequatur dolores odio
          obcaecati deserunt doloribus, beatae magni? Quae eligendi rerum
          temporibus ea vel ut est.
        </p>
        <div>
          <Link href="/ninjas">
            <a className={styles.btn}>See ninja listing</a>
          </Link>
        </div>
      </div>
    </>
  );
}
