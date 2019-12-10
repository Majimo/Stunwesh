import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss']
})
export class InfosPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
  }
}
