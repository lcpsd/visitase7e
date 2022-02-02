import styled from "styled-components";

const styles = styled.section`

    background: var(--blue-gray-950);

    height: 100vh;
    width: 100%;

    color: #fff;

    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    
    .container{
        
        
        margin: 0 auto;
        
        padding: 1.5rem;

        width: 100%;
        max-width: 1120px;

        display: flex;
        justify-content: center;
        flex-direction: column;

        gap: 1rem;

        transition: opacity .5s ease-in-out;
        
        &.fadeOut{
            opacity: 0;
        }

        &.fadeIn{
            opacity: 1;
        }

        .text{
            order: 2;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            max-width: 630px;

            gap: 2rem;

            .header{
                display: flex;
                flex-direction: column;
                
                h1{
                    font-size: 2.8rem;
                    line-height: 3rem;
                    font-weight: 500;
                    
                    margin: 0;

                    .textSerif{
                        font-family: 'Sorts Mill Goudy', serif;
                    }
            
                    .textDisplay{
                        font-family: 'Play', sans-serif;
                        color: var(--purple-100);
                    }
            
                    &::after{
                        content: '';
                        display: block;
                        width: 100%;
                        height: 1px;
                        background: var(--purple-100);
                        margin-top: 1rem;
                    }
                }
            
                p{
                    font-size: 1.4rem;
                    font-weight: 200;
                    margin: 0;
                }
            }
        
            .waitingList{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                p{
                    font-size: 0.8rem;
                    margin: 0;

                    a{
                        color: var(--purple-100);
                        font-weight: 500;
                    }
                }

                div{
                    display: flex;

                    .inputs{
                        input{
                            border: 0;
                            flex: 3;
                            width: 100%;

                            padding: 0.5rem;

                            background: var(--blue-gray-950);

                            color: #fff;

                            border-bottom: 1px solid var(--purple-100);

                            font-size: 1rem;
                            
                            :focus{
                                outline: 0;
                            }
                        }

                        & :first-child{                            
                            border-right: 1px solid var(--purple-100);
                        }

                        .phoneInput{
                            flex: 4;

                            .PhoneInputCountry{
                                display: none;
                            }
                        }

                    }
    
                    button{
                        flex: 1;
    
                        padding: 0.5rem;
                        background: var(--purple-100);
                        
                        border-radius: 0 0.3rem 0.3rem 0;
                
                        font-weight: bold;
                
                        text-transform: inherit;
                        color: #fff;
                    }
                }
            }
        }

        .smartphone{
            flex: 2;
            order: 1;
            img{
                width: 100%;
                height: auto;
            }

        }
    }
}

@media(min-width: 1024px){
    .container{
        margin-top: 80px;
        flex-direction: row;
        .text{
            order: 1;
        }
        .smartphone{
            flex: 2;
            order: 2;
        }
    }
`

export default styles