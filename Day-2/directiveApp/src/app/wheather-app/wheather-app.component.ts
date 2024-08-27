import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheather-app',
  templateUrl: './wheather-app.component.html',
  styleUrls: ['./wheather-app.component.css']
})
export class WheatherAppComponent implements OnInit {

   

  ngOnInit(): void {
  }

  today: string;

  weatherData = [
    { day: 'Monday', temperature: 25, condition: 'Sunny', icon: 'fas fa-sun' },
    { day: 'Tuesday', temperature: 22, condition: 'Cloudy', icon: 'fas fa-cloud' },
    { day: 'Wednesday', temperature: 28, condition: 'Sunny', icon: 'fas fa-sun' },
    { day: 'Thursday', temperature: 24, condition: 'Rainy', icon: 'fas fa-cloud-showers-heavy' },
    { day: 'Friday', temperature: 27, condition: 'Partly Cloudy', icon: 'fas fa-cloud-sun' },
    { day: 'Saturday', temperature: 32, condition: 'Cloudy', icon: 'fas fa-cloud' },
    { day: 'Sunday', temperature: 27, condition: 'Rainy', icon: 'fas fa-cloud-showers-heavy' },
  ];

  constructor() {
    this.today = this.getCurrentDay();
  }

  getCurrentDay(): string {
    const date = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  isToday(day: string): boolean {
    return this.today === day;
  }

}
