
import { Entity } from "./entity";
import { TransactionTypeEnum } from "./enums/TransactionTypeEnum";

export interface TransactionProps  {

  value: number;        
  description: string;
  type: TransactionTypeEnum;
}
