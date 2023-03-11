import styles from "./../styles/Footer.module.scss";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.header_title}>
        <Link href={"/"}>
        <svg
              id="Слой_1"
              data-name="Слой 1"
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="35"
              viewBox="0 0 792.78 146.52"
            >
              <path
                d="M81.72,91.27c-.5-1.3-5.88-14.72-20-20.8C44,62.81,29.54,74.22,22.47,66.05c-2.35-2.71-2.32-8.59-2.13-20.36.2-12.39.3-18.59,3-21.57,4.81-5.24,14.75-4.61,34.64-3.35C70,21.54,75.71,22.83,79.6,19c3.4-3.4,4.49-9.71,2.1-13.7-1.88-3.14-5.45-4-27.93-4.89-20.41-.8-25.19-.4-30.88,1C15,3.27,11.12,4.22,7.58,7.1-1,14.11.9,25,.35,64.11c-.28,19.59-.93,28.08.84,43.57,1.66,14.44,2.58,21.77,7.16,27.3,10.85,13.1,33.71,14.31,49.67,7.35A42.67,42.67,0,0,0,78.08,125C79.59,122.42,88,107.57,81.72,91.27ZM61.36,118.55C56,126,44.69,133,34.9,129.33c-15-5.6-12.12-30.9-12-32,.55-4.31,1.1-8.68,4.52-11.62C35.25,79,50.71,86,57.7,90.56,61,92.72,63.65,94.5,65.28,98,69.52,107,62.19,117.4,61.36,118.55Z"
                fill="#fff"
              />
              <path
                d="M316,26.8c-8.31,4.4-4.58,20.66-3.7,52.18,1.06,38-3.15,58.24,6.44,62.33a8,8,0,0,0,6.12.16c8.91-4,1.21-26.53,2.1-62,.74-29.84,7-47.5-1.53-52.51A10.14,10.14,0,0,0,316,26.8Z"
                fill="#fff"
              />
              <path
                d="M395.35,30.35c-5.18,4.35-4.15,12.58-2.9,25.64,0,0,1.77,18.66,3.17,42,1.68,28.06-1.46,41.57,5.74,45.15a9.25,9.25,0,0,0,9.35-.94c3.11-2.53,2.79-8.32,2-19.79-1.2-17.94-1.4-20.36-.44-20.73,4.18-1.65,18.33,40.58,34.75,39.54,3-.19,6.51-1.87,7.6-4.54,1.67-4.1-2.7-9.52-18.05-26.31-14.64-16-16.84-17.82-16.95-22.07-.13-5.58,3.54-7.37,16.83-24.88,12.19-16,13.32-20.12,12.15-23.49-1.68-4.89-8.2-8.45-12.7-7.14-3.74,1.09-5,5.25-8,12.49-1.1,2.67-11.16,27-14,26.3-.92-.22-1.25-3-1.34-26.3,0-9.58,0-13.48-2.9-15.83C406,26.54,399.24,27.08,395.35,30.35Z"
                fill="#fff"
              />
              <path
                d="M528.49,53.71c-.85-1.46-16.37-27.31-36.38-24.79-20.19,2.54-28.73,31.92-30.73,38.81-1.2,4.13-13,47,13.48,66.57.77.58,18.13,13,35.31,6.74C536.78,131.31,545.57,83,528.49,53.71ZM498,123.52c-8.47-.15-14.86-17.47-16.71-27.76-.29-1.61-4.84-28.37,7.54-34,8.56-3.87,21.85,3.89,27.23,13.74C526.39,94.42,509.15,123.72,498,123.52Z"
                fill="#fff"
              />
              <path
                d="M612.6,78.09c-6.5-6.72-16.2-9.88-15.38-13.63.43-1.93,3.2-1.9,5.79-4,6.63-5.3,5.08-18.72,3.27-24.69-6.08-20-38.53-33.5-52.07-24.15-8.42,5.81-7.63,24.69-6,62.44.07,1.51,0-.11,2.23,29,2.34,30.6,2.49,33.47,5.32,36.11,13,12.12,60-1.55,65.65-28.67C623.27,101.36,621.25,87,612.6,78.09ZM562.51,30.51c5.13-4.5,20.78-1,24.9,9.81,4,10.57-4.12,22.52-12.83,24.14-.36.07-5.8,1.06-9.81-2.26-3.71-3.08-3.92-8-4.16-17.05C560.39,36.69,560.28,32.46,562.51,30.51ZM603.26,109c-.84,13.38-23.11,23.7-31.7,18.11-4.5-2.94-4.91-10.06-5.28-16.6-.26-4.64-1.1-19.46,6-23.4C581.55,82,604.13,95.06,603.26,109Z"
                fill="#fff"
              />
              <path
                d="M626.6,24.67c-4.25,4.42-.45,11.58,3.53,29.38,3.58,16,4.86,29.71,7.07,53.33,2,21.56,1.75,33.23,8.27,35.76,4.15,1.61,8.92-1.33,9.84-1.89,7.41-4.57,6.92-13.44,11-24.56,5.29-14.28,16.2-26.94,20.09-25.55,6.22,2.2-7.18,39.41,5.81,47.47a11.24,11.24,0,0,0,10.82.28c8.1-4.46,6.61-20.55,5.33-38-4.6-62.66-1.82-80.55-11.62-83.81-5.06-1.68-11.35,1.23-14.55,4.8-6.87,7.65.61,18.09-2.36,34.36-3.08,16.88-15.55,29.77-19.1,28.41s1.92-17.1-3.1-42.43c-1.32-6.62-2.81-11.16-6.7-14.76C644,21.09,631.46,19.6,626.6,24.67Z"
                fill="#fff"
              />
              <path
                d="M715.85,16.63c-4.85,4.22-3.85,11.63,0,35.22,5.65,34.55,6.82,39,11.64,42,9.63,6.08,17.89-3.41,27.16,2.27,15,9.15,3.94,40.29,16.93,46.46,6.6,3.13,17.16-1.22,20.29-7.8,4.36-9.16-7.91-18-15.38-35.22-16.79-38.73,8.7-78.19-4.91-85.61-3.93-2.15-9.35-.63-12.4,1.42-15,10.1.05,51.33-10.11,55.43-2.31.93-4.88-.48-6-1.12-15-8.3.33-47.51-13.3-55.06C725.31,12.16,719.12,13.78,715.85,16.63Z"
                fill="#fff"
              />
              <path
                d="M380.5,39.57c-3.83-7.48-24.84-9.14-35.67,0-2.29,1.93-7.24,7-7.58,43-.28,29.33-.23,44.13,8.92,50.82,6.35,4.65,14.64,4.72,23.45,4.8,6.84.06,15.56.13,18.43-5.07a9.68,9.68,0,0,0-.64-9.76c-5.63-7.8-20.46,2.08-30.54-4.9-9-6.25-8.05-21.71-6.69-43,.81-12.71,1.43-20.77,7.13-24.3,7.48-4.62,17.88,2.17,22.35-3.36A8.06,8.06,0,0,0,380.5,39.57Z"
                fill="#fff"
              />
              <path
                d="M255.21,48.71c-2.24-2.16-3.82-5.79-2.9-8.69,2.61-8.17,26.15-13.17,39.46-4,8.24,5.66,9.94,18.82,13,44.91,5.29,45-2.67,52.33-5.2,54.3-4.18,3.26-9.74,4.52-15.38,5.79-7.75,1.76-16.11,3.65-20.28-.89-2.65-2.88-3.65-8.41-1.34-11.81,4.62-6.81,18.13,1.34,25.77-5.19,4.78-4.08,3.06-10.31,1.43-37.17-1.58-26-.68-31.74-5.58-35C275.72,45.29,262.63,55.84,255.21,48.71Z"
                fill="#fff"
              />
              <path
                d="M155.34,44.35c-1.08-14.7-12.19-25.12-22.7-29.32-9.91-4-25.09-4.74-32.59,3.63-4.27,4.76-4.54,10.81-4.73,16.54-.84,26.63-1.26,40-.88,54.35.89,33.94-2.76,47.82,5.61,52.57,3,1.71,7.38,2.15,10.34.3,5-3.15,4.13-11.8,3.31-37.25-.69-21.45-.36-25.09,2.6-28,7-6.92,17.43,1.19,28.06-5.91C153.14,65.37,156,53.19,155.34,44.35Zm-18.07,13c-5.8,6.85-18.88,3.64-22.15-2.07-.84-1.46-.91-4.24-1-9.81s-.17-8.19.73-9.39c3.16-4.16,14.78-4,20.77,2.79,4.18,4.76,6,13.28,1.65,18.48Z"
                fill="#fff"
              />
              <path
                d="M229.51,55.62c-5.75-27-6.46-32.95-12.88-37.09C208.39,13.21,195.44,14,186.88,20c-7.76,5.43-7,11.75-16.53,54.75-.78,3.48-2.75,14.29-6.71,35.92-3.17,17.31-4.65,26,.15,30a10.77,10.77,0,0,0,11.62.75c6.06-3.7,3-12.79,7.31-31,2.5-10.55,4.17-17.16,10.13-21a19.2,19.2,0,0,1,18.78-.89c7,3.8,9,11.93,10.88,19.67,4.34,18-1.5,26.73,4.77,32.49,4.29,4,12.19,4.59,15.94,1.34,4.59-4,1.78-12.68-2.23-29.8C236.61,93.4,233.52,74.41,229.51,55.62ZM214.27,67.84c-2.49,1.09-4.83-3.89-11.2-4.06s-8.8,4.61-11.47,3.35c-4.42-2.1-5.51-19.13,4.25-25.85.54-.37,6.71-4.49,12.75-2.13C219.65,43.47,219,65.74,214.27,67.84Z"
                fill="#fff"
              />
            </svg>
        </Link>
      </div>
      <div className={styles.categories}>
        <ul className={styles.catDiv}>
          <ul className={styles.catDivUl}>
            <li>
              <h3>Категорії</h3>
            </li>
            <li>
              <h2><Link href={"/"} prefetch={false}>Головна</Link></h2>
            </li>
            <li>
              <h2><Link href={"/category/war"} prefetch={false}>Новини</Link></h2>
            </li>
            <li>
              <h2><Link href={"/category/politic"} prefetch={false}>Політика</Link></h2>
            </li>
            <li>
              <h2><Link href={"/category/science"} prefetch={false}>Наука та Технології</Link></h2>
            </li>
            <li>
              <h2><Link href={"/category/world"} prefetch={false}>Світ</Link></h2>
            </li>
            <li>
              <h2><Link href={"/category/economy"} prefetch={false}>Економіка</Link></h2>
            </li>
          </ul>
          <ul className={styles.catDivUl}>
            <li><h3>Дії</h3></li>
            <li><h2><Link href={"/suggest"} prefetch={false}>Запропонувати</Link></h2></li>
            <li><h2><Link href={"/"} prefetch={false}>Підтримайте нас</Link></h2></li>
            <li><h2><Link href={"/profile"} prefetch={false}>Профіль</Link></h2></li>
          </ul>
          <ul className={styles.catDivUl}>
            <li>
              <h3 onClick={()=>signOut()}>Соціальні мережі</h3>
            </li>
            <li>
              <h2><Link href={"/"} prefetch={false}>FaceBook</Link></h2>
            </li>
            <li>
              <h2><Link href={"/"} prefetch={false}>Twitter</Link></h2>
            </li>
            <li>
              <h2><Link href={"/"} prefetch={false}>Instagram</Link></h2>
            </li>
            <li>
              <h2><Link href={"/"} prefetch={false}>Telegram</Link></h2>
            </li>
          </ul>
        </ul>
      </div>
      <div className={styles.about}>
            <p>
              <strong>Бражкович Медіа - </strong>
              це сатиричне онлайн видання яке публікує повністю вигадані новини
              українською мовою
            </p>
        </div>
        <hr />
      <div className={styles.foot}>
        <div className={styles.left_block}>
          <div className={styles.otherInfo}>
            <span>
              Увага! Всі матеріали, розміщені на даному ресурсі, є власністю ТОВ
              &quot;БРАЖКОВИЧ МЕДІА&quot; і можуть бути використані тільки за умови
              посилання на наш ресурс. Повне або часткове відтворення матеріалів
              без виконання наших умов є незаконним і може привести до юридичних
              наслідків. Додатково, будь-ласка, майте на увазі, що наші
              матеріали містять сатиричний контент і є непристойними для деяких
              осіб. Використовуйте їх на свій розсуд.
            </span>
          </div>
        </div>
        <div className={styles.right_block}>
          <div className={styles.otherInfo}>
            <span>
            Дисклеймер: Сайт Бражкович Медіа є платформою для виконання сатиричної журналістики. Всі матеріали, розміщені на нашому сайті, є фантазією та надані виключно для розваги і не мають наміру образити реальних людей або організацій. Будь-ласка, не відносіть їх до реальності і не використовуйте без нашої згоди. Ми не несемо відповідальності за будь-які збитки, які можуть виникнути внаслідок використання нашого сайту.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
