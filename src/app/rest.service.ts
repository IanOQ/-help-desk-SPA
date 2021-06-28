/*import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of } from 'rxjs';
import {map,catchError,tap} from 'rxjs/operators';

const endpoint = 'https://localhost:44330/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })

};


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {

  }

  private extractData(res: Response) {
    //let es como el var pero con un mejor alcance
    let body = res;
    return body || { };
  }


  getStudents(): Observable<any> {
    return this.http.get(endpoint + 'student/GetAllStudentsSP').pipe(
      map(this.extractData),
     catchError(this.handleError<any>('getStudents'))
      );
  }
  getStudent(id): Observable<any> {
    return this.http.get(endpoint + 'student/GetStudent/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudent'))
      );
  }

  addStudent (student): Observable<any> {
    console.log(student);
    return this.http.post<any>(endpoint + 'student/PostStudent', JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log('added student')),
      catchError(this.handleError<any>('addStudent'))
    );
  }
  updateStudent (student): Observable<any> {
    return this.http.put(endpoint + 'student/PutStudent', JSON.stringify(student), httpOptions).pipe(
      tap((student) => console.log('updated student')),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteStudent (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'student/DeleteStudent/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted student id=${id}`)),
      catchError(this.handleError<any>('deletestudent'))
    );
  }
  getNationalities(): Observable<any> {
    return this.http.get(endpoint + 'student/GetAllStudentsSP').pipe(
      map(this.extractData),
      catchError(this.handleError<any>('getStudents'))
      );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}*/
