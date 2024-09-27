/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MessageBoard as PrismaMessageBoard } from "@prisma/client";

export class MessageBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MessageBoardCountArgs, "select">
  ): Promise<number> {
    return this.prisma.messageBoard.count(args);
  }

  async messageBoards(
    args: Prisma.MessageBoardFindManyArgs
  ): Promise<PrismaMessageBoard[]> {
    return this.prisma.messageBoard.findMany(args);
  }
  async messageBoard(
    args: Prisma.MessageBoardFindUniqueArgs
  ): Promise<PrismaMessageBoard | null> {
    return this.prisma.messageBoard.findUnique(args);
  }
  async createMessageBoard(
    args: Prisma.MessageBoardCreateArgs
  ): Promise<PrismaMessageBoard> {
    return this.prisma.messageBoard.create(args);
  }
  async updateMessageBoard(
    args: Prisma.MessageBoardUpdateArgs
  ): Promise<PrismaMessageBoard> {
    return this.prisma.messageBoard.update(args);
  }
  async deleteMessageBoard(
    args: Prisma.MessageBoardDeleteArgs
  ): Promise<PrismaMessageBoard> {
    return this.prisma.messageBoard.delete(args);
  }
}
