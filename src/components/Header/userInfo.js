import styled from "styled-components";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const IconsWrapper = styled.div`
  & {
    display: flex;
  }

  & svg {
    font-size: 28px;
    margin: 0 3px;
  }
`;

const UserInfo = () => (
  <IconsWrapper>
    <FaUser />
    <FaShoppingCart />
  </IconsWrapper>
);

export default UserInfo;
