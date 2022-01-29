import styled from 'styled-components';

const styles = styled.div`
    .Toastify__toast-container{
        padding: 0;
        width: 100%;

        display: flex;
        justify-content: flex-end;
        
        .Toastify__toast{
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            max-width: 100%;
            
            padding: 0.3rem;
            
            border-radius: 0 0 0.5rem 0.5rem;
            
            border: 1px solid var(--purple-100);
            
            width: 150px;

            .Toastify__toast-body{
                display: flex;
                flex-direction: row;
                text-align: center;
                

                p{
                    color: var(--purple-100);
                    font-weight: bold;
                    text-transform: uppercase;
                    text-align: inherit;
                    font-size: 0.7rem;
                    width: 100%;
                }
            }

        }
    }
`

export default styles