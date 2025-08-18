import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  template: `
    <div class="rounded-lg border bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white shadow-sm p-6 w-full max-w-sm hover:shadow-md transition">
      <div class="flex items-center gap-4 mb-4">
        <div *ngIf="icon" class="text-3xl">
          <i [class]="icon()"></i>
        </div>
        <h3 class="text-2xl font-semibold tracking-tight">{{ title() }}</h3>
      </div>
      <p class="text-sm text-zinc-600 dark:text-zinc-400">
        {{ description() }}
      </p>
    </div>
  `,
})
export class SkillCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  icon = input<string>();
// Optional FontAwesome or Heroicon class
}
