import styled from "styled-components";

const SelectList = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  margin-top: 30px;
`
const SelectInput = styled.select`
  width: 70%;
  min-width: 200px;
  height: 6.2vh;
  padding: 0 10px;
  background-color: black;
  color: white;
  border-radius: 7px;
  border: none;
`
export {SelectList, SelectInput}