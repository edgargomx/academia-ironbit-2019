/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../battery-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<battery-component></battery-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
