import { User } from './user.model';

export interface Amessage {
  id: string;
  title: string;
  createdTime: Date;
  content: string;
}
export interface Topic extends Amessage {
  messages?: ReplyMessage[];
}
export interface ReplyMessage extends Amessage {}
