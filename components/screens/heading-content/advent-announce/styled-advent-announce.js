import styled from "styled-components";

const StyledAdventAnnounce = styled.div`
  .advent-announce {
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    height: 56px;
    overflow: hidden;
    text-align: center;
    background-color: #AA5252;

    a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;

      @media (max-width: 1023px) {
        height: 48px;
      }
    }

    .advent-announce-text {
      position: relative;
      display: inline-block;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
      font-size: 15px;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.01em;
      height: 44px;
      color: #fff;
      text-decoration: none;
      z-index: 10;
      max-width: 595px;
      padding: 6px 0;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        display: block;
        height: 56px;
        z-index: -1;
        background-repeat: no-repeat;

        @media (max-width: 1023px) {
          height: 48px;
        }
      }

      &:before {
        background-image: url("https://static-blog.onlyoffice.com/images/banners/banner-left.svg");
        left: -436px;
        width: 419px;

        @media (max-width: 1023px) {
          background-image: url("https://static-blog.onlyoffice.com/images/banners/banner-left-mobile.svg");
          background-position: center;
          top: -16px;
          left: -61px;
          width: 68px;
          height: 68px;
          z-index: -1;
        }
      }

      &:after {
        background-image: url("https://static-blog.onlyoffice.com/images/banners/banner-right.svg");
        top: 8px;
        right: -360px;
        width: 352px;

        @media (max-width: 1023px) {
          background-image: url("https://static-blog.onlyoffice.com/images/banners/banner-right-mobile.svg");
          background-position: center;
          top: 0;
          right: -33px;
          width: 23px;
          height: 48px;
        }
      }

      @media (max-width: 1023px) {
        background-color: transparent;
        display: inline-block;
        height: auto;
        font-size: 13px;
        line-height: normal;
        padding: 15px 0;
      }
    }

    @media (max-width: 1023px) {
      &.is-open {
        transform: translate3d(429px, 0, 0);
        transition: transform .2s cubic-bezier(.16,.68,.43,.99);
      }
    }

    @media (max-width: 592px) {
      &.is-open {
        transform: translate3d(380px, 0, 0);
      }
    }

    @media (max-width: 430px) {
      &.is-open {
        transform: translate3d(288px, 0, 0);
      }
    }
  }

  .advent-desktop-hide {
    display: none;

    @media (max-width: 1023px) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
    }
  }

  .advent-mobile-hide {
    @media (max-width: 1023px) {
      display: none;
    }
  }

  &.es .advent-announce-text {
    max-width: 626px;
  }

  &.it .advent-announce-text {
    max-width: 606px;
  }

  &.ja .advent-announce-text {
    padding: 4px 0;

    @media (max-width: 1024px) {
      padding: 14px 0;
    }
  }

  @media (max-width: 1023px) {
    overflow-x: hidden;

    &.active {
      ~ header {
        overflow-x: hidden;
      }
    }
  }
`;

export default StyledAdventAnnounce;