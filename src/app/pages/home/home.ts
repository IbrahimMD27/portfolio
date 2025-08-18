import { Component } from '@angular/core';
import { LevelMa } from '../../components/level-ma/level-ma';
import { LucideAngularModule } from 'lucide-angular';
@Component({
  selector: 'app-home',
  imports: [LevelMa, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  skills: string[] = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'];
  onResumeDownload() {
    const link = document.createElement('a');
    link.href = 'assets/CV2.pdf';
    link.download = 'CV2.pdf';
    link.click();
    // In a real application, this could open a new tab or trigger a file download
    console.log('Downloading resume...');
  }

}
