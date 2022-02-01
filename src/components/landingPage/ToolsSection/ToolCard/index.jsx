import Badges from '/src/components/landingPage/Badges'
import styles from './styles.module.scss'

export default function ToolCard({title, text, badges}){

    return(
        <div className={styles.card}>
            <h4>
                {title}
            </h4>

            <p className={styles.text}>
                {text}
            </p>

            <Badges badges={badges}/>
        </div>
    )
}