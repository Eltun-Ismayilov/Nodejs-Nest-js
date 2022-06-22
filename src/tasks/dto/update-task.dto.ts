/* eslint-disable prettier/prettier */

import { IsEnum } from 'class-validator';
import { TaskStatus } from '../Model/task.modul';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
