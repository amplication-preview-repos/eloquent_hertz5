import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MessageBoardServiceBase } from "./base/messageBoard.service.base";

@Injectable()
export class MessageBoardService extends MessageBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
