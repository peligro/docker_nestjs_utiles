import { Controller, Get, Header, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('ejemplo')
export class EjemploController {

    @Get()
    @HttpCode(HttpStatus.OK)
    @Header('cabecero_cesar', 'www.cesarcancino.com')
    index(){
        //return "Método GET";
        return {estado:"ok", mensaje:"Método GET"}
    }
}
