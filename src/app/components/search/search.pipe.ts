import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "highlight",
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchTerm: string): string {
    if (!searchTerm) {
      return value;
    }
    const regex = new RegExp(searchTerm, "gi");
    return value.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
  }
}
