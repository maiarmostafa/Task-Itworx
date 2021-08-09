import { ClassItemService } from './../../../Services/class-item.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private classItemService:ClassItemService) { }

  schoolDetails: FormGroup
  schoolArray: FormArray
  schoolList = ['Cairo English School','British international schools in Cairo','Saint Georges college'];
  grades = [1,2,3];

  ngOnInit(): void {

    this.schoolDetails = new FormGroup({
      'school': new FormControl(null, Validators.required),
      'schoolArray': new FormArray([])
    })
    this.schoolArray = this.schoolDetails.get('schoolArray') as FormArray;
    this.schoolArray.push(this.createItem());
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      section: new FormControl(null, Validators.maxLength(3)),
      className: new FormControl(null, Validators.required),
      grade: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.schoolDetails.valid) {
    this.classItemService.addNewClassItem( {schoolName:this.schoolDetails.value.school,classItems:this.schoolDetails.value.schoolArray});
    this.onCancel();
    }
  }

  onAddClass() {
    if (this.schoolDetails.valid) {
      this.schoolArray = this.schoolDetails.get('schoolArray') as FormArray;
      this.schoolArray.push(this.createItem());
    }
  }

  onCancel() {
    const controls = this.schoolDetails.get('schoolArray')['controls'];
    this.schoolDetails.get('schoolArray')['controls'] = controls.filter((item, index) => {
    return index === 0;
    })
    this.schoolArray.reset();
  }

  deleteRow(e) {
    this.schoolArray = this.schoolDetails.get('schoolArray') as FormArray;
    this.schoolArray.removeAt(e)
  }

}
