import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categories2: Observable<string[]> =new Observable<string[]>;
  loading : boolean = false;

  constructor(private storeService: StoreService) {
  
  }

  ngOnInit(): void {
    this.categories2 = this.storeService.getAllCategories();
  }
 /* ngAfterViewInit(): void {
      this.categories2 = this.storeService.getAllCategories();
  }*/
  

  onShowCategory(category: string): void {
    this.loading = true;
    this.showCategory.next(category);
    this.loading = false;
  }

  ngOnDestroy(): void {
  }

}
