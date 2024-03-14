import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user-upser',
  templateUrl: './user-upser.component.html',
  styleUrls: ['./user-upser.component.css']
})
export class UserUpserComponent {
  public myForm: any;
  public isSubmitted: boolean = false;
  public checkuser: any
  public userdtcheck: any
  public checkmail: any

  constructor(private fb: FormBuilder, private api: DataService, private route: Router) {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', Validators.required],
      addr: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.api.display().subscribe((res: any) => {
      this.checkuser = res;
    });
    if (this.myForm.valid) {
      this.checkuser.forEach((el: any) => {
        if (el.email === this.myForm.value.email) {
          alert("user alredy exist")
        } else
          if (this.myForm.valid) {
            this.route.navigate(['user-list'])
            this.api.getData(this.myForm.value).subscribe((res: any) => {
            });
          }
      })
    }
  };

  // getter for easy access to form fields
  get f() {
    return this.myForm.controls;
  }


  ngOnInit() {
    this.editvalue()
  }

  editvalue() {
    this.myForm.patchValue(this.api.editData);
  }

  updateValue() {
    if (this.myForm.valid) {
      this.api.update(this.api.editData.id, this.myForm.value).subscribe((res: any) => {
        console.log(res)
        this.route.navigate(['user-list'])
      })
    }
  }
}

