class Employee {
    constructor(name,id,email) {

        if(typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non empty string");
        };

        if(!Number.isInteger(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a positive integer");
        };

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("Expected parameter 'email' to be a valid email address");
        };

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;