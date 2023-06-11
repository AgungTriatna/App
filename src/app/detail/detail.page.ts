import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute,
    private navCtrl: NavController, private navParams: NavParams
  ) { }

  ngOnInit() {
    const state = JSON.parse(this.navParams.get('state'));
    if (state && state.data) {
      const data = state.data;
      console.log(data); // Menampilkan data yang diterima
    }
  }
}
