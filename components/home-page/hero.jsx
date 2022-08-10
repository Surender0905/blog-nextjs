/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/vercel.svg" alt="Hero" width={300} height={300} />
      </div>
      <div>
        <h1>Hi, I'm Roshan</h1>
        <p>
          I'm a web Developer based in India. I love building things that people
          use.
        </p>
      </div>
    </section>
  );
};

export default Hero;
