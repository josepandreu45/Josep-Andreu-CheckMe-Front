import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;

  background-color: #f5f8fa;
  height: 60px;

  ul {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }

  img {
    cursor: pointer;
    width: 60px;
    height: 60px;
  }
  @media (min-width: 600px) {
    position: absolute;
    left: -2000px;
  }
`;

export default FooterContainer;
