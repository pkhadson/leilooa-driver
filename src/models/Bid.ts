import { Message } from "@open-wa/wa-automate";

export class Bid {
  constructor(private amount_cents: number, private client_id: string) {}
}
