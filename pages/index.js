import Link from "next/link";

import { ImmortalDB } from "immortal-db";
var db = new ImmortalDB({
  storage: ["IndexedDB", "LocalStorage", "SessionStorage"]
});
ImmortalDB.set("hi", "bonjour");
console.log(ImmortalDB.get("hi"));
export default () => (
  <div>
    <h1>Salinity & Hydration {countPlusOne}</h1>
    <p>
      This is a living document that will showcase the development cycle of a
      salt water aquarium.
    </p>
    It's been said that building a salt water aquarium are rather difficult for
    beginners.
    <p />
    <p>
      The amount of information is daunting. A waterfall of information. This
      site will showcase the difficulties that occur when somebody with zero
      knowledge decides to endure on building a salt water aquarium.
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
