import { Injectable } from '@angular/core';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';

@Injectable({
  providedIn: 'root'
})
export class NfcService {

  constructor(private nfc: NFC, private ndef: Ndef) { }

  readNfcTag() {
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.nfc.readerMode(flags).subscribe(
      tag => console.log(JSON.stringify(tag)),
      err => console.log('Error reading tag', err)
    );
  }

}
