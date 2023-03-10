import styles from './../styles/NormalCard.module.scss'
import {News} from "../types/types";
import {FC} from "react";
import Link from 'next/link';
import moment from "moment";
import "moment/locale/uk";
import Image from "next/image"
import plainColor from "../assets/dadada.png"

type NormalCardType = {
    news: News
}
const NormalCard: FC<NormalCardType> = ({news}) => {
    return (
        <div className={styles.normal_card}>
            <figure className={styles.normal_card_img}>
                <Link href={'/news/'+news?.url} prefetch={false}>

                <Image
                src={news?.image || plainColor}
                alt={news?.title}
                width={400} height={300}
                loading={"lazy"}
                />
                </Link>

            </figure>
            <div className={styles.normal_card_desc}>
                <Link href={'/news/'+news?.url}>
                    <h3>{news?.title?.length > 90 ? `${news?.title?.substring(0, 90)}...` : news?.title}</h3>
                    <h4>{moment(news?.updatedAt).format("LLL")}</h4>
                </Link>
            </div>
        </div>
    );
};
export default NormalCard;