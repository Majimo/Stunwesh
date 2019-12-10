import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.page.html',
  styleUrls: ['./tournoi.page.scss']
})
export class TournoiPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
  }
}
