import test from "ava";
import { sum } from "./sum";

test("sum should return the sum of two numbers", (t) => {
  t.is(sum(2, 3), 5);
  t.is(sum(-1, 5), 4);
  t.is(sum(0, 0), 0);
});
