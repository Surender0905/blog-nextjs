import PostSGrid from "./posts-grid";

import classes from "./all-posts.module.css";

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostSGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
