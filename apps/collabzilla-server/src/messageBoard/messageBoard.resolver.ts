import * as graphql from "@nestjs/graphql";
import { MessageBoardResolverBase } from "./base/messageBoard.resolver.base";
import { MessageBoard } from "./base/MessageBoard";
import { MessageBoardService } from "./messageBoard.service";

@graphql.Resolver(() => MessageBoard)
export class MessageBoardResolver extends MessageBoardResolverBase {
  constructor(protected readonly service: MessageBoardService) {
    super(service);
  }
}
