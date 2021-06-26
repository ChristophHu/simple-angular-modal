import { Component } from '@angular/core';
import { ModalService } from './shared/components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-angular-modal';

  constructor(private modalService: ModalService) { }
  
  openModal(id: string) {
    this.modalService.open(id)
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }
}
