import styled from "styled-components";

const Styles = styled.section`
    background: var(--blue-gray-950);

    height: 100%;
    width: 100%;

    padding: 1.5rem;

    color: #fff;

    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    .container{
        width: 100%;
        max-width: 500px;
        margin: 0 auto;

        transition: opacity .5s ease-in-out;
            
        &.fadeOut{
            opacity: 0;
        }
    
        &.fadeIn{
            opacity: 1;
        }
        
        >p{
            text-transform: uppercase;
            font-size: 2rem;
            line-height: 2rem;
    
            text-align: start;
    
            width: 100%;
    
            span{
                color: var(--purple-100);
            }
        }

        .questions{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;       
            
            gap: 0.5rem;
        }
    }
`

export default Styles