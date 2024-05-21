import { Component } from '@angular/core';
import { ExportService } from './download-xlsx.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-download-xlsx',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './download-xlsx.component.html',
  styleUrls: ['./download-xlsx.component.css']
})
export class DownloadXLSXComponent {

  accountId: number = 0;
  message: string = "";

  constructor(private exportService: ExportService) { }

  downloadFile() {
    if (this.accountId !== 0) {
      this.exportService.generateAndSave(this.accountId)
        .subscribe(
          data => {
            // On successful generation and save, initiate download
            this.exportService.downloadFile(this.accountId)
              .subscribe(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Report_${this.accountId}.xlsx`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              });
          },
          error => {
            console.log(error);
          });
    } else {
      this.message = "Please enter a valid account ID.";
    }
  }
}
