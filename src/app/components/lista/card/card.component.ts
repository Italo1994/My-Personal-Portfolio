import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../texts/button/button.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css',
              './card.responsive.component.css'
            ]
})
export class CardComponent implements OnInit {
  dataCards: any[] = [
    {name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
    {name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},
    {name: "Wordpress", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"},
    {name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
    {name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {name: "Typescript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
    {name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
    {name: "Github", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
    {name: "Spring", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},
    {name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"}
  ]

  dataIcons: any[] = [
    {name: "figma", class: "fa-brands fa-figma", description: "Crio protótipos e layouts para websites"},
    {name: "web", class: "fa-solid fa-laptop", description: "Desenvolvo soluções para o seu negócio através da tecnologia"},
  ]

  dataProjects: any[] = [
    {name: "", srcImg: "../../../../assets/background_parallax.jpg", urlGit: ""},
    {name: "", srcImg: "../../../../assets/background_parallax.jpg", urlGit: ""},
    {name: "", srcImg: "../../../../assets/background_parallax.jpg", urlGit: ""},
    {name: "", srcImg: "../../../../assets/background_parallax.jpg", urlGit: ""},
  ]

  @Input() normalCard: boolean = true;
  @Input() bigCard: boolean = false;
  @Input() sliderActive: boolean = false;
  @Input() iconIsActive: boolean = false;

  constructor() {
    if(this.normalCard === true) {
      this.sliderActive = false;
      this.iconIsActive = false;
    }
    else if(this.sliderActive === true) {
      this.normalCard = false;
      this.iconIsActive = false;
    }
    else if(this.iconIsActive === true) {
      this.normalCard = false;
      this.sliderActive = false;
    }
  }

  ngOnInit(): void {

  }
}
