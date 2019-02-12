import Link from "next/link";
export default () => (
  <div>
    <h1>About this project</h1>
    <p>There is really two projects going on here.</p>
    <p>1) The salt water aquarium </p>
    <p>2) Building this blog</p>
    <p>
      The idea is that I have a fresh install of my OS. I have installed zero
      dependencies. I will use the cloud. codesandbox -> github -> now.sh
    </p>
    <p>This websites style and code will change each day</p>
    <p>
      Each article will have its place in history. That is if it has no color,
      then it won't have color in the end.
    </p>
    <div>
      <Link href="/day1">
        <a>Day 1 - Research</a>
      </Link>
    </div>
    <div>
      <Link href="/about">
        <a>About this Project </a>
      </Link>
    </div>
  </div>
);
