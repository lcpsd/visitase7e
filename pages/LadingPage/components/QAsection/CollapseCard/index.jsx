import { useState } from 'react'
import {Collapse} from 'react-collapse';
import styles from './styles.module.scss'

export function CollapseCard({title, text}){

    const [isCollapseOpened, setIsCollapseOpened] = useState(false)

    return(
        <section className={styles.collapse}>
            <h4 onClick={() => setIsCollapseOpened(!isCollapseOpened)}>{title}</h4>
            
            <Collapse isOpened={isCollapseOpened}>
                <p>{text}</p>
            </Collapse>

        </section>
    )
}