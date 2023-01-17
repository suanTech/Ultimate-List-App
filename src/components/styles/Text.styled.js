import styled from "styled-components";

const MainTitle = styled.h1`
  margin-top: 10vh;
  font-size: 2.8em;
`
const ListName = styled.h2`
  margin: 0;
  font-size: 2em;
  padding: 20px 10px;
`
const Label = styled.h2`
  font-size: 1.1em;
  font-weight: 800;
  font-style: italic;
`
const ErrorMessage = styled.p`
  font-size: .8em;
  color: #8e8080;
`
const PlainText = styled.p`
  font-size: .8em;
`
const ItemText = styled.span`
  padding-left: 10px; 
  width: 70%;
`
export {MainTitle, Label, ErrorMessage, ListName, PlainText, ItemText }