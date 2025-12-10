import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  readonly iconRegistey = inject(MatIconRegistry);
  readonly domSanitizer = inject(DomSanitizer);

  registerIcons() {
    this.iconRegistey.addSvgIcon('trophy', this.domSanitizer.bypassSecurityTrustResourceUrl('svg/cup-star.svg'));
  }

}
