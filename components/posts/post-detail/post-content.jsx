import ReactMarkdown from "react-markdown";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const PostContent = (props) => {
  const { title, image, content } = props.post;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={image} />

      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
