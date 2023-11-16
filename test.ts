import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class Test {
  sum(a: number, b: number) {
    return a + b;
  }
}
