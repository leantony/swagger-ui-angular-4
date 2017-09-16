import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { swaggerUIBundle, swaggerUIStandalonePreset } from '../../../polyfills';

@Component({
    selector: 'app-api-docs',
    templateUrl: './api-docs.component.html',
    styleUrls: [ './api-docs.component.scss' ]
})
export class ApiDocsComponent implements OnInit, AfterViewInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const ui = swaggerUIBundle({
            urls: [{
                url: 'http://petstore.swagger.io/v2/swagger.json', name: 'petstore'
            }],
            domNode: this.el.nativeElement.querySelector('.swagger-container'),
            deepLinking: true,
            presets: [
                swaggerUIBundle.presets.apis,
                swaggerUIStandalonePreset
            ],
            plugins: [
                swaggerUIBundle.plugins.DownloadUrl
            ],
            layout: 'StandaloneLayout'
        });
    }
}
