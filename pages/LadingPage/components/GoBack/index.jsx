import {IoIosArrowUp} from 'react-icons/io'
import Link from 'next/link'
import styles from './styles.module.scss'

export function Goback(){

    function resetScroll(){
        window.scrollTo(0, 0);
    }

    return(
        <Link href="#headerSection">
            <button className={styles.goBack} onClick={resetScroll}>
                <IoIosArrowUp/>
            </button>
        </Link>
    )
}