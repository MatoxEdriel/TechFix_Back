import { Injectable } from '@nestjs/common';
import { dmmfToRuntimeDataModel } from '@prisma/client/runtime/client';
import * as nodemailer from 'nodemailer';
import { Subject } from 'rxjs';

@Injectable()
export class MailService {

    //!Concepto de transporter.  
    //!Motor de envio de correos es el objeto que conoce todo el como, desde donde y el con que se envia correo 
    private transporter;

    //Todo implementar la posibilidade poner otros servicios de AWS SES y esperar las optimizacions y codigo 


    //!contraseña de aplicaciones 
    constructor() {

        this.transporter = nodemailer.createTransport({

            //? investigar concepto dede SMTP, repasar  y tambien averiguar si se necesita pagar algo para esto 
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'ga99buggi@gmail.com',
                pass: 'baad athf xnml seev'
            }
        })
    }


    async sendOtp(email: string, code: string) {

        const mailOptions = {
            from: '"Soporte TechFix" <ga99buggi@gmail.com>',
            to: email,
            html: `
        <div style="font-family: sans-serif; text-align: center; padding: 20px;">
          <h2>Recuperación de Contraseña</h2>
          <p>Tu código de seguridad es:</p>
          <h1 style="color: #2563EB; font-size: 32px; letter-spacing: 5px;">${code}</h1>
          <p>Este código expirará en 10 minutos.</p>
        </div>
      `,

        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Correo enviado con ID:', info.messageId);
            return true;
        } catch (error) {
            console.error('Error enviando el correo:', error);
            return false;
        }
    }


}


