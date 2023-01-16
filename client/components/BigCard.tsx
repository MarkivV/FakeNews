import {News} from "../types/types";
import styles from './../styles/BigCard.module.scss'
import Link from "next/link";
import moment from "moment";
import 'moment/locale/uk';
import {FC} from "react";
import {newsTranslate} from "../utils/utilities";


const BigCard: FC<News> = ({_id, title, description, creator, tags, image, published, category, createdAt}) => {
    return (
        <div className={styles.card_wrap}>
            <div className={styles.Image}>
                <Link href={'/news/'+_id}>
                    <img src={image} alt=""/>
                </Link>
                <div className={styles.desc}>
                    <div className={styles.up_desc}>
                        <h2>{newsTranslate(category)}</h2>
                        <h3>| {moment(createdAt).format("LLL")}</h3>
                    </div>
                    <Link href={'/news/' + _id}>
                       <span>
                        {
                            title
                        }
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default BigCard;
