import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string = "";
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      if (!this.id) {
          console.error('modal got no id');
          return;
      }

      document.body.appendChild(this.element);

      this.element.addEventListener('click', (el: { target: { className: string; }; }) => {
          if (el.target.className === 'modal') {
              this.close();
          }
      });
      this.modalService.add(this);
  }

  ngOnDestroy(): void {
      this.modalService.remove(this.id);
      this.element.remove();
  }

  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('modal-open');
  }

  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('modal-open');
  }
}
