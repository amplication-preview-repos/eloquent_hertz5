import { MessageBoard as TMessageBoard } from "../api/messageBoard/MessageBoard";

export const MESSAGEBOARD_TITLE_FIELD = "id";

export const MessageBoardTitle = (record: TMessageBoard): string => {
  return record.id?.toString() || String(record.id);
};
