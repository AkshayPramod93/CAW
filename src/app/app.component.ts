import { Component,ViewEncapsulation} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  value = 0;
  next(){
    this.value++;
  }
  start(){
    this.value= 0;
  }
}
