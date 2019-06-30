import styled from 'styled-components'

export const DetailsStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    margin: 0 0 30px 0;

    .title {
        color: #4d4d4d;
        font-size: 0.9rem;
        letter-spacing: 0;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid $color-gray-100;
        word-break: break-all;
    
        i {
          display: inline-block;
          margin-left: 15px;
          color: #ffce00;
        }
      }

    .call-action {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      
        .values {
            display: flex;
            flex-direction: column;
            color: $color-gray-400;
            font-size: 0.7rem;
            font-weight: 900;
            margin-bottom: 20px;
        
            .installments {
                display: inline-block;
                margin-bottom: 3px;
                color: $color-green;
        
                .amount {
                    display: inline-block;
                    margin-left: 3px;
                    font-size: 1.2rem;
                }
            }

            .in-cash {
                display: inline-block;
                margin: 0 3px;
                color: #22b14c;
            }
        }
      
        .btn-add-cart {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.6rem;
            font-weight: 900;
            color: white;
            padding: 3px 10px;
            height: 30px;
            border-radius: 3px;
            background-color: $color-green;
            cursor: pointer;
        
            i {
                margin-top: 2px;
                margin-left: 8px;
            }  
        }
    }      
`