import styled from 'styled-components'

const styles = styled.section`
    background: var(--blue-gray-950);

    height: 100vh;
    width: 100%;

    padding: 1.5rem;

    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    
    .container{
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;

        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        p{
            text-transform: uppercase;
            font-size: 2rem;
            line-height: 2rem;
            align-self: flex-start;

            span{
                color: var(--purple-100);
            }
        }

        .swiper{
            width: 100%;
            padding: 2rem 1rem;

            .swiper-pagination-bullet{
                margin-top: 1rem;
                background: var(--purple-100);
            }

            .swiper-wrapper{
                justify-content: flex-start;
            }
            
        }

        .planCard{
            background: var(--blue-gray-950);

            border: 1px solid var(--purple-100);
            border-radius: 0.3rem;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 200px;

            height: 400px;

            margin: 0 auto;

            position: relative;

            &.shadowBox{
                box-shadow: 0px 0px 30px 0px var(--purple-100);

                .text{
                    span{
                        p{
                            font-weight: normal;
                            color: #fff;
                        }
                    }
                }
            }

            &.filled{
                background: var(--purple-100);

                .text{
                    h4{
                        color: var(--blue-gray-950);
                    }

                    span{
                        color: var(--blue-gray-950);

                        text-align: center;

                        p{
                            color: var(--blue-gray-950);
                        }
                    }
                }
            }

            .offCircle{
                position: absolute;

                top: -1rem;
                right: -1rem;

                background: var(--blue-gray-950);

                width: 50px;
                height: 50px;

                border-radius: 100%;

                display: flex;
                justify-content: center;
                align-items: center;

                border: 1px solid var(--blue-gray-750);

                font-size: 0.8rem;

                line-height: 0.8rem;

                color: var(--purple-100);

                text-align: center;
            }

            .text{
                padding: 1rem;

                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: space-evenly;

                h4{
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: var(--purple-100);
                    line-height: 0;
                    
                    text-align: center;

                }
                
                >p{
                    font-size: 0.8rem;
                    line-height: 1.2rem;
                    text-align: center;
                    font-weight: 400;
                    text-transform: initial;
                }
                
                span{
                    height: 100px;
                    
                    color: var(--purple-100);

                    font-size: 1.3rem;
                    font-weight: 500;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    line-height: 0.5rem;

                    p{
                        color: var(--purple-100);
                        font-size: 0.65rem;
                        text-align: center;

                        line-height: 0.8rem;

                        font-weight: 600;

                        text-transform: initial;

                        display: flex;
                        align-items: flex-end;

                    }
                }
            }

            a{
                width: 100%;
                    button{
                    background: var(--purple-100);
                    padding: 0.5rem;
                    width: 100%;
                    
                    font-weight: bold;

                    border-radius: 0 0 0.2rem 0.2rem;

                    &.outlined{
                        background: var(--blue-gray-950);
                        color: var(--purple-100);
                    }
            }
            }
        }
    }

    @media (min-width: 1024px){
        .container{
            .swiper{
                padding: 2rem 1rem;

                .swiper-wrapper{
                    display: flex;
                    align-items: center;
                    justify-content: center !important;

                    margin: 0 auto;

                }
            }
        }
    }

`

export default styles