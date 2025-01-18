import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';//npm install @nestjs/bullmq bullmq ioredis
import { ColasBullmqService } from 'src/servicios/colas-bullmq/colas-bullmq.service';
import { QueueProcessor } from 'src/colas/queue.processor';
import { ReportesModule } from './reportes/reportes.module';
@Module({
    imports: [
      BullModule.forRoot({
        connection: {
          host: 'redis', // Host de Redis
          port: 6379,
        },
      }),
      BullModule.registerQueue({
        name: 'example-queue', // Nombre de la cola
      }),
      ReportesModule,
    ],
    providers: [ColasBullmqService, QueueProcessor],
    exports: [ColasBullmqService], // Exporta el servicio para que otros módulos lo usen
  })
export class ColasModuleModule {

}
