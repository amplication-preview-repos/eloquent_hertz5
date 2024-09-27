import { Module } from "@nestjs/common";
import { MessageBoardModuleBase } from "./base/messageBoard.module.base";
import { MessageBoardService } from "./messageBoard.service";
import { MessageBoardController } from "./messageBoard.controller";
import { MessageBoardResolver } from "./messageBoard.resolver";

@Module({
  imports: [MessageBoardModuleBase],
  controllers: [MessageBoardController],
  providers: [MessageBoardService, MessageBoardResolver],
  exports: [MessageBoardService],
})
export class MessageBoardModule {}
