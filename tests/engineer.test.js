const Engineer = require("../lib/engineer");
const name = "Oli";
const id = 5;
const email = "olivershih@gmail.com";
const github = "runescape11111";

describe("Engineer", () => {
    describe("Initialization", () => {

        it("should throw an error with an invalid github input", () => {
            const cb = () => new Engineer(name,id,email,[]);
            const err = new Error("Expected parameter 'gitHub' to be a string");

            expect(cb).toThrowError(err);
        });

        it("should return an object with properties: name, id, email, role, and GitHub when called with the 'new' keyword", () => {
            const obj = new Engineer(name,id,email,github);
            
            expect(obj.role).toEqual("Engineer");
            expect(obj.github).toEqual(github);
        });
    });

    describe("getGithub", () => {
        it("should return the github of the engineer", () => {
            const obj = new Engineer(name,id,email,github);
            const objGithub = obj.getGithub();

            expect(objGithub).toEqual(github);
        });
    });
});