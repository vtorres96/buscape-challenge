import styled from 'styled-components'

export const Img = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 40%;
    margin: 0 20px;

    .media { 
        width: 90px;
    
        .image-view {
          width: 100%;
          max-width: 100%; 
          max-height: 100%; 
        }
    }    
`