import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LucideAngularModule, Plus, Minus, Trash2, Pencil, X, AlignJustify, ArrowLeft, Check, LoaderCircle } from 'lucide-angular';
import { IconType } from './types/icon.type';

@Component({
  selector: 'app-icon',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent implements OnChanges {
  @Input() icon: "minus" | "trash2" | "pencil" | "x" | "alignJustify" | "arrowLeft" | "check" | "loaderCircle" | "plus" = "plus"
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: "primary" | "secondary" | "dangerous" = "primary"


  lucideIcon: IconType = Plus

  ngOnChanges(changes: SimpleChanges) {
    if (changes['icon']) {

      this.currentIcon()
    }
  }

  currentIcon() {
    switch (this.icon) {
      case "minus":
        this.lucideIcon = Minus;
        break;

      case "pencil":
        this.lucideIcon = Pencil;
        break;

      case "trash2":
        this.lucideIcon = Trash2;
        break;

      case "x":
        this.lucideIcon = X;
        break;

      case "alignJustify":
        this.lucideIcon = AlignJustify;
        break;

      case "arrowLeft":
        this.lucideIcon = ArrowLeft;
        break;


      case "check":
        this.lucideIcon = Check;
        break;

      case "loaderCircle":
        this.lucideIcon = LoaderCircle;
        break;

      default:
        this.lucideIcon = Plus;
        break;
    }
  }

  get iconSize(): string {
    switch (this.size) {
      case "sm":
        return "22";

      case "md":
        return "30";

      case "lg":
        return "40";

      default:
        return "24";
    }
  }


  get iconColor() {
    switch (this.color) {
      case "secondary":
        return "#EC6724"

      case "dangerous":
        return "#ff0000"

      default:
        return "#000000"
    }
  }

}
