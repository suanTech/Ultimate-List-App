import styled from "styled-components";
import { ItemText } from "./Text.styled";
import { scaleUp } from "./Buttons.styled";

const AddItemInput = styled.input`
  border: none;
  height: 2em;
  padding-left: 5px;
  margin-right: 10px;
  &:focus {
    background-color: #F7F6F4;
    border-radius: 5px;
  }
`
const EditItemInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 140px;
  margin-right: 10px;
`

const ItemList = styled.ul`
  margin: 0;
  padding: 10px;
`

const ListItem = styled.li`
  line-height: 2.3em;
  border-bottom: 1.2px solid #F2F1EB;
  padding-bottom: 2px;
  min-width: 200px;
`

const CustomCheckbox = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid #fcc637;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    animation: ${scaleUp} .5s;
    box-shadow: 0 1px 5px 2px rgba();
  }
`

const CheckboxInput = styled.input`
  display: none;
  &:checked ~ ${ItemText} {
    text-decoration: line-through;
    color: #ccc;
  };
  &:checked + ${CustomCheckbox} {
    background-image: 
  }
`
const CheckboxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export { AddItemInput, ItemList, EditItemInput, ListItem, CheckboxInput, CustomCheckbox, CheckboxLabel}