import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css',
})
export class EditMomentComponent {
  moment!: Moment; //Dizendo que vou receber a interface
  btnText: string = 'Editar';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });
  }

  async editHandler(momentData:Moment) {
    const id = this.moment.id;

    const formData = new FormData();
    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (this.moment.image) {
      formData.append('image', momentData.image);
    }

    await this.momentService.updateMoment(id!, formData).subscribe()

    this.messageService.add(`Momento ${id} foi atualizado com sucesso!`);

    this.router.navigate(['/']);

  }
}
