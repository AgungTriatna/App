import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NfcServiceService } from '../service/nfc-service.service';

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
    private nfcService: NfcServiceService,
    private alertController: AlertController
  ) { }

  sendToTelegram() {
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
        console.log('Message sent to Telegram:', data);
      })
      .catch((error) => {
        console.error('Error sending message to Telegram:', error);
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

  readNfcData() {
    this.nfcService.readNfcData()
      .then((data) => {
        this.form.nik = data.nik;
        this.form.nama = data.nama;
        this.form.tempat_lahir = data.tempat_lahir;
        this.form.tanggal_lahir = data.tanggal_lahir;
        this.form.jenis_kelamin = data.jenis_kelamin;
        this.form.alamat = data.alamat;
        this.form.agama = data.agama;
        this.form.status_perkawinan = data.status_perkawinan;
        this.form.pekerjaan = data.pekerjaan;
        this.form.kewarganegaraan = data.kewarganegaraan;
        this.form.berlaku_hingga = data.berlaku_hingga;
      })
      .catch((error) => {
        console.error('Error reading NFC data:', error);
        this.presentAlert('Error', 'Failed to read NFC data. Please try again.');
      });
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
