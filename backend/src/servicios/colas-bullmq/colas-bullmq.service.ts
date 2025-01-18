import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
@Injectable()
export class ColasBullmqService {

    constructor(@InjectQueue('example-queue') private readonly queue: Queue) { }

    async addJob(data: any) {
        return await this.queue.add('example-job', data, {
            attempts: 3, // Número de reintentos si falla
            backoff: 5000, // Esperar 5 segundos antes de reintentar
        });
    }
}
