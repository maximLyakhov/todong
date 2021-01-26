import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit, AfterViewInit {

  todoGroup = this.fb.group({
    progressStatus: false,
    title: [''],
    description: [''],
    aliases: this.fb.array([
    ]),
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.aliases
  }

  onSubmit(gv: FormGroup){
    console.log(gv.value)
    gv.reset();
    this.addAlias()
  }

  get aliases() {
    return this.todoGroup.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''))
  }

  removeItem(i: number) {
    this.aliases.at(i);
  }

  ngAfterViewInit() {
    console.log(this.fb);
    console.log(this.aliases);
  }
}
