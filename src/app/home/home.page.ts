import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const currentUrl = this.router.url;
    if (currentUrl !== '/tabs/home') {
      this.router.navigateByUrl('/tabs/home');
    }
  }

}
