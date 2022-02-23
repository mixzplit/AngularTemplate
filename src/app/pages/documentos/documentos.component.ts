import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  /** Titulo de la Pagina */
  title: string = 'Documentos';
  response: any = {};

  constructor(private docService: DocumentsService) { }

  ngOnInit(): void {
    console.log(`Documentos Component`);
    this.onListDocs();
  }

  onListDocs(){
    this.docService.getDocuments().subscribe({
      next: (resp) => {
        this.response = resp
        console.log(this.response.files);
        
      },
      error: (err) => {
        console.log(err);
      }      
    });
  }

}
