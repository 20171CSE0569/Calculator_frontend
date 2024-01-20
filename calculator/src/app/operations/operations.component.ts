import { Component, OnDestroy } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.css'
})
export class OperationsComponent implements OnDestroy{
  displayValue = '0';
  currentInput = '';
  private saveHistorySubscription: Subscription | undefined;

  constructor(
    private dataService: DataServiceService
  ){}

  public onButtonClick(value: string): void {
    this.currentInput += value;
    this.displayValue = this.currentInput;
  }

  public onEqualButtonClick(): void {
    const currentInputExpression = this.currentInput;
    try {
      this.currentInput = eval(this.currentInput).toString();
      this.displayValue = this.currentInput;
    } catch (error) {
        this.displayValue = 'Error';
    }

    this.saveHistorySubscription = this.dataService.saveHistory(currentInputExpression, Number(this.displayValue)).subscribe({
      next: (data) =>{
        if(data){
          console.log('Data Saved Successfully');
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public onClearButtonClick(): void {
    this.currentInput = '';
    this.displayValue = '0';
  }

  public onEraseButtonClick(): void {
    this.currentInput = this.currentInput.slice(0, -1);
    this.displayValue = this.currentInput || '0';
  }

  ngOnDestroy() {
    if (this.saveHistorySubscription) {
        this.saveHistorySubscription.unsubscribe();
    }
  }
}
