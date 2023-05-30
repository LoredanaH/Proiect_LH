import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-box-cont',
  templateUrl: './box-cont.component.html',
  styleUrls: ['./box-cont.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatInputModule, MatIconModule],
})
export class BoxContComponent {
  hide = true;
}
