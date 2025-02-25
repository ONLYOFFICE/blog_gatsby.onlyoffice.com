import StyledAdventAnnounceBanner from "./styled-advent-announce-banner";
import { AdventAnnounce } from "onlyoffice-react-ui-kit/advent-announce";
import "onlyoffice-react-ui-kit/advent-announce/css";

const AdventAnnounceBanner = ({ locale, stateMobile }) => {
  return (
    <StyledAdventAnnounceBanner locale={locale} className={`advent-announce-banner ${stateMobile ? "active" : ""}`}>
      <div className={`advent-announce-banner-wrapper ${stateMobile ? "is-open" : ""}`}>
        <AdventAnnounce locale={locale} />
      </div>
    </StyledAdventAnnounceBanner>
  )
}

export default AdventAnnounceBanner;