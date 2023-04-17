import StyledRecentPosts from "./styled-recent-posts";
import dynamic from "next/dynamic";
import Heading from "@components/common/heading";
import InternalLink from "@components/common/internal-link";

const RecentPosts = ({ t, currentLanguage, data }) => {
  const isRecentPosts = true;

  const DateFormat = dynamic(() => import("@components/screens/common/date-format"), {
    ssr: false
  });

  return (
    <StyledRecentPosts>
      <Heading level={4}>{t("Recent posts")}</Heading>

      <ul>
        {data.edges.map(({node}) => (
          <li className="post" key={node.id}>
            <InternalLink className="post-img" href={node?.uri}>
              <img src={node.featuredImage?.node.sourceUrl ? node.featuredImage?.node?.sourceUrl : node?.firstImgPost} alt={node?.title} />
            </InternalLink>
            <div className="post-body">
              <InternalLink className="post-title" href={node?.uri}>{node.title}</InternalLink>
              <div className="post-date">
                <DateFormat currentLanguage={currentLanguage} data={node.date} format="MMMM D, y" isRecentPosts={isRecentPosts} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </StyledRecentPosts>
  );
};

export default RecentPosts;