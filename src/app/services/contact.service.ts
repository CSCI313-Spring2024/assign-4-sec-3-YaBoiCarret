import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsSignal = signal<Contact[]>([
    { id: 1, fName: 'John', lName: 'Adams', phoneNumber: '701-000-1000', email: 'john@example.com' },
    { id: 2, fName: 'Mary', lName: 'Jane', phoneNumber: '701-000-2000', email: 'mary@example.com' },
  ]);

  // Accessor for components
  get contacts() {
    return this.contactsSignal;
  }

  addContact(contact: Contact) {
    const newList = [...this.contactsSignal(), contact];
    this.contactsSignal.set(newList);
  }

  deleteContact(id: number) {
    this.contactsSignal.set(this.contactsSignal().filter(c => c.id !== id));
  }

  updateContact(updatedContact: Contact) {
    this.contactsSignal.set(
      this.contactsSignal().map(c => c.id === updatedContact.id ? updatedContact : c)
    );
  }

  getContactById(id: number): Contact | undefined {
    return this.contactsSignal().find(c => c.id === id);
  }
}
