const Intern = require("../lib/intern");
const name = "Oli";
const id = 5;
const email = "olivershih@gmail.com";
const school = "Monash University";

describe("Intern", () => {
    describe("Initialization", () => {

        it("should throw an error with an invalid school input", () => {
            const cb = () => new Intern(name,id,email,[]);
            const err = new Error("Expected parameter 'school' to be a string");

            expect(cb).toThrowError(err);
        });

        it("should return an object with properties: name, id, email, role, and school when called with the 'new' keyword", () => {
            const obj = new Intern(name,id,email,school);
            
            expect(obj.role).toEqual("Intern");
            expect(obj.school).toEqual(school);
        });
    });

    describe("getSchool", () => {
        it("should return the school of the intern", () => {
            const obj = new Intern(name,id,email,school);
            const objSchool = obj.getSchool();

            expect(objSchool).toEqual(school);
        });
    });
});