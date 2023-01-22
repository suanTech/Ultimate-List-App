import Header from "./Header";
import TodoApp from "./TodoList/TodoApp";
import Shopping from "./ShoppingList/Shopping";
import { ListsContainer } from "./styles/Containers.styled";
import { PrimaryButton } from "./styles/Buttons.styled";

let initialName = '';
export default function ListContainer({ isTodo, isShopping }) {
  function displayList() {
    if (isTodo) {
      initialName = 'Todo List'
      return <TodoApp />;
    }
    if (isShopping) {
      initialName = 'Shopping List'
      return <Shopping />;
    }
  }
  function handleClickDeleteBtn() {
    if (window.confirm("Clear all? ")) {
      localStorage.clear();
      window.location.reload(false);
    }
  }
  function handleClickSaveBtn() {
    alert("Saved!");
  }
  const now = new Date();
  const today = now.toDateString().split(" ").slice(0, 3).join(" ");
  return (
    <>
      <ListsContainer>
        <Header initialName={initialName}/>
        <p>{today}</p>
        {displayList()}
        <PrimaryButton
          onClick={handleClickSaveBtn}
          style={{ marginRight: "15px" }}
        >
          Save List
        </PrimaryButton>
        <PrimaryButton onClick={handleClickDeleteBtn}>
          Delete list
        </PrimaryButton>
      </ListsContainer>
    </>
  );
}
