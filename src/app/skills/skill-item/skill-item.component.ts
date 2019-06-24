import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/_shared/skill.model';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() skill: Skill ;
  constructor() { }

  ngOnInit() {
  }

}
