import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spam = {
    title: "Is there an anime character stronger than Madara Uchiha?",
    body: "And I'm referring to Rinne Tensei Madara Uchiha with the Eternal Mangekyou Sharingan and Rinnegan doujutsus (with the rikidou paths ability) equipped with his Gunbai and control of the juubi and Gedou Mazou, a complete Susano'o, with Hashirama Senju's DNA implanted in his chest so he can perform Mokuton kekkei genkai and yin-yang release ninjutsu as well as being extremely skilled in taijutsu and bukijutsu."
  };

  alertMe(val) {
    alert(val);
  }

  constructor() { }

  ngOnInit() {
  }
}
