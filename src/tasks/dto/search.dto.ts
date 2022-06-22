/* eslint-disable prettier/prettier */
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../Model/task.modul';

export class GetTasksFilterDto {
  @IsOptional()//Axtaris zamani eger verilmirse 200ok qaytariri yox silinse status cod 
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  @IsOptional()
  @IsString()
  search?: string;
}
