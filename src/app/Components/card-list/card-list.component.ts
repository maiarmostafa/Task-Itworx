import { school } from './../models/school';
import { ClassItemService } from './../../Services/class-item.service';
import { classItem } from './../models/classItem';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
   schoolItems:school[]=[];
   classCounter:number=0;

  constructor(private classService:ClassItemService) { }

  ngOnInit(): void {
    this.classService.ClassItemSubject.subscribe((item:school)=>{
      this.schoolItems.push(item);
      console.log(this.schoolItems);

    });

  }
  getPosition(schoolIndex:number,classIndex:number){
    let position=0;
    for(let i=0;i<schoolIndex;i++){
      position+=this.schoolItems[i].classItems.length
    }
    position+=classIndex+1;
    return position;

  }

}
