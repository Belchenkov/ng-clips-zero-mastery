import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth,
  ) {}

  ngOnInit(): void {
  }

  openModal($event: MouseEvent): void {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }

  async logout($event: Event): Promise<void> {
    $event.preventDefault();
    await this.afAuth.signOut();
  }
}
