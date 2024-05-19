import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  userId: string = '';

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(){
    this.actRoute.params.subscribe((param: any)=>{
      this.userId= param.userId as string;
    });
  }

}
