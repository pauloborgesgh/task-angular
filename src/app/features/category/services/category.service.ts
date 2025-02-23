import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { category } from '../model/category.model';

import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 private readonly apiUrl = environment.apiUrl;

  private  readonly httpClient = inject(HttpClient);
 private categories$ = this.httpClient.get<category[]>(`${this.apiUrl}/categories`);


public categories = toSignal(this.categories$,{initialValue:[] as  category[]});

}

