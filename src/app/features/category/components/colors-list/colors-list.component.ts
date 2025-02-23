import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '../../services/category.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CATEGORY_COLORS_BACKGROUND } from '../../constants/category-colors';

const MODULES = [MatDividerModule ,MatButtonModule,MatIconModule]
@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './colors-list.component.html',
  styleUrl: './colors-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent { 

  private readonly categoryService = inject(CategoryService)
  public CATEGORY_COLORS_BACKGROUND = CATEGORY_COLORS_BACKGROUND;
  public categories = this.categoryService.categories

}
