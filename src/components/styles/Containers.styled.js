import styled, { keyframes } from "styled-components";

const rollDown = keyframes`
  0% {
    height: 0;
  }
  100%{
    height: 600px;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding-top: calc((100vh - 600px) / 2);
  text-align: center;
`;

const ListsContainer = styled.div`
  width: 320px;
  height: 600px;
  padding-bottom: 20px;
  box-shadow: 0 1px 18px 4px ${props => props.theme.colors.lighterGrey};
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  overflow: hidden;
  animation: ${rollDown} 0.9s ease-in;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const ItemContainer = styled.div`
  overflow: scroll;
  width: 85%;
  max-width: 400px;
  height: 350px;
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
