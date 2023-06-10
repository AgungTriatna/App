import { Component } from '@angular/core';

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

  constructor() { }

  sendToTelegram() {
    const botToken = '6279321249:AAGPh1WKSS0IG2QQ4rdd1rf-AAh9Z7ZYOsc'; // Ganti dengan token akses bot Anda
    const chatId = '1027772636'; // Ganti dengan ID obrolan tujuan Anda
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
    // Generate the message string based on the form data
    // You can customize the message format according to your needs
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
}
