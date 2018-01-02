const Impex = require("../lib").Impex;

test("Expect impex to be instance of Impex", () => {
  let impex = new Impex();

  expect(impex).toBeInstanceOf(Impex);
});
