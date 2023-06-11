import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.page.html',
  styleUrls: ['./modal-input.page.scss'],
})
export class ModalInputPage {
  form = {
    nik: '',
    nama: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    jenis_kelamin: '',
    alamat: '',
    agama: '',
    status_perkawinan: '',
    pekerjaan: '',
    kewarganegaraan: '',
    berlaku_hingga: '',
  };

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private StorageService: StorageService,
  ) { }


  inputCheck() {
    if (
      !this.form.nik ||
      !this.form.nama ||
      !this.form.tempat_lahir ||
      !this.form.tanggal_lahir ||
      !this.form.jenis_kelamin ||
      !this.form.alamat ||
      !this.form.agama ||
      !this.form.status_perkawinan ||
      !this.form.pekerjaan ||
      !this.form.kewarganegaraan ||
      !this.form.berlaku_hingga
    ) {
      this.toastController.create({
        message: 'Mohon lengkapi data',
        duration: 2000,
        color: 'danger'
      }).then(toast => toast.present());

      return false;
    }
    return true;
  }

  sendToTelegram() {

    const isValid = this.inputCheck();
    if (!isValid) return;

    const botToken = '5841137712:AAHuuAlzMRFwDCPv1_x15j4qtk1PbV1igY0'; // Ganti dengan token akses bot Anda
    const chatId = '1271593414'; // Ganti dengan ID obrolan tujuan Anda
    const message = this.generateMessage();
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('text', message);

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        this.StorageService.addData(this.form);
        this.toastController.create({
          message: 'Data berhasil dikirimkan',
          duration: 2000,
          color: 'success' // Mengubah warna menjadi 'success' (hijau)
        }).then(toast => toast.present());

      })
      .catch((error) => {
        this.toastController.create({
          message: 'Data Gagal di Kirim',
          duration: 2000,
          color: 'danger'
        }).then(toast => toast.present());
      });
  }

  generateMessage(): string {

    const message = `NIK: ${this.form.nik}\n` +
      `Nama: ${this.form.nama}\n` +
      `Tempat Lahir: ${this.form.tempat_lahir}\n` +
      `Tanggal Lahir: ${this.form.tanggal_lahir}\n` +
      `Jenis Kelamin: ${this.form.jenis_kelamin}\n` +
      `Alamat: ${this.form.alamat}\n` +
      `Agama: ${this.form.agama}\n` +
      `Status Perkawinan: ${this.form.status_perkawinan}\n` +
      `Pekerjaan: ${this.form.pekerjaan}\n` +
      `Kewarganegaraan: ${this.form.kewarganegaraan}\n` +
      `Berlaku Hingga: ${this.form.berlaku_hingga}`;

    return message;
  }


  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
