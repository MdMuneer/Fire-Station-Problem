// call.js

class Call {
  constructor(id, priority) {
    this.id = id;
    this.priority = priority;
    this.status = "queued";
  }

  changePriority(newPriority) {
    console.log(
      `Call ${this.id} priority has been updated from ${this.priority} to ${newPriority}. Reassignment in progress.`
    );

    this.priority = newPriority;
  }

  deallocateEmployee() {
    this.status = "onHold";
  }
}

export default Call;
