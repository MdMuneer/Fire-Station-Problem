class Employee {
  constructor(id, name, level) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.status = "free";
  }

  handleCall(call, employees) {
    if (this.status === "free") {
      const selectedEmployee = this.getAvailableSelectedEmployee(
        employees,
        call.priority
      );

      if (selectedEmployee) {
        console.log(
          `${selectedEmployee.level} ${selectedEmployee.name} is handling call ${call.id}.`
        );
        selectedEmployee.status = "busy";
        call.status = "in progress";
        this.scheduleCallCompletion(call, selectedEmployee);
      } else {
        console.log(`${this.level} ${this.name} is busy.`);
      }
    } else {
      console.log(`${this.level} ${this.name} is busy.`);
    }
  }

  scheduleCallCompletion(call, selectedEmployee) {
    setTimeout(() => {
      this.finishCall(call, selectedEmployee);
    }, Math.random() * 3000 + 3000);
  }

  finishCall(call, selectedEmployee) {
    console.log(
      `Call (ID:${call.id}) handled by ${selectedEmployee.name} - ${selectedEmployee.level} has been completed.`
    );

    call.status = "finished";
    selectedEmployee.status = "free";
  }

  getAvailableSelectedEmployee(employees, priority) {
    const availableLevels = this.getAvailableLevels(priority);
    return employees.find(
      (emp) => emp.status === "free" && availableLevels.includes(emp.level)
    );
  }

  getAvailableLevels(priority) {
    if (priority === "Low") {
      return ["Junior", "Senior", "Manager"];
    } else if (priority === "High") {
      return ["Manager", "Director"];
    }
    return [];
  }
}

export default Employee;
