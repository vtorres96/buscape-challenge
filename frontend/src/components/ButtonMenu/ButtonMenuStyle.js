import styled from 'styled-components'

export const Button = styled.div`
    cursor: pointer;
    position: relative;
    
    .line {
        display: block;
        width: 35px;
        height: 5px;
        margin-bottom: 5px;
        background: #000;
        transform-origin: 4px 0px;
        transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
          background 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
          opacity 0.3s ease;
    
        &:first-child {
          transform-origin: 0% 0%;
        }

        &:nth-last-child(2) {
            transform-origin: 0% 100%;
          }
    }
`