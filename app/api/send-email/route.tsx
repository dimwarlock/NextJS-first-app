import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


/*
No poseo un Dominio en estos momentos y no se pueden utilizar dominios públicos como Gmail o Yahoo.
export async function POST(){
    resend.emails.send({
        
    })
}
*/