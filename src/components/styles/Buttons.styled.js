import styled, {keyframes} from "styled-components";

const scaleUp = keyframes`
  50% {
    transform: scale(1.03)
  }
`

const Button = `
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  border: none;
  max-width: 180px;
  color: black;
  background: none;
`
const SmallButton = `
  ${Button};
  transition: transform .3s;
  &:hover {
    transform: scale(1.2)
  }
`

const GoButton = styled.button`
  ${Button};
  width: 20%;
  height: 6.2vh;
  min-height: 30px;
  border-radius: 7px;
  transition: all .5s;
  background-color: ${props => props.theme.colors.lightYellow};
  &:hover {
    animation: ${scaleUp} .3s;
    background-color: ${props => props.theme.colors.yellow};
  }
`

const PrimaryButton = styled.button`
  ${Button}
  padding: 5px;
  font-size: .7em;
  background: white;
  border: 1px solid #000;
  border-radius: 0px;
  &:hover {
    animation: ${scaleUp} .3s;
    border-bottom: 2px solid #000;
  }
`
const AddButton = styled.button`
  ${SmallButton};
  font-size: 2.2em;
`
const EditButton = styled.button`
  ${SmallButton}
`
const QuantityButton = styled.button`
  ${SmallButton};
  font-size: 1.5em;
  color: ${props => props.theme.colors.yellow};
  &:disabled {
    color: ${props => props.theme.colors.grey};
  }
`

export {GoButton, PrimaryButton, AddButton, EditButton, scaleUp, QuantityButton}