import styles from './../../styles/CardDetails.module.scss'
import axios from "axios";
import {GetServerSideProps } from 'next'
import {News} from "../../types";
import {FC} from "react";
import moment from "moment";
import 'moment/locale/uk';

type Details = {
    news: News
}

const CardDetails: FC<Details> = ({news}) => {

    // @ts-ignore
    // const mom = moment.locale('uk')

    console.log(news.tags)
    return (
        <div className={styles.cardDetails_wrap}>
            <div className={styles.cardDetails_leftBlock}>
                <div className={styles.cardDetails_title}>
                    <h1>{news?.title}</h1>
                    <div className={styles.cardDetails_CategoryBadge}>
                        <h2>{news.category}</h2>
                    </div>
                    <div className={styles.cardDetails_dateTime}>
                        {/*<h3>19 грудня 2022 | 15:46</h3>*/}
                        <h3>{moment(news.createdAt).format("LLL")}</h3>
                    </div>
                </div>
                <div className={styles.cardDetails_image}>
                    <img src={news?.image} alt=""/>
                </div>
                <div className={styles.cardDetails_description}>
                    <span>
                        {news?.description}
                    </span>
                </div>

                <div className={styles.cardDetails_otherInfo}>
                    <h3>Читайте нас у: </h3>
                    <h2><a href="https://t.me/brazhkovich">Telegram</a></h2>
                </div>
                <hr/>
                <div className={styles.cardDetails_tags}>
                    <div className={styles.cardDetails_tagsBadge}>
                        <h3>Теги:</h3>
                        {news.tags.map((i,index)=>(
                            <h2 key={index}>{i}</h2>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
    console.log(params)
    const res = await axios.get(
        `http://localhost:3000/api/news/${params.id}`
    );
    return {
        props: {
            news: res.data,
        },
    };
};

export default CardDetails;
