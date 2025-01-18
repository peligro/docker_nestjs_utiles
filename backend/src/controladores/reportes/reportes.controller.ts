import { Controller, Get, Res } from '@nestjs/common';
import { ExcelService } from 'src/servicios/excel.service';
import { Response } from 'express';
@Controller('reportes')
export class ReportesController 
{
    constructor(private readonly excelService: ExcelService) {}
    @Get('excel')
    async downloadExcel(@Res() res: Response): Promise<void> {
      await this.excelService.generateExcel(res);
    }
}
