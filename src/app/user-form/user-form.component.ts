import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostDataService } from '../post-data.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  packageForm: FormGroup;
  netto;
  brutto;


  constructor (private formBuilder: FormBuilder,
    private route: ActivatedRoute, private API: PostDataService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.packageForm = this.formBuilder.group({
      height: ['', Validators.required],
      width: ['', Validators.required],
      length: ['', Validators.required],
      senderName: ['', Validators.required],
      senderSurname: ['', Validators.required],
      senderCity: ['', Validators.required],
      senderStreet: ['', Validators.required],
      senderApartment: ['', Validators.required],
      senderPhoneNumber: ['', Validators.required],
      receiverName: ['', Validators.required],
      receiverSurname: ['', Validators.required],
      receiverCity: ['', Validators.required],
      receiverStreet: ['', Validators.required],
      receiverApartment: ['', Validators.required],
      receiverPhoneNumber: ['', Validators.required]
    });
  }

  get f() { return this.packageForm.controls; }

  onSubmit() {
    console.log("test");
    if (this.packageForm.invalid) {
      this.toastr.warning("Musisz uzupełnić wszystkie pola poprawnie.")
    }
    else {
      this.API.postForm(this.packageForm.value)
        .pipe(first())
        .subscribe(
          data => {
            console.log("data");
            this.API.getPrice(this.f.length.value, this.f.height.value, this.f.width.value).subscribe(
              data => {
                console.log(data)
                this.brutto = data['brutto'];
                this.netto = data['netto'];
              }, 
              error => {

              }
            )
          },
          error => {
            console.log("error")
          });
    }

  }
}
