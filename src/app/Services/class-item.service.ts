
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { classItem } from '../Components/models/classItem';
import { school } from '../Components/models/school';

@Injectable({
  providedIn: 'root'
})
export class ClassItemService {
  ClassItemSubject:Subject<school>=new Subject();
  constructor() { }
  addNewClassItem(item:school){
    this.ClassItemSubject.next(item)
  }

}
