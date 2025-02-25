import styled, { keyframes } from "styled-components";
import { device } from "@components/utils/devices";

const menuLineLeft = keyframes`
  0% {
    width: 0;
    left: 50%;
  }

  100% {
    width: 50%;
    left: 0;
  }
`;

const menuLineRight = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 50%;
  }
`;

const StyledLanguageSelector = styled.div`
  position: relative;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: transform .2s cubic-bezier(.16,.68,.43,.99);

  &.is-open {
    .language-list {
      display: block;

      &:before {
        animation: ${menuLineLeft} 0.3s forwards ease-in-out;
      }

      &:after {
        animation: ${menuLineRight} 0.3s forwards ease-in-out;
      }
    }

    .arrow-image {
      transform: translateY(0) rotate(180deg);
    }
  }

  .language-button {
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    min-height: 72px;
    background-color: transparent;

    @media screen and ${device.laptop} {
      min-height: 48px;
    }
  }

  .flag-image {
    padding-right: 5px;
  }

  .arrow-image,
  .flag-image {
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  .flag-image,
  .language-link {
    display: block;
    width: 24px;
    height: 24px;
    text-decoration: none;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/flags-1.svg");
    background-repeat: no-repeat;

    &.fr {
      background-position-y: -48px;
    }

    &.de {
      background-position-y: -72px;
    }

    &.es {
      background-position-y: -96px;
    }

    &.pt-br {
      background-position-y: -120px;
    }

    &.it {
      background-position-y: -144px;
    }

    &.cs {
      background-position-y: -168px;
    }

    &.ja {
      background-position-y: -216px;
    }

    &.zh-hans {
      background-position-y: -240px;
    }

    &.el {
      background-position-y: -288px;
    }

    &.hi {
      background-position-y: -312px;
    }

    &.ar {
      background-position-y: -336px;
    }

    &.sr {
      background-position-y: -360px;
    }

    &.hy {
      background-position-y: -384px;
    }
  }

  .arrow-image {
    width: 8px;
    height: 6px;
    transform: translateY(2px);
    outline: none;
    -webkit-tap-highlight-color: transparent;
    background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/icons/arrow-down.svg");
    background-repeat: no-repeat;
  }

  .title-lng {
    display: inline-block;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: #333;
    padding-left: 8px;
    vertical-align: middle;
    text-transform: uppercase;
    width: fit-content;
  }

  .language-list {
    position: absolute;
    top: 99%;
    left: 50%;
    display: ${(props) => (props.isOpen ? "block" : "none")};
    border-radius: 0 0 8px 8px;
    margin: 0;
    padding: 16px;
    max-width: 56px;
    z-index: 100;
    background-color: #ffffff;
    box-shadow: 0 20px 50px rgba(85,85,85,0.15);
    transform: translateX(-50%);
    list-style-type: none;

    &:before {
      display: block;
      position: absolute;
      width: 0;
      content: "";
      height: 1px;
      background-color: #FF642E;
      transition: width 0.2s ease-in-out;
      left: 50%;
      top: 0;
    }

    &:after {
      display: block;
      position: absolute;
      width: 0;
      content: "";
      height: 1px;
      background-color: #FF642E;
      transition: width 0.2s ease-in-out;
      left: 50%;
      top: 0;
    }
  }

  .language-item {
    outline: none;
    -webkit-tap-highlight-color: transparent;

    .language-item-image {
      margin-top: -1px;
    }
  
    .title-lng:hover {
      color: #ff865c;
      cursor: pointer;
    }
  }
`;

export default StyledLanguageSelector;
