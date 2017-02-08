import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {name: "Yoshi", belt: "green"},
    {name: "Ryu", belt: "red"},
    {name: "Dr. McNinja", belt: "black"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
