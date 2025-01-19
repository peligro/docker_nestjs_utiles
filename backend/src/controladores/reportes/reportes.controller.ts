import { Controller, Get, Res } from '@nestjs/common';
import { ExcelService } from 'src/servicios/excel.service';
import { Response } from 'express';
import { PdfService } from 'src/servicios/pdf.service';
@Controller('reportes')
export class ReportesController {
    constructor(private readonly excelService: ExcelService, private readonly pdfService: PdfService) { }
    @Get('excel')
    async downloadExcel(@Res() res: Response): Promise<void> {
        await this.excelService.generateExcel(res);
    }

    
}
