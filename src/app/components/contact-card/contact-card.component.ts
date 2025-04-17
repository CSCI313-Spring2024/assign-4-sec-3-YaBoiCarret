import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-card',
  standalone: true, 
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
  imports: [] 
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();

  delete() {
    this.onDelete.emit(this.contact.id);
  }

  edit() {
    this.onEdit.emit(this.contact.id);
  }
}
