import { Injectable } from '@angular/core';
import { Skill } from '../_shared/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills = [ 
    new Skill(["C#", "JAVA", "TypeScript", "JavaScript"], "Programming Language"),
    new Skill([".NET Core", ".NET Web API", "JAVA EE", "Node.js"],"Server side"),
    new Skill(["Angular", "AngularJS", "React", "CSS"],"Client side"),
    new Skill(["SQL Server", "Oracle", "MongoDB", "MySQL"],"Database"),
    new Skill(["xUnit", "MS Test", "Jasmine", "Protractor", "Selenium"],"Testing"),
    new Skill(["AWS", "Azure"], "Cloud"),
    new Skill(["EF", "EF Core", "LINQ", "Docker", "Jenkins", "Kubernetes", "RabbitMQ", "Git", "Bitbucket", "JIRA", "YouTrack",
    "Visual Studio", "Bootstrap", "Material", "Bulma"],"Other Tools and Frameworks")
];

getSkills() {
  return this.skills.slice();
}
}
