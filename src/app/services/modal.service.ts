import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  isModalOpen(id: string): boolean {
    return !!this.modals.find(el => el.id === id)?.visible;
  }

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter(el => el.id !== id);
  }

  toggleModal(id: string): void {
    const modal = this.modals.find(el => el.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
  }

}
