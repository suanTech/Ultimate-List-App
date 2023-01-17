import styled, {keyframes} from "styled-components";
const yellow = '#fcc637'
const lightYellow = '#FAD470'

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

const GoButton = styled.button`
  ${Button};
  width: 20%;
  height: 6.2vh;
  border-radius: 7px;
  transition: all .5s;
  background-color: ${lightYellow};
  &:hover {
    animation: ${scaleUp} .3s;
    background-color: ${yellow}
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
    animation: ${scaleUp} .3s
  }
`

const SecondaryButton = styled.button`
  ${Button};
  color: ${lightYellow};
  padding: 3px;
  font-size: 1.2em;
  font-weight: 600;
  font-style: italic;
  padding: 10px;
`



export {GoButton, PrimaryButton, SecondaryButton, scaleUp}