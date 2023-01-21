
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "./styles/Buttons.styled";
import { NotFoundContainer } from "./styles/Containers.styled";
import { MainTitle } from "./styles/Text.styled";

const NotFound = () => (
  <NotFoundContainer>
    <MainTitle style={{fontSize: '2em'}}>Page Not Found</MainTitle>
    <PrimaryButton>
      <NavLink to="/" end>
        Go Back
      </NavLink>
    </PrimaryButton>
  </NotFoundContainer>
);

export default NotFound;
