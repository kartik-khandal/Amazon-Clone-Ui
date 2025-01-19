import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('imgBox') imgBox!: ElementRef; // Reference to the image container
  isScrolling = false; // Prevent multiple clicks
  images = [
    '/assets/images/bigImg1.jpg',
    '/assets/images/bigImg2.jpg',
    '/assets/images/bigImg.jpg',
    '/assets/images/bigImg00.jpg',
    '/assets/images/bigImg000.jpg',
    '/assets/images/bigImg0.jpg',
    '/assets/images/bigImg3.jpg',
    '/assets/images/bigImg4.jpg'
  ];

  scrollImages(direction: number): void {
    if (this.isScrolling) return; // Prevent multiple clicks
    this.isScrolling = true;

    const scrollDistance = direction * this.imgBox.nativeElement.clientWidth;
    this.imgBox.nativeElement.scrollBy({ left: scrollDistance, behavior: 'smooth' });

    setTimeout(() => {
      this.isScrolling = false; // Reset scrolling state
    }, 1000); // Duration matches the smooth scroll time
  }
}
