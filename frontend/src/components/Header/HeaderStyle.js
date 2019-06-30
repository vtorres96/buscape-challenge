import styled from 'styled-components'

export const HeaderStyle = styled.header`
    background-color: #ffce00;
    height: 80px;
    border-bottom: 1px solid #DDD;
    position: relative;
    width: 100%;
    
    .header-content {
        height: 80px;
        padding: 0 20px;
    
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            height: 70px;
        }
    }
`