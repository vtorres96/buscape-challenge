import styled from 'styled-components'

export const ImgList = styled.div`

    .images-list {
        margin: 0;
        padding: 0;
        list-style: none;

        .items {
            display: flex;
            flex: 1 1 auto;
            margin: 0 0 5px 0;
            padding: 3px;
            border-radius: 4px;
            border: 1px solid #f3f3f3;
            cursor: pointer;
            width: 75px;
            height: 75px;

            .image {
                width: 100%;
                height: 100%;
            }

            &.active {
                border: 1px solid #ffce00;
            }
        }
    }

    @include respond-to('tablet') {
        .images-list {
            .thumb {
                width: 50px;
                height: 50px;
            }
        }
      }
      
    @include respond-to('desktop-small') {
        .images-list {
            .thumb {
                width: 70px;
                height: 70px;
            }
        }
    }
`