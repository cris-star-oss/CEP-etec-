import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  dadosCEP: any;
  cep: string;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // With Routing in Ionic, The OnInit lifecycle hook
    // may not get called consistently.
  }

  ngOnDestroy() {
    // Likewise, this will may not consistently fire when you navigate away
    // from the component
    console.log('LoginPage - OnDestroy');
  }

  // However, Ionic provides lifecycle hooks of its own that
  // will fire consistently during route navigation

  ionViewWillEnter() {
    // This method will be called every time the component is navigated to
    // On initialization, both ngOnInit and this method will be called

    console.log('LoginPage - ViewWillEnter');
  }

  ionViewWillLeave() {
    // This method will be called every time the component is navigated away from
    // It would be a good method to call cleanup code such as unsubscribing from observables

    console.log('LoginPage - ViewWillLeave');
  }

  LocalizarCEP() {
    this.http
      .get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .subscribe((res) => {
        //console.log(res);
        this.dadosCEP = res;
      });
    console.log(this.dadosCEP);
  }
}
