import { Component, OnInit } from '@angular/core';
import { data } from '../data';
import { FetchdataService } from '../fetchdata.service';

declare var $: any;


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})



export class PiechartComponent implements OnInit {

  constructor(private dataService : FetchdataService) { }

  data?: data[] = [];
  
  

  ngOnInit(): void {
    
    this.getData();  
  }
  /*Saw some other ways of importing the json but decided to keep with the HttpClient since it was the closest one to receiving data from a server*/
  
  getData(): void{
    this.dataService.getData().subscribe(data =>  {
      this.data = data; 
      console.log(this.data); 
      this.function();
    });
  }

  function(): void {
            $('#chart').igPieChart({
                dataSource: this.data,
                width: '430px',
                height: '430px',
                valueMemberPath: 'Budget',
                labelMemberPath: 'Label',
                explodedSlices: [2, 3],
                radiusFactor: .6,
                labelsPosition: "outsideEnd",
                leaderLineType: "arc",
                labelExtent: 40,
                legend: { element: 'legend', type: "item" }
            });

        };
}
