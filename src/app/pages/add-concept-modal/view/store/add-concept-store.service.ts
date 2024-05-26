import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddConceptStoreService {
  conceptType = signal<'income' | 'expense' | null>(null);

  conceptId = signal<string | null>(null);
  amount = signal<number | null>(null);
  date = signal<string | null>(null);
  note = signal<string | null>(null);
}
