import styled from "styled-components"

const styles = styled.section`
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

    .container{
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: 1rem;

        transition: opacity .5s ease-in-out;
        
        &.fadeOut{
            opacity: 0;
        }

        &.fadeIn{
            opacity: 1;
        }

        .carouselDiv{
            
            .swiper{

                .swiper-pagination-bullet{
                    margin-top: 1rem;

                    background: var(--purple-100);
                }
            }

                .cardDiv{
                    height: 100%;

                    padding-bottom: 4rem;

                    margin: 0 auto;
                    
                    display: flex;
                    justify-content: center;
                }

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
    }

    @media (min-width: 1024px){
        .container{
            .carouselDiv{
                .swiper{
                    .swiper-pagination-bullet{
                        margin: 0 1rem;
                        padding: 0.3rem;
                    }
                }
        }
    }
}
`

export default styles