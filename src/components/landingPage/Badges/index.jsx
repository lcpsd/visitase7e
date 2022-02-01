import Styles from './Styles'

export default function Badge({badges}){

    return(
        <Styles>
            {
                badges.map((badge, index) => (
                    <span key={index}>{badge}</span>
                ))
            }
        </Styles>
    )
}