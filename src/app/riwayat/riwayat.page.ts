import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
})
export class RiwayatPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const currentUrl = this.router.url;
    if (currentUrl !== '/tabs/riwayat') {
      this.router.navigateByUrl('/tabs/riwayat');
    }
  }

}
