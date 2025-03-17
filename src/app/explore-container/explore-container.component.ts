import { Component, Input } from '@angular/core';
import { AccoundCardComponent } from '../user/accound-card/accound-card.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [],
})
export class ExploreContainerComponent {
  @Input() name?: string;
}
