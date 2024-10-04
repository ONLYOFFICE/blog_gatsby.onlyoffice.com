import styled from "styled-components";
import { device } from "@components/utils/devices";

const StyledDocSpaceBlock = styled.div`
  border-radius: 5px;
  padding: 48px 112px;
  text-align: center;
  box-shadow: 0px 7px 25px 0px #55555526;
  background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/blok_create account_bg.svg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  .docspace_block_icons {
    display: grid;
    grid-template-columns: repeat(5, 46px);
    gap: 32px;
    justify-content: center;

    .docspace_block_icon {
      width: 48px;
      height:46px;

      &.doc {
        height: 46px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/docs.svg");
        background-repeat: no-repeat;
        width: 48px;
        min-width: 48px;

        @media (max-width: 592px) {
          grid-area: A;
        }
      }

      &.spreadsheet {
        height: 46px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/spreadsheets.svg");
        background-repeat: no-repeat;
        width: 48px;
        min-width: 48px;

        @media (max-width: 592px) {
          grid-area: B;
        }
      }

      &.presentation {
        height: 46px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/presentation.svg");
        background-repeat: no-repeat;
        width: 48px;
        min-width: 48px;

        @media (max-width: 592px) {
          grid-area: C;
        }
      }

      &.pdf_form {
        height: 46px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/pdf_form.svg");
        background-repeat: no-repeat;
        width: 48px;
        min-width: 48px;

        @media (max-width: 592px) {
          grid-area: D;
        }
      }

      &.pdf {
        height: 46px;
        background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/pdf.svg");
        background-repeat: no-repeat;
        width: 48px;
        min-width: 48px;

        @media (max-width: 592px) {
          grid-column: E;
        }
      }

      @media (max-width: 592px) {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
      }
    }

    @media (max-width: 592px) {
      max-width: 254px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
    }
  }

  .docspace_block_title {
    margin-top: 32px;
    text-align: center;

    span {
      color: #FF6F3D;
      font-weight: 700;
    }
  }

  .docspace_block_subheader {
    margin-top: 16px;
    text-align: center;
  }

  .docspace_block_wrapper {
    margin-top: 32px;

    form {
      display: flex;
      position: relative;

      input {
        box-sizing: border-box;
        height: 56px;
        border-top: 1px solid rgb(170, 170, 170);
        border-bottom: 1px solid rgb(170, 170, 170);
        border-left: 1px solid rgb(170, 170, 170);
        border-image: initial;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        border-right: none;
        border-bottom-right-radius: initial;
        border-top-right-radius: initial;
        padding: 16px;
        font-size: 14px;
        line-height: 280%;
        color: rgb(51, 51, 51);

        @media (max-width: 592px) {
          width: 100%;
          height: 48px;
        }
      }

      .error-message {            
        position: absolute;
        top: 60px;
        left: 0;
        color: #ff0c3e;
        font-size: 12px;
        line-height: 19px;

        @media (max-width: 592px) {
          top: 48px;
          font-size: 10px;
        }
      }

      .docspace_block_btn {
        background: #FF6F3D;
        color: #FFFFFF;
        min-width: 140px;          
        border-radius: 0px 3px 3px 0px;
        font-size: 13px;
        font-weight: 600;
        line-height: 17.29px;
        letter-spacing: 0.04em;
        text-align: center;
        border: none;
        text-transform: uppercase;

        &:hover {
          cursor: pointer;
          background-color: #ff865c;
          color: #ffffff;
          opacity: 1;
        }

        @media (max-width: 592px) {
          padding: 0;
          min-width: initial;

          &.arrow {
            width: 48px;
            height: 48px;
            font-size: 0;
            position: relative;
            padding: 0;

            &:before {
              content: "";
              position: absolute;
              width: 24px;
              height: 24px;
              background-image: url("${process.env.NEXT_PUBLIC_STATIC_URL}/images/docspace-block/arrow.svg");
              top:12px;
              left:12px;
            }
          }
        }
      }

      @media (max-width: 592px) {
        display: grid;
        grid-template-columns: 1fr 48px;
      }
    }
  }

  @media ${device.laptop} {
    padding: 48px 53px;
    background-size: cover;
  }

  @media (max-width: 592px) {
    padding: 32px 16px;
  }
`;

export default StyledDocSpaceBlock;
