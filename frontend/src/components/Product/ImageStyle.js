import styled from 'styled-components'

export const Img = styled.div`
   
  display: flex;
  justify-content: space-between;
  padding: 20px 18px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 1px 1px 5px #f3f3f3;

  .media { 
    width: 90px;

    .image-view {
      width: 100%;
      max-width: 100%; 
      max-height: 100%; 
    }
  }  

  @include respond-to('mobile-large') {
    margin: 0 40px;

    .media {
      width: 110px;
    }
  }

  @include respond-to('tablet') {
    .media {
      width: 200px;
    }
  }

  @include respond-to('desktop-small') {
    .media {
      width: 350px;
    }
  }    
`