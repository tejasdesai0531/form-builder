import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.form)
  }

  submit() {
    this.markAllFieldAsTouched()
    this.doValidation()
  }

  valueChanges(event: any, field: any) {
    field.isTouched = true
    setTimeout(() => {
      this.doValidation()
    }, 100);
  }


  markAllFieldAsTouched() {
    this.form.forEach((field: any) => {
      field.isTouched = true
    })
  }

  doValidation() {

    console.log("Inside doValidation")

    this.form.forEach((field: any) => {

      for(let v of field.validations) {
        let error = this.validate(field.value, v)
        console.log(error)
        if(error) {
          field.errorMessage = error
          break
        } else {
          field.errorMessage = ''
        }
      }
    });
  }


  validate(value: any, type: any) {

    let errorMessage = ''

    switch(type) {
      case 'REQUIRED':
        errorMessage = !this.requiredValidation(value) ? 'This field is required' : ''
        break;
    }

    return errorMessage

  }

  requiredValidation(value: any) {
    if(!value) {
      return false
    } else {
      return true
    }
  }

}
