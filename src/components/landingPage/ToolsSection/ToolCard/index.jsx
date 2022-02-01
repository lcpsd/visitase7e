import styles from './styles.module.scss'

export default function ToolCard({title, text, comment}){

    return(
        <div className={styles.card}>
            <h4>
                {title}
            </h4>

            <p className={styles.text}>
                {text}
            </p>

            <p className={styles.comment}>
                {comment}
            </p>
        </div>
    )
}