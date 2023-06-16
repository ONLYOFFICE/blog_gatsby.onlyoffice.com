import styled from "styled-components";

const StyledSearchArea = styled.form`
  .search_container {
    position: relative;
  }

  .search_input {
    border: 1px solid #AAAAAA;
    border-radius: 3px;
    padding: 16px 48px 16px 16px;
    background-color: transparent;
  }

  .input-label {
    font-size: 16px;
    line-height: 22px;
    color: #AAAAAA;
  }

  .search_icon {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    z-index: 1;
    transition: transform .2s cubic-bezier(.16,.68,.43,.99);

    img {
      width: 20px;
      height: 20px;
    }
  }

  .search_img,
  .close-icon {
    display: flex;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: center;
  }

  .search_img {
    background-image: url("https://static-blog.onlyoffice.com/images/icons/search-icon.react.svg");
  }

  .close-icon {
    cursor: pointer;
    background-image: url("https://static-blog.onlyoffice.com/images/icons/close-icon.react.svg");
  }
`;
export default StyledSearchArea;
