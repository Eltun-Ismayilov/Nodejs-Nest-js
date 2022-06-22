/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/search.dto';
import { UpdateTaskStatusDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './Model/task.modul';
import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@Controller({ path: 'Task', version: '1' })

export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({
    summary: 'List of Tasks',
    description: '[Public] Get list of Tasks',
  })
  @Get()
  Get(@Query() filterDto: GetTasksFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.search(filterDto);
    } else {
      return this.tasksService.getAllTasks();
    }
  }
  @ApiOperation({
    summary: 'Detils of given Tasks',
    description: '[Public] Detils of given Tasks',
})
  @Get('/:id')
  Details(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
  @ApiOperation({
    summary: 'Create Tasks',
    description: '[Public] Create Tasks',
})
  @Post()
  Create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
  @ApiOperation({
    summary: 'Delete Tasks',
    description: '[AuthRequired] Delete Tasks',
})
  @Delete('/:id')
  Delete(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
  @ApiOperation({
    summary: 'Update Tasks',
    description: '[AuthRequired] Update Tasks',
})
  @Put('/:id/status')
  Update(@Param('id') id: string, @Body() updateTaskStatusDto: UpdateTaskStatusDto): Task {
    const {status}=updateTaskStatusDto;
    return this.tasksService.updateTaskStatus(id, status);
  }
}
