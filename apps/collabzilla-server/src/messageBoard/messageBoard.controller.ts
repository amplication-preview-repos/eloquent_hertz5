import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MessageBoardService } from "./messageBoard.service";
import { MessageBoardControllerBase } from "./base/messageBoard.controller.base";

@swagger.ApiTags("messageBoards")
@common.Controller("messageBoards")
export class MessageBoardController extends MessageBoardControllerBase {
  constructor(protected readonly service: MessageBoardService) {
    super(service);
  }
}
