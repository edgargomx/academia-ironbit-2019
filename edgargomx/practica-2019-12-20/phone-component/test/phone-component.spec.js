/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../phone-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<phone-component></phone-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
