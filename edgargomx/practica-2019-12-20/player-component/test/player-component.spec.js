/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../player-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<player-component></player-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
