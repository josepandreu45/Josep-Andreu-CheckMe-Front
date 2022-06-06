import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  position: sticky;
  bottom: -3px;
  background-color: #f5f8fa;

  ul {
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
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
