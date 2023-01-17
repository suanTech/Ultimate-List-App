import styled, {keyframes} from "styled-components";

const rollDown = keyframes`
  0% {
    height: 0;
  }
  100%{
    height: 520px;
  }
`

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 10vh auto;
  padding: 0 15px;
  text-align: center;
`

const ListsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 520px;
  box-shadow: 0 1px 20px 1px #F2F1EB;
  border-top: 2px solid black;
  border-bottom: 2px solid black; 
  animation: ${rollDown} .9s ease-in
`

const ItemContainer = styled.div`
  overflow: scroll;
  height: 280px;
  margin: 15px;
  margin-top: 0;
  text-align: left;
`

export {AppContainer, ListsContainer, ItemContainer}