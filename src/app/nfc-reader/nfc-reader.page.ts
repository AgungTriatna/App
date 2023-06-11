import { Component, OnInit } from '@angular/core';
import { NfcService } from '../service/nfc.service';

@Component({
  selector: 'app-nfc-reader',
  templateUrl: './nfc-reader.page.html',
  styleUrls: ['./nfc-reader.page.scss'],
})
export class NfcReaderPage implements OnInit {

  constructor(private nfcService: NfcService) { }

  ngOnInit() {
    this.startNfcReading();
  }

  startNfcReading() {
    this.nfcService.readNfcTag();
  }

}
