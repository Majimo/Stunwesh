import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
  }

  goToEquipes() {
    console.log('1');
    this.router.navigate(['admin/equipes']);
    console.log('3')
    // alert('sans rien dedans');
  }
}
