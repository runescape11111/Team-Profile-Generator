const { it, describe, expect } = require("@jest/globals");
const Employee = require("../lib/employee");
const name = "Oli";
const id = 5;
const email = "olivershih@gmail.com";

describe("Employee",() => {
    describe("Initialization", () => {

        it("should throw an error with an invalid name input", () => {
            const cb = () => new Employee([],id,email);
            const err = new Error("Expected parameter 'name' to be a non empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error with an invalid id input", () => {
            const cb = () => new Employee(name,[],email);
            const err = new Error("Expected parameter 'id' to be a positive integer");

            expect(cb).toThrowError(err);
        });

        it("should throw an error with an invalid email input", () => {
            const cb = () => new Employee(name,id,[]);
            const err = new Error("Expected parameter 'email' to be a valid email address");

            expect(cb).toThrowError(err);
        });

        it("should return an object with properties: name, id, email, and role when called with the 'new' keyword", () => {
            const obj = new Employee(name,id,email);
            
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.role).toEqual("Employee");
        });

    });
    
    describe("getName", () => {
        it("should return the name of the employee", () => {
            const obj = new Employee(name,id,email);

            const objName = obj.getName();
            
            expect(objName).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the id of the employee", () => {
            const obj = new Employee(name,id,email);

            const objId = obj.getId();
            
            expect(objId).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            const obj = new Employee(name,id,email);

            const objEmail = obj.getEmail();
            
            expect(objEmail).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const obj = new Employee(name,id,email);

            const objRole = obj.getRole();
            
            expect(objRole).toEqual("Employee");
        });
    });
})