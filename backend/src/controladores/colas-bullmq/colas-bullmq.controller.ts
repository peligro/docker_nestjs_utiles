import { Controller, Get } from '@nestjs/common';
import { ColasBullmqService } from 'src/servicios/colas-bullmq/colas-bullmq.service';

@Controller('colas-bullmq')
export class ColasBullmqController {


    constructor(private readonly colasBullmqService: ColasBullmqService) { }

    @Get('add')
    async addJob() {
        const fecha=new Date().toLocaleString("en-US", {timeZone: process.env.TIMEZONE}).toString().replace(/T/, ':').replace(/\.\w*/, '');
        const job = await this.colasBullmqService.addJob({ id: 1, data: 'data con ñandú desde react', fecha: fecha });
        return { mensaje: 'Tarea creada', jobId: job.id, jobName: job.name, fecha: fecha };
    }
}
