import styled from 'styled-components'

export const ListItems = styled.div`
    list-style: none;
    margin: 0;
    padding: 0;

    .itemWrapper {
        display: flex;
        padding: 20px 15px;
        margin-bottom: 2px;
        background-color: $color-yellow-300;
      }
      
      .itemWrapper > * {
        flex: 1 1 auto;
        margin: 0 7px;
      }
      
      .thumb {
        flex-shrink: 0;
        max-width: 90px;
        height: 90px;
        border: 1px solid $color-black;
      }
      
      .details {
        display: flex;
        flex-direction: column;
        justify-content: space-between
      }
      
      .title {
        color: $color-white;
        font-size: 0.9rem;
        font-weight: bold;
        line-height: 1.1rem;
        margin-bottom: 4px;
      }
      
      .removeItem {
        text-align: right;
      
        button {
          border: none;
          background: transparent;
          align-self: flex-start;
          font-size: 1.1rem;
          font-weight: 900;
          cursor: pointer;
        }
      }
      
`