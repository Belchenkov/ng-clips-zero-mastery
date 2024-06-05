import {
  Component,
  Input,
  OnInit,
  ElementRef,
  OnDestroy,
} from '@angular/core';

import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId = '';

  constructor(
    public modal: ModalService,
    public el: ElementRef,
  ) { }

  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal(): void {
    this.modal.toggleModal(this.modalId);
  }
}
