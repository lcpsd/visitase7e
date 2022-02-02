import styled from "styled-components";

const Styles = styled.section`
    background: var(--blue-gray-950);

    height: 100vh;
    width: 100%;

    padding: 1.5rem;

    color: #fff;

    text-transform: uppercase;
 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    position: relative;

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
    
            text-align: end;
    
            width: 100%;
    
            span{
                color: var(--purple-100);
            }
        }
    
        .buttons{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            button{
                height: 50px;
                width: 100%;
        
                padding: 0.2rem 0.5rem;
        
                background: transparent;
        
                border: 1px solid var(--purple-100);
                border-radius: 0.3rem;
        
                display: flex;
                align-items: center;
                justify-content: flex-start;
                
                font-size: 0.8rem;
        
                color: #fff;
        
                gap: 1rem;
        
                a{
                    display: flex;
                    gap: 1rem;
                    p{
                        font-weight: lighter;
                        text-transform: uppercase;
                    }
            
                    span{
                        color: var(--purple-100);
            
                        font-size: 2rem;
            
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
`

export default Styles