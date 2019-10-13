import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm, FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
  styleUrls: ['./order.scss'],
})
export class OrderPage {
  orderForm: FormGroup = new FormGroup({

    firstName:  new FormControl('', [Validators.required]),
    lastName:  new FormControl('', [Validators.required]),
    email:  new FormControl('', [Validators.required, Validators.email]),
    address:  new FormControl('', [Validators.required]),
    phone:  new FormControl('', [Validators.required]),
    zip:  new FormControl('', [Validators.required]),
    city:  new FormControl('', [Validators.required])
  });

  submitted = false;

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router
  ) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.orderForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }
}
