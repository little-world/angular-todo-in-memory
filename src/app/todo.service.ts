import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "./todo";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl: string = 'api/todos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl)
  }

  save(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, this.httpOptions)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.todoUrl + '/' + id, this.httpOptions)
  }
}
