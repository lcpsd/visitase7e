import styled from "styled-components";


const styles = styled.div`

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .videoBackground{
        width: 100vw;
        height: 100vh;

        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
        filter: grayscale(100%);
        z-index: -1;
    }

    background: var(--foryou-green-400);
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 0;

    
    .container{
        height: 93%;
        width: 100%;
        max-width: 400px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        gap: 1rem;
        
        .logo{
            animation: fadeIn 2s ease-in-out;
            flex: 1;
    
            border-radius: 100%;
            border: 2px solid var(--foryou-green-700);
    
            height: 125px;
            width: auto;
        }

        .cards{
            animation: fadeIn 2s ease-in-out;
    
            flex: 6;
            height: 100%;
            width: 300px;
            
            .swiper-pagination-bullet{
                padding: 0.3rem;
                background: var(--foryou-green-700);
                filter: brightness(0.2);
            }
    
            .swiper-pagination-bullet-active{
                filter: brightness(1);
                background: var(--foryou-green-100);
            }
    
            .swiper-wrapper{
                height: 100%;
                .swiper-slide {
                    
                    display: flex;
                    flex-direction: column;
    
                    
                    img{
                        flex: 5;
    
                        border-radius: 0.5rem 0.5rem 0 0;
    
                        width: 100%;
                        height: 100px;
    
                        object-fit: cover;
                    }
        
                    div{
                        flex: 1;
                        width: 100%;
    
                        background: #fff;
    
                        margin-bottom: 3rem;
    
                        border-radius: 0 0 0.5rem 0.5rem;
    
                        display: flex;
                        align-items: center;
                        justify-content: center;
    
                        font-weight: bold;
                        text-transform: uppercase;
    
                        color: var(--foryou-green-700);

                        &.final{
                            text-align: center;
                            border-radius: 0.5rem;
                        }
                    }
                }
                
            }
        }
    
        .social{
            animation: fadeIn 2s ease-in-out;
    
            width: 100%;
            flex: 0.5;
    
            padding: 0 1.5rem;
            
            .swiper-button-prev, .swiper-button-next{
                &:after{
                    color: var(--foryou-green-100);
                    font-size: 1rem;
                }
            }
    
            .swiper-wrapper{
                width: 100%;
    
                .swiper-slide{
                    
                    display: flex;
                    align-items: center;
    
                    
                    position: relative;
    
                    width: 100%;
    
                    a{
                        display: flex;
                        align-items: center;
                        justify-content: center;
    
                        height: 40px;;
                        width: 40px;
    
                        background: var(--foryou-green-700);
    
                        border-radius: 100%;
    
                        font-size: 1.5rem;
    
                        color: var(--foryou-green-100);
    
                        
                    }

                    span{
                        position: absolute;
                        top: 0.5rem;
                        right: 1rem;
    
                        font-size: 1rem;
    
                        background: var(--foryou-green-100);
                        
                        height: 20px;
                        width: 20px;
    
                        display: flex;
                        align-items: center;
                        justify-content: center;
    
                        border-radius: 100%;
    
                        color: var(--foryou-green-700);
    
                        font-weight: bold;
                    }
                }
            }
        }
    }

}`

export default styles