import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { FormsModule } from '@angular/forms'; 
import { NgIf } from '@angular/common';       

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, NgIf], 
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact: Contact = { id: 0, fName: '', lName: '', phoneNumber: '', email: '' };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existing = this.contactService.getContactById(+id);
      if (existing) {
        this.contact = { ...existing };
        this.isEditMode = true;
      }
    } else {
      this.contact.id = Date.now(); 
    }
  }

  saveContact() {
    if (this.isEditMode) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }
    this.router.navigate(['/']);
  }
}
