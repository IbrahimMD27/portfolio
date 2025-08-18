import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level-ma',
  imports: [CommonModule],
  templateUrl: './level-ma.html',
  styleUrl: './level-ma.scss'
})
export class LevelMa {
  selected: 'skills' | 'experience' | 'contact' | null = null;

  skills = [
    'Python', 'MySQL', 'Django', 'React.js', 'Node.js',
    'Angular', 'TypeScript', 'MongoDB', 'AWS (Lambda, S3, DynamoDB)',
    'Jupyter Notebook', 'Data Analytics', 'Tailwind CSS'
  ];
  openPopup(type: 'skills' | 'experience' | 'contact') {
    this.selected = type;
  }

  closePopup() {
    this.selected = null;
  }

}
