import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  template: `<p>category works!</p>`,
  styleUrl: './category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent { }
