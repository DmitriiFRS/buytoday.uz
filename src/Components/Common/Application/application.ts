import { Items } from "@/Components/Cart/MainGrid";
import axios from "axios";

type ApplicationType = {
	name: string;
	phone: string;
	city?: string;
	description: string;
	items?: Items;
	total?: string | number;
	url: string;
	fromOtherPagesForm?: boolean;
};

export async function postApplication({ name, phone, city, description, total, items, url, fromOtherPagesForm }: ApplicationType) {
	try {
		const TOKEN = "7573731104:AAEyogITK-B1z0RDnynJ0EBhFGdRn1_jprw";
		const CHAT_ID = "-1002254012666";
		const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
		const message = `
         Новая заявка:
         Имя: ${name}
         Телефон: ${phone}
         Город: ${city}
         Описание: ${description}
         Страница заявки: ${url}
         ${total ? `<h2>Общая сумма в сумах: ${total}</h2>` : ""}
         Товары:
         ${
				!items
					? fromOtherPagesForm
						? "Заявка с каталога или главной страницы"
						: "Заявка с прома"
					: items.map((el, index) => {
							return `
                  Название продукта: ${el.name}
                  Модель: ${el.model}
                  ${el.color ? `Цвет: ${el.color}` : ""}
                  Количество: ${el.count}
                  Бренд: ${el.company}
                  Цена USD за единицу: ${el.wifiPrice || el.price}
                  Цена в Сумах за единицу: ${el.somPrice}
                  Общая цена в Сумах: ${el.somPrice && el.somPrice * el.count}
                  Общая цена в USD: ${(el.wifiPrice && el.wifiPrice * el.count) || (el.price && el.price * el.count)}
                  --------------------------------------
            `;
					  })
			}
      `;
		await axios.post(TELEGRAM_API, {
			chat_id: CHAT_ID,
			text: message,
		});
	} catch (err) {
		return { error: true, msg: err };
	}
}
