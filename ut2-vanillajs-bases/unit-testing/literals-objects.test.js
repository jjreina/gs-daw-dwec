import * as literals from "./literals-objects";

describe("Access to objects literals properties", () => {
  it("should returns the street of person object", () => {
    expect(literals.getStreet()).toBe("C/ Larios");
  });

  it("should returns the country of person object", () => {
    expect(literals.getCountry()).toBe("USA");
  });

  it("should returns the age of person object", () => {
    expect(literals.getAgeViaFuction()).toBe(32);
  });

  it("should remove the number property of person object", () => {
    literals.removeNumbreAddressProperty();
    expect(literals.getNumbreAddress()).toBe(undefined);
  });

  it("should adds the Spanish nacionality to person object", () => {
    literals.addSpanishNacionalityAsNewProperty();
    expect(literals.getNacionalty()).toBe("Spanish");
  });

  it("should returns a array of object person", () => {
    let personArray = literals.getPersonArray();
    expect(personArray[0][0]).toBe("name");
    expect(personArray[1][0]).toBe("surname");
    expect(personArray[2][0]).toBe("country");
    expect(personArray[3][0]).toBe("age");
    expect(personArray[4][0]).toBe("getAge");
    expect(personArray[5][0]).toBe("address");
  });
});
