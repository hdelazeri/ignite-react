import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from "@prismicio/client";

import { getPrismicClient } from "../../services/prismic";

import styles from "../../styles/posts.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Titulo do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates atque in sed velit ipsam hic. Officia dolorum aut vitae
              esse atque accusantium minima? Incidunt error dolores ab aperiam
              numquam!
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Titulo do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates atque in sed velit ipsam hic. Officia dolorum aut vitae
              esse atque accusantium minima? Incidunt error dolores ab aperiam
              numquam!
            </p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Titulo do post</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates atque in sed velit ipsam hic. Officia dolorum aut vitae
              esse atque accusantium minima? Incidunt error dolores ab aperiam
              numquam!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    { fetch: ["post.title", "post.content"], pageSize: 100 }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
