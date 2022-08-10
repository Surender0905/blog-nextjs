import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/post-util";

const SinglePostPage = (props) => {
  return (
    <div>
      <PostContent post={props.post} />
    </div>
  );
};

export function getStaticProps(context) {
  const { params } = context;

  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostFiles();

  const slugs = postFiles.map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default SinglePostPage;
