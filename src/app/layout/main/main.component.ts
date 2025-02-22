import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryComponent } from '../../features/category/views/category/category.component';
import { MatDividerModule } from '@angular/material/divider';
import { TaskComponent } from '../../features/category/task/view/task/task.component';
const components = [CategoryComponent,TaskComponent];

const modules = [MatDividerModule]

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...components, ...modules],
  template: `<div class="h-screen flex w-full  border-4 border-blue-700">

    <app-category class="w-1/4  border-4 border-orange-700"/>

    <mat-divider class="h-full opacity-50" />
    <app-task class="w-3/4  border-4 border-green-700"/>


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
export class MainComponent { }
