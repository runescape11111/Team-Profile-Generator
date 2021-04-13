const Employee = require("./employee");

class Manager extends Employee {
    constructor(name,id,email,officeNum) {
        super(name,id,email);

        if(isNaN(officeNum)) {
            throw new Error("Expected parameter 'office number' to be a number");
        };

        this.officeNum = officeNum;
        this.role = "Manager";
    };

    getOfficeNum() {
        return this.officeNum;
    };
};

module.exports = Manager;