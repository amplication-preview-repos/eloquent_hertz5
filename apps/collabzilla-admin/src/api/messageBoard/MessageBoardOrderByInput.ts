import { SortOrder } from "../../util/SortOrder";

export type MessageBoardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
