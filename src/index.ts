import { Session } from "./models/Session";

const client = new Session({ sessionName: "COVID_HELPER" });

client.onMessage((message) => {
  console.log(message.body);
});
