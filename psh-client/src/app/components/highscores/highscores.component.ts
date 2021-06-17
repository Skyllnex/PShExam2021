import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Stat } from 'src/app/models/stat';
import { StatService } from 'src/app/services/stat.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {
  stats: Stat[];
  lastGenerated: string;

  constructor(private statService: StatService) { }

  ngOnInit() {
    this.getData();
    setInterval(()=>this.getData(), 10000);
  }

  getData(){
    forkJoin(
      [
        this.statService.getHighscores(),
        this.statService.getLastGenerated()
      ])
      .subscribe(([res1, res2]: [Stat[], Stat]) => {
        this.stats = res1;
        this.lastGenerated = res2 && res2.created_at ? new Date(res2.created_at).toLocaleString() : "";
      }, err => { console.log(err); });
    
  }
}
