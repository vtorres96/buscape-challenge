import styled from 'styled-components'

export const CartStyle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-height: 0;
    background-color: #dbb000;
    transition: max-height 0.35s ease-out;
    overflow: hidden;
        
        &.opened {
            max-height: 1000px;
            transition: max-height 0.35s ease-in;
        }
        
        .topShaddow {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #dbb000;
            box-shadow: 0 -1px 5px #c49d00;
        }
        
        .values {
            margin-bottom: 0;
            font-weight: 900;
            flex: 0;
        
            div {
                margin-top: 3px;
            }
        }
`