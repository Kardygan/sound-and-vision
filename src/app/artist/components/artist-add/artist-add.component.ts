import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/artist.model';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.scss']
})
export class ArtistAddComponent implements OnInit {

  formGroup: FormGroup = this._builder.group([]);

  constructor(
    private _builder: FormBuilder,
    private _artistService: ArtistService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this._builder.group({
      name: [null, Validators.required],
      alias: [null],
      startDate: [null, Validators.required],
      endDate: [null],
      description: [null]
    })
  }

  onSubmitForm(): void {
    let artist: Artist = {
      name: this.formGroup.value['name'],
      alias: this.formGroup.value['alias'],
      startDate: this.formGroup.value['startDate'],
      endDate: this.formGroup.value['endDate'],
      description: this.formGroup.value['description']
    }

    this._artistService.add(artist);
  }
}