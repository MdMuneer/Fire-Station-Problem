import Employee from "./employee.js";
import Call from "./call.js";
import DispatchCall from "./dispatch.js";

const employeesData = [
  { id: "1", name: "Steve", level: "Junior" },
  { id: "2", name: "John", level: "Junior" },
  { id: "3", name: "Turk", level: "Senior" },
  { id: "4", name: "Carla", level: "Senior" },
  { id: "5", name: "Jeff", level: "Junior" },
  { id: "6", name: "Troy", level: "Manager" },
  { id: "7", name: "Jack", level: "Manager" },
  { id: "8", name: "Elliot", level: "Director" },
  { id: "9", name: "Reacher", level: "Director" },
];

const testCallsData = [
  { id: "1", priority: "Low" },
  { id: "2", priority: "Low" },
  { id: "3", priority: "High" },
  { id: "4", priority: "Low" },
  { id: "5", priority: "Low" },
  { id: "6", priority: "High" },
  { id: "7", priority: "High" },
  { id: "8", priority: "Low" },
  { id: "9", priority: "Low" },
];

const employees = employeesData.map(
  (emp) => new Employee(emp.id, emp.name, emp.level)
);

const testCalls = testCallsData.map(
  (callData) => new Call(callData.id, callData.priority)
);

const simulateCalls = async () => {
  for (const call of testCalls) {
    await new Promise((resolve) => {
      setTimeout(() => {
        DispatchCall(call, employees);
        resolve();
      }, Math.random() * 3000);
    });
  }
};

simulateCalls();
