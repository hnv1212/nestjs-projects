import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  getAllTasks(): Task[] {}

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    
  }

  getTaskById(id: string): Task {}

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
  }

  deleteTask(id: string): void {

  }

  updateTaskStatus(id: string, status: TaskStatus) {

  }
}
