import { Controller, Get } from '@nestjs/common';
import { ColasBullmqService } from 'src/servicios/colas-bullmq/colas-bullmq.service';

@Controller('colas-bullmq')
export class ColasBullmqController {


    constructor(private readonly colasBullmqService: ColasBullmqService) { }

    @Get('add')
    async addJob() {
        const fecha=new Date().toString().replace(/T/, ':').replace(/\.\w*/, '');
        const job = await this.colasBullmqService.addJob({ id: 1, data: 'data con ñandú desde módulo', fecha: fecha });
        return { message: 'Tarea creada', jobId: job.id, jonName: job.name };
    }
}
