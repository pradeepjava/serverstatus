import {
  Component,
  DestroyRef,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponentCopy {
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    const interval = setInterval(() => {
      console.log('pradeep');
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
