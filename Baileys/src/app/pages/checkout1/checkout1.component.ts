import { Component, OnInit, Inject } from '@angular/core';
import { CrudService } from '../../crud/crud.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.css'],
})
export class Checkout1Component implements OnInit {
  memberForm: FormGroup;
  ngOnInit() {
    this.memberForm = this.fb.group({
      name: [''],
      membershiptype: ['Basic'],
      productid: [uuidv4()],
    });
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: CrudService
  ) {}
  submitForm() {
    this.crudService.create(this.memberForm.value).subscribe((res) => {
      console.log('Product created!');
      this.router.navigateByUrl('/home');
    });
  }
}
