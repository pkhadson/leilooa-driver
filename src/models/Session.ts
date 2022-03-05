import path from "path";
import * as wa from "@open-wa/wa-automate";

export type ConfigSession = {
  sessionName: string;
  //   create
};

type MessageFn = (message: wa.Message) => void;

export class Session {
  private session!: wa.Client;
  private subscribers: { onMessage: MessageFn[] } = { onMessage: [] };

  constructor(config: ConfigSession) {
    wa.create({
      sessionId: config.sessionName,
      multiDevice: true,
      authTimeout: 60,
      blockCrashLogs: true,
      disableSpins: true,
      headless: true,
      hostNotificationLang: wa.NotificationLanguage.PTBR,
      logConsole: false,
      popup: true,
      qrTimeout: 0,
      sessionDataPath: path.join(__dirname, "../../db/sessions/"),
    }).then((i) => {
      this.session = i;
      this.ready();
    });
  }

  ready() {
    this.session.onMessage((message) => {
      if (message.fromMe) return;
      this.subscribers.onMessage.forEach((cb) => cb(message));
    });

    this.subscribers.onMessage.push((message) => {
      console.log(message);
      // if(message.type==='text')
    });
  }

  onMessage(cb: MessageFn) {
    this.subscribers.onMessage.push(cb);
  }
}
