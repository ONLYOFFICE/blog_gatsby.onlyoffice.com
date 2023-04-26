import StyledPostContent from "./styled-post-content";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import DateFormat from "@components/screens/common/date-format";
import Heading from "@components/common/heading";
import Tag from "@components/common/tag";
import InternalLink from "@components/common/internal-link";
import ExternalLink from "@components/common/external-link";
import Breadcrumbs from "@components/screens/common/breadcrumbs";
import CloudBlock from "./cloud-block";
import RecentPosts from "./recent-posts";
import Comments from "./comments";
import ShareButtons from "./share-buttons";
import SyntaxHighlighter, { github } from 'react-syntax-highlighter';

const PostContent = ({ t, currentLanguage, post, posts, isPostContent }) => {
  const options = {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'pre') {
        const props = attributesToProps(domNode.attribs);
        return <SyntaxHighlighter {...props} language="javascript" style={github}>
          {domToReact(domNode.children)}
        </SyntaxHighlighter>;
      }
    }
  };

  return (
    <StyledPostContent>
      <Breadcrumbs t={t} data={post?.categories?.edges} isPostContent={isPostContent} />

      <div className="content">
        <article>
          <Heading className="title" level={1}>{post?.title}</Heading>
          <div className="info-content">
            <span className="date">
              <DateFormat currentLanguage={currentLanguage} data={post?.date} format="D MMMM y" />
            </span>
            <span className="author">
              {currentLanguage === "ja" ? "著者：" : currentLanguage === "zh-hans" ? "作者: " : "By "}
              <InternalLink href={`/author/${post?.author.node.slug}`}>{post?.author.node.name}</InternalLink>
            </span>
            {/* <span className="comments">{post?.commentCount === null ? 0 : post?.commentCount}</span> */}
            {/* <span className="views">{post?.viewCount === null ? 0 : post?.viewCount}</span> */}

            <ShareButtons />
          </div>
          <div className="entry-content">{post?.content ? parse(post?.content, options) : ""}</div>
        </article>

        <div className="tag-list">
          {
            post?.tags?.edges.length > 0 &&
            <div className="tag-items">
              {post?.tags?.edges.map(({node}) => (
                <Tag href={`/tag/${node.slug}`} key={node.id}>{node.name}</Tag>
              ))}
            </div>
          }
          <div className="tag-share">
            <ShareButtons />
          </div>
        </div>

        <CloudBlock t={t} currentLanguage={currentLanguage} />

        {
          post?.discoursePermalink && 
          <div className="join-discussion">
            <ExternalLink href={post.discoursePermalink}>{t("Join the Discussion")}</ExternalLink>
          </div>
        }
        {/* <Comments t={t} currentLanguage={currentLanguage} post={post} /> */}
      </div>

      <RecentPosts t={t} data={posts} />
    </StyledPostContent>
  );
};

export default PostContent;
