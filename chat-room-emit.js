const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  join(user) {
    console.log(`${user} join the chat room`);
    this.emit("join", user);
  }

  sendMessage(user, message) {
    console.log(`${user} sent a messaje ${message}`);
    this.emit("message", user, message);
  }
}

const chatRoom = new ChatRoom();

chatRoom.on("join", (user) => {
  console.log(`Welcome ${user}!`);
});

chatRoom.on("message", (user, messsage) => {
  console.log(`New message from ${user}: ${messsage}`);
});

chatRoom.join("Jhon");
chatRoom.join("Jann");
chatRoom.sendMessage("jhon:", "Hello word!");
chatRoom.sendMessage("janne", "¡Hello world!");
