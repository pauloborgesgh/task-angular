import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../model/task.model';
import { environment } from '../../../../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private readonly httpClient = inject(HttpClient)


public tasks = signal<Task[]>([])

public numberOfTasks = computed(() => {
  this.tasks().length
})
public  readonly apiUrl = environment.apiUrl

public getTasks():Observable<Task[]>{
  return this.httpClient.get<Task[]>(`${this.apiUrl}/tasks`).pipe(
    tap(tasks => {
      const sortedTasks = this.getSordedTasks(tasks)
      this.tasks.set(sortedTasks)
})
  )
}
public createTask(task:Partial<Task>):Observable<Task>{
  return this.httpClient.post<Task>(`${this.apiUrl}/tasks`, task)
}


public getSordedTasks(tasks:Task[]):Task[]{
  return tasks.sort((a,b) => (a.tittle.localeCompare(b.tittle)))
}
public insertATaskInList(newTask:Task):void{
  const updatedTasks = [...this.tasks(),newTask]
  const sortedTasks = this.getSordedTasks(updatedTasks)

  this.tasks.set(sortedTasks)

}
public updateTask(updatedTasks:Task):Observable<Task>{
  return this.httpClient.put<Task>(`${this.apiUrl}/tasks/${updatedTasks.id}`, updatedTasks)

}  


public updateATaskInTheList(updatedTasks:Task):void{
  this.tasks.update(tasks => {
    const allTasksWithUpadeTaskRemoved = tasks.filter(task =>
      task.id !== updatedTasks.id);

  const updatedTasksList = [...allTasksWithUpadeTaskRemoved, updatedTasks];
  
  return this.getSordedTasks(updatedTasksList)

  })
}


public removeATaskFromList(task:Task):void{
  const tasks = this.tasks()
  tasks.splice(tasks.indexOf(task),1)
  this.tasks.set(tasks)
}

public deleteTaskInTheList(taskId:string):void{ 
  this.tasks.update(tasks => {
    return tasks.filter(task => task.id !== taskId)
  })

  
}

public deleteTask(taskId:string):Observable<Task>{
  return this.httpClient.delete<Task>(`${this.apiUrl}/tasks/${taskId}`)
}

public updateisCompletedStatus  (taskId:string , isCompleted:boolean):Observable<Task>{
  return this.httpClient.patch<Task>(`${this.apiUrl}/tasks/${taskId}`, {isCompleted: !isCompleted})
}
}