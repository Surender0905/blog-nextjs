import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../lib/post-util";

const AllPostsPage = (props) => {
  return (
    <div>
      <AllPosts posts={props.posts} />
    </div>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },

    revalidate: 100,
  };
}

export default AllPostsPage;
