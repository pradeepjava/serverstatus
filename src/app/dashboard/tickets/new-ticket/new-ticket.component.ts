import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
onSubmit(_t4: HTMLInputElement) {
throw new Error('Method not implemented.');
}

}
