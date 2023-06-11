import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
})
export class RiwayatPage implements OnInit {

  data: any[] = [];
  isLoaded = false;

  constructor(
    private router: Router,
    private StorageService: StorageService) { }

  ngOnInit(): void {
    this.getAllData();
    this.isLoaded = true;
  }


  async getAllData() {
    const data = await this.StorageService.getAllData();
    console.log(data);
    this.data = data;
  }

  goToDetailPage() {
    this.router.navigateByUrl('/detail');
  }

  ionViewDidEnter() {
    const currentUrl = this.router.url;
    if (currentUrl !== '/tabs/riwayat') {
      this.router.navigateByUrl('/tabs/riwayat');
    }
  }

}
