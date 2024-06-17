import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

const email = process.env.MAIL_USER;
const pass = process.env.MAIL_APP_PASS;

type Data = {
   name: string;
   phone: string;
   city: string;
   mail: string;
   question: string;
};

export async function POST(req: NextRequest) {
   const data: Data = await req.json();
   const { name, phone, city, mail, question } = data;
   try {
      const transporter = nodemailer.createTransport({
         service: "gmail",
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            user: email,
            pass: pass,
         },
      });
      const mailOption = {
         from: email,
         to: "Barrakud3@gmail.com",
         subject: `Request from ${name} | amazon-one`,
         html: `
            <h2>Имя: ${name}</h2>
         <h3>Номер телефона: ${phone}</h3>
         <h3>Город: ${city}</h3>
         <h3>Email: ${mail}</h3>
         <h3>Комментарий: ${question}</h3>
         `,
      };
      await transporter.sendMail(mailOption);
      return NextResponse.json({ message: "Сообщение успешно отправлено" }, { status: 200 });
   } catch (err: any) {
      return NextResponse.json({ message: "Ошибка при отправки сообщения" }, { status: 500 });
   }
}
