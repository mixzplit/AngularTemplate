import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
import { DocumentsService } from 'src/app/services/documents.service';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit, AfterViewInit {
  /** Titulo de la Pagina */
  title: string = 'Documentos';
  response: any = {};
  @ViewChild('viewer') viewerRef!: ElementRef;
  
  constructor(private docService: DocumentsService, private renderer: Renderer2) {

  }
  
  ngAfterViewInit(): void {
  }

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

  onShowDocs(id: number, url: string, name: string){

    this.renderer.setProperty(this.viewerRef.nativeElement,'id',`viewer${id}`);

    WebViewer({
      path: '../assets/libs',
      initialDoc: url ,
    },  <HTMLElement> document.getElementById(`viewer${id}`)).then( instance => {

    }); 
  }

}
