import { Component, Input, OnInit } from '@angular/core';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
import { Stat } from 'src/app/models/stat';

@Component({
  selector: 'app-csv-export',
  templateUrl: './csv-export.component.html',
  styleUrls: ['./csv-export.component.css']
})
export class CsvExportComponent implements OnInit {
  @Input() dataToCsv: Stat[];
  constructor() { }

  ngOnInit() {
  }
  generateHighscoreCsv(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'PSh Highscores',
      useBom: true,
      noDownload: false,
      headers: ["Rank", "Nickname", "Score"],
      nullToEmptyString: true,
    };
    let data = [];

    this.dataToCsv.forEach((stat, index) => {
      let row = { rank: index + 1, nickname: stat.player.nickname, score: stat.score};
      data.push(row);
    });
    new Angular5Csv(data, 'PSh Highscores', options);
  }

}
