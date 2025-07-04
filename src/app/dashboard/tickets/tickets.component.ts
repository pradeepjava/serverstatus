import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, ButtonComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
