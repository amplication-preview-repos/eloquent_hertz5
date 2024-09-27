import { MessageBoardWhereInput } from "./MessageBoardWhereInput";
import { MessageBoardOrderByInput } from "./MessageBoardOrderByInput";

export type MessageBoardFindManyArgs = {
  where?: MessageBoardWhereInput;
  orderBy?: Array<MessageBoardOrderByInput>;
  skip?: number;
  take?: number;
};
