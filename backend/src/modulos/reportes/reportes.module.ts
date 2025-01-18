import { Module } from '@nestjs/common';
import { ExcelService } from 'src/servicios/excel.service';

@Module({
    imports: [
       
    ],
    providers: [ExcelService],
    exports: [ExcelService], // Exporta el servicio para que otros módulos lo usen
  })
export class ReportesModule {}
