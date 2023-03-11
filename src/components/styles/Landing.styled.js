import styled from "styled-components";

const SelectList = styled.div`
  display: flex;
  width: 90%;
  max-width: 500px;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  margin-top: 30px;
`
const SelectInput = styled.select`
  width: 70%;
  min-width: 200px;
  height: 6.2vh;
  min-height: 30px;
  padding: 0 10px;
  background-color: black;
  color: white;
  border-radius: 7px;
  border: none;
`
export {SelectList, SelectInput}