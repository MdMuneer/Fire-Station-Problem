function DispatchCall(call, employees) {
  let availableEmployee = employees.find(emp => emp.status === "free");

  if (availableEmployee) {
    availableEmployee.handleCall(call, employees);
    call.deallocateEmployee();
    if (call.priority === "Low") {
      if (Math.random() < 0.5) {
        call.changePriority("High");
        DispatchCall(call, employees);
      }
    }
  } else {
    console.log("All lines busy, please hold for greatness!");
    
    call.status = "onHold";
    setTimeout(() => {
      DispatchCall(call, employees);
    }, Math.random() * 3000); 
  }
}

export default DispatchCall;
