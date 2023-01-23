import Header from "./Header";
import TodoApp from "./TodoList/TodoApp";
import Shopping from "./ShoppingList/Shopping";
import { ListsContainer } from "./styles/Containers.styled";
import { PrimaryButton } from "./styles/Buttons.styled";

export default function ListContainer({ isTodo, isShopping }) {
  function displayList() {
    if (isTodo) {
      return <TodoApp />;
    }
    if (isShopping) {
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
        <Header initialName={isTodo ? "Todo List" : "Shopping List"} />
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
