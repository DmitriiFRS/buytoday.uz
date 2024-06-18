import { Items } from "@/Components/Cart/MainGrid";
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
   items?: Items;
   total?: string | number;
};

export async function POST(req: NextRequest) {
   const data: Data = await req.json();
   const { name, phone, city, mail, question, items, total } = data;
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
         ${total ? `<h2>Общая сумма в сумах: ${total}</h2>` : ""}
         <h2>Товары:</h2>
         ${
            !items
               ? "Заявка с прома"
               : items.map((el, index) => {
                    return `
               <div>
                  <h3>Название продукта: ${el.name}</h3>
                  <h4>Модель: ${el.model}</h4>
                  ${el.color ? `<h4>Цвет: ${el.color}</h4>` : ""}
                  <h4>Количество: ${el.count}</h4>
                  <h4>Бренд: ${el.company}</h4>
                  <h4>Цена USD за единицу: ${el.wifiPrice || el.price}</h4>
                  <h4>Цена в Сумах за единицу: ${el.somPrice}</h4>
                  <h4>Общая цена в Сумах: ${el.somPrice && el.somPrice * el.count}</h4>
                  <h4>Общая цена в USD: ${(el.wifiPrice && el.wifiPrice * el.count) || (el.price && el.price * el.count)}</h4>
                  <span>--------------------------------------</span>
               </div>
            `;
                 })
         }
         `,
      };
      await transporter.sendMail(mailOption);
      return NextResponse.json({ message: "Сообщение успешно отправлено" }, { status: 200 });
   } catch (err: any) {
      return NextResponse.json({ message: "Ошибка при отправки сообщения" }, { status: 500 });
   }
}
