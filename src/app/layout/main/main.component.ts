import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoryComponent } from '../../features/category/views/category/category.component';
import { MatDividerModule } from '@angular/material/divider';
import { TaskComponent } from '../../features/category/task/view/task/task.component';
import { CategoryService } from '../../features/category/services/category.service';
const components = [CategoryComponent,TaskComponent];

const modules = [MatDividerModule]

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...components, ...modules],
  template: `<div class="h-screen flex w-full ">

    <app-category class="w-1/4  "/>

    <mat-divider class="h-full  opacity-50 w-px" vertical />
    <app-task class="w-3/4 "/>


  </div>`,

  styles: [
    `
    .h-screen {
      height: 100dvh;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { 
 
}
