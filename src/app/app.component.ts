import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'ia-angular-19';

  ngAfterViewInit(): void {
    // Initialiser Flowbite pour les composants interactifs
    this.initFlowbite();
  }

  private async initFlowbite(): Promise<void> {
    // Charger et initialiser Flowbite dynamiquement
    const flowbite = await import('flowbite');
    flowbite.initFlowbite();
  }
}
