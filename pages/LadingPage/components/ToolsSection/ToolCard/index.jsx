import styles from './styles.module.scss'

export default function ToolCard({title, text}){

    return(
        <div className={styles.card}>
            <h4>
                {title}
            </h4>

            <p>
                {text}
            </p>
        </div>
    )
}