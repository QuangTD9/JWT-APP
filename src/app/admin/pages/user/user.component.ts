import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '@app/services';
import { User } from '@app/models';
import { first, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  loading = false;
  users: User[];
  currPage = 1;
  next: string;
  previous: string;
  disBtnNext: boolean;
  disBtnPrev: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.disBtnPrev = true;
    this.disBtnNext = true;
    this.userService.getUsers(this.currPage).pipe(first(), takeUntil(this.onDestroy$)).subscribe(users => {
      this.loading = false;
      this.users = users;
      this.disBtnNext = this.currPage === 5 ? true : false;
      this.disBtnPrev = this.currPage === 1 ? true : false;
    });
  }

  onPrevious(): void {
    this.currPage--;
    this.loadData();
  }

  onNext(): void {
    this.currPage++;
    this.loadData();
  }

  onChangePage(page: number): void {
    if (page !== this.currPage) {
      this.currPage = page;
      this.loadData();
    }
  }

  trackByFn(index, item): number {
    return index;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
