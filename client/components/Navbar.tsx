import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import styles from './../styles/Navbar.module.scss'
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_title}>
                <Link href={"/"}>
                    <h2 className={styles.title}>Бражкович</h2>
                </Link>
                <Link href={"/"}>
                    <h2 className={styles.title_small}>Медіа</h2>
                </Link>
            </div>
            <div className={styles.menu}>
                <h2>Головна</h2>
                <h2>Новини</h2>
                <h2>Бєсєдка</h2>
                <h2>Блог</h2>
            </div>
            <div className={styles.header_icons}>
                <SearchIcon/>
                <PersonIcon/>
            </div>
        </div>
    );
};

export default Header;