import styled, { keyframes } from "styled-components";

const rollDown = keyframes`
  0% {
    height: 0;
  }
  100%{
    height: 520px;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100%;
  margin: auto;
  margin-top: 8vh;
  text-align: center;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const ListsContainer = styled.div`
  width: 100%;
  height: 520px;
  padding-bottom: 20px;
  box-shadow: 0 1px 18px 4px ${props => props.theme.colors.lighterGrey};
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  overflow: hidden;
  animation: ${rollDown} 0.9s ease-in;
`;

const ItemContainer = styled.div`
  overflow: scroll;
  width: 85%;
  max-width: 400px;
  height: 270px;
  margin: 15px auto;
  text-align: left;
`;

const ItemListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const NotFoundContainer = styled.div`
  margin: 0;
  width: calc(100vw + 100px);
  height: 100vh;
  background: ${props => props.theme.colors.lightYellow}
`

export { AppContainer, ListsContainer, ItemContainer, ItemListContainer, NotFoundContainer };
