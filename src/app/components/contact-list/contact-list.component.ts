import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor, ContactCardComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  constructor(public contactService: ContactService, private router: Router) {}

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
  }

  editContact(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
