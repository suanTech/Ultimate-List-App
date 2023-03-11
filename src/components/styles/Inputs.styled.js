import styled from "styled-components";
import { ItemText } from "./Text.styled";
import checkIcon from "../../assets/checkIcon.png";

const AddItemForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddItemInput = styled.input`
  border: 1px solid black;
  height: 2em;
  width: 50%;
  padding-left: 5px;
  margin-right: 10px;
  &:focus {
    background-color: ${props => props.theme.colors.lighterGrey};
    border-bottom: 2px solid black;
  }
  &:focus::placeholder {
    opacity: 0;
  }
  ::placeholder {
    color: ${props => props.theme.colors.grey};
    font-style: italic;
    transition: opacity .2s ease-out;
  }
`
const EditItemInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  width: 70%;
  background: transparent;
`

const ItemWrapper = styled.li`
  border-bottom: 1.2px solid ${props => props.theme.colors.lightGrey};
  min-width: 200px;
  padding: 10px;
`

const CustomCheckbox = styled.div`
  min-width: 14px;
  height: 14px;
  border: 2px solid ${props => props.theme.colors.yellow};
  border-radius: 50%;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 1px 5px 2px ${props => props.theme.colors.lighterGrey};
  }
`

const CheckboxInput = styled.input`
  display: none;
  &:checked ~ ${ItemText} {
    text-decoration: line-through;
    font-style: italic;
    color: ${props => props.theme.colors.grey};
  };
  &:checked + ${CustomCheckbox} {
    background-color: ${props => props.theme.colors.lightYellow};
    background-image: url(${checkIcon});
    background-size: cover;
  }
`
const CheckboxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { AddItemForm, AddItemInput, EditItemInput, ItemWrapper, CheckboxInput, CustomCheckbox, CheckboxLabel}