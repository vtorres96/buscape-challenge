import styled from 'styled-components'

export const ImgList = styled.div`
    .images-grid {
        margin: 0;
        padding: 0;
        list-style: none;

        .image {
            width: 100%;
            height: 100%;
        }

        &.active {
            border: 1px solid $primary-color;
        }
    }
`