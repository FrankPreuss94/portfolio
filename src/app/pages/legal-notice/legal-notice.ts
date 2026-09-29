import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-legal-notice',
  styleUrl: './legal-notice.scss',
  templateUrl: './legal-notice.html',
})
export class LegalNotice { }
