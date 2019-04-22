import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { controlNameBinding } from 'node_modules/@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {

  nestedForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.nestedForm = this._fb.group({
      enterName: this._fb.array([this.addNameGroup()]),
      name: [null, [Validators.required]]
    });
  }

  addNameGroup() {
    return this._fb.group({
      nameWorker: [null, [Validators.required, Validators.minLength(2)]]
      });
  }

  addName() {
    this.workerNameArrays.push(this.addNameGroup());
  }

  removeName(index) {
    this.workerNameArrays.removeAt(index);
  }

  // get nameWorker() {
  //   return this.nestedForm.get('nameWorker');
  // }

  get name() {
    return this.nestedForm.get('name');
  }

  get workerNameArrays() {
    return <FormArray>this.nestedForm.get('enterName');
  }

  submitHandler() {
    if (this.nestedForm.valid) {
      console.log({...this.nestedForm.value});
    }
  }
}
  