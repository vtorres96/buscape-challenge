import styled from 'styled-components'

export const HeaderStyle = styled.header`
    background: #ffce00;
    height: 75px;
    border-bottom: 1px solid #DDD;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    
    .header-content {
        height: 75px;
        padding: 0 20px;
    
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            height: 70px;
        }
    }
`