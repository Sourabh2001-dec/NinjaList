import Link from "next/link";
import React from "react";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  return {
    props: { ninjas: res },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id.toString()}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
