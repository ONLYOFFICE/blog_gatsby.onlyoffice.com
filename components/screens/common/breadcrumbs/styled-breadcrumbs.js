import styled from "styled-components";

const StyledBreadcrumbs = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #444444;

  a {
    display: inline-flex;
    font-weight: 600;
    font-size: 13px;
    line-height: 133%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    color: #444444;
    cursor: pointer;

    &:hover {
      text-transform: uppercase;
      text-decoration: underline;
      color: #444444;
    }
  }
`;

export default StyledBreadcrumbs;
