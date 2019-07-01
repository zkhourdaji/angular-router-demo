import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contacts = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Smith' },
    { id: 3, name: 'Bob' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
