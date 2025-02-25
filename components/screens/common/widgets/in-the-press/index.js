import StyledInThePress from "./styled-in-the-press";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import ExternalLink from "@components/common/external-link";
import InternalLink from "@components/common/internal-link";

const InThePress = ({ t, locale, inThePressPosts }) => {
  return (
    <StyledInThePress locale={locale}>
      <Heading className="in-the-press-title" level={4}>{t("ONLYOFFICE IN THE PRESS")}</Heading>

      <ul className="in-the-press-list">
        {inThePressPosts?.edges.map(({node}) => (
          <li key={node.id}>
            <ExternalLink href={node?.url} label={node.title} />
            <div className="in-the-press-date">
              <DateFormat locale={locale} data={node.dateNews} format="D MMM y" />
            </div>
          </li>
        ))}
      </ul>
      <InternalLink className="view-all" href="/onlyoffice-in-the-press">{t("View all posts")}</InternalLink>
    </StyledInThePress>
  );
};

export default InThePress;
