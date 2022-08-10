import Image from "next/image";
import React from "react";

import classes from "./post-header.module.css";

const PostHeader = (props) => {
  const { title, image } = props;

  const imagePath = `/images/blog/${image}`;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={300} height={300} />
    </header>
  );
};

export default PostHeader;
