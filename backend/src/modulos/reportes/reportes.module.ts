import { Module } from '@nestjs/common';
import { ExcelService } from 'src/servicios/excel.service';
import { PdfService } from 'src/servicios/pdf.service';

@Module({
    imports: [
       
    ],
    providers: [ExcelService, PdfService],
    exports: [ExcelService, PdfService], // Exporta el servicio para que otros módulos lo usen
  })
export class ReportesModule {}
