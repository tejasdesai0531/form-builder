import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-builder';

  form = [
    {
      id: 'name',
      label: 'Country Name',
      placeholder: 'Please Enter Country Name',
      field_type: 'INPUT',
      value: null,
      validations: ['REQUIRED'],
      errorMessage: '',
      isTouched: false,
      visibility: true
    },
    {
      id: 'code',
      label: 'Country Code',
      placeholder: 'Please Enter Country Code',
      field_type: 'INPUT',
      value: null,
      validations: ['REQUIRED'],
      errorMessage: '',
      isTouched: false,
      visibility: true
    },
    {
      id: 'status',
      label: 'Status',
      placeholder: 'Please Select Status',
      options: [
        { value: true, text: 'Active' },
        { value: false, text: 'In Active'}
      ],
      field_type: 'SELECT',
      multiple: false,
      value: null,
      validations: ['REQUIRED'],
      errorMessage: '',
      isTouched: false,
      visibility: true
    },
    {
      id: 'image',
      label: 'Image',
      placeholder: 'Please Enter Image URL',
      field_type: 'INPUT',
      value: null,
      validations: [],
      errorMessage: '',
      isTouched: false,
      rules: [
        {
          type: 'VISIBILITY',
          when: 'status',
          equalTo: true,
          validations: ['REQUIRED']
        }
      ],
      visibility: false
    }
  ]
}
