import styles from "../styles/Home.module.scss";
import MainCard from "../components/MainCard";
import NormalCard from "../components/NormalCard";
import { News } from "../types/types";
import { GetServerSideProps } from "next";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { listEng } from "./category/[category]";
import dynamic from "next/dynamic";
const LastNews = dynamic(() => import("../components/LastNews"));
const NewsBlock = dynamic(() => import("../components/NewsBlock"));
type Props = {
  news: News[];
};
export default function Home({news}: Props) {
  // const [news, setNews] = useState<News[]>([]);
  //
  // useEffect(() => {
  //     const fetchPost = async () =>{
  //         const res = await axios.get(`${process.env.NEXT_PUBLIC_API_CONNECT_URL}/api/news`)
  //         // @ts-ignore
  //         // console.log(res?.data)
  //         setNews(res?.data)
  //     }
  //     fetchPost()
  // }, []);

  if (!news) {
    return <div>Ведутся технічні роботи</div>;
  }
  // @ts-ignore
  return (
    <div className={styles.wrap}>
      <div className={styles.upper_block}>
        <div className={styles.leftBlock}>
          <NormalCard news={news[1]} />
          <NormalCard news={news[2]} />
        </div>
        <div className={styles.middleBlock}>
          <MainCard news={news[0]} />
        </div>
        <div className={styles.rightBlock}>
          <NormalCard news={news[3]} />
          <NormalCard news={news[4]} />
        </div>
      </div>
      <hr className={styles.hrHome} />
      <div className={styles.titlePopular}>
        <h1>Вибір редакції</h1>
        <span>
          Тут ми зібрали три найкращі новини за останній час на розсуд нашої
          редакції. Наші журналісти працюють наполегливо, щоб надавати вам
          найактуальнішу та найцікавішу інформацію з усього світу.
        </span>
      </div>
      <div className={styles.lastNewsBlock}>
        <div className={styles.lastNews}>
          <LastNews items={news} />
        </div>
      </div>
      <div className={styles.newsBlock}>
        {listEng.map((category, index) => (
          <NewsBlock news={news} key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let res = null;
  try {
    res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_CONNECT_URL}/api/news`
    );
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      news: res?.data,
    },
  };
};
