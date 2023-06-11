import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { StorageService } from '../service/storage.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';




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
    private StorageService: StorageService,
    private toastController: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.getAllData();
    this.isLoaded = true;
  }


  async getAllData() {
    const data = await this.StorageService.getAllData();
    console.log(data);
    this.data = data;
  }

  goToDetail(data: any) {
    this.router.navigate(['/detail'], {
      state: {
        data: data
      }
    });
  }

  async presentToast(data: any) {
    const toast = await this.toastController.create({
      message: `NIK: ${data.nik} ----------------------------                              
              Nama: ${data.nama} -------------- --------------                                      
              Tempat Lahir: ${data.tempat_lahir}      ----------------------------                            
              Tanggal Lahir: ${data.tanggal_lahir}   -------------- --------------                             
              Jenis Kelamin: ${data.jenis_kelamin}   --------------  --------------                              
              Alamat: ${data.alamat}               --------------    --------------    
              Agama: ${data.agama}                --------------   --------------       
              Status Perkawinan: ${data.status_perkawinan}  ----------------------------                       
              Pekerjaan: ${data.pekerjaan}                   --------------  --------------     
              Kewarganegaraan: ${data.kewarganegaraan}        -------------- --------------                 
              Berlaku Hingga: ${data.berlaku_hingga}`,
      duration: 9000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
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
