import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientDataService {
  private clientJourneyData = new BehaviorSubject<any>('');
  clientJourney$ = this.clientJourneyData.asObservable();

  updateClientJourneyData(newData: any) {
    const currentData = this.clientJourneyData.getValue();
    const updatedData = { ...currentData, ...newData };
    this.clientJourneyData.next(updatedData);
  }

  getClientJourneyData() {
    return this.clientJourneyData.getValue();
  }
}