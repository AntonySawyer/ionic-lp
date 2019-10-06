import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public menu: MenuController,
    public userData: UserData,
    public router: Router
  ) { }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
