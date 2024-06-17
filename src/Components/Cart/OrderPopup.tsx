import styles from "./Cart.module.scss";
import { IoIosClose } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

type Props = {
   isOrderActive: boolean;
   setOrderActive: (bool: boolean) => void;
   title: string;
   comment: string;
};

function OrderPopup({ isOrderActive, setOrderActive, title, comment }: Props) {
   const {
      register,
      formState: { errors },
      handleSubmit,
      control,
      setError,
      clearErrors,
      watch,
   } = useForm();

   function onSubmit(data: any) {
      console.log(data);
      console.log(isValidPhoneNumber(data.phone));
      if (!isValidPhoneNumber(data.phone)) {
         setError("phone", {
            type: "manual",
            message: "Неверный номер телефона",
         });
      } else {
         // Здесь ваш код для обработки данных формы, если номер телефона валиден
         console.log(data);
      }
   }

   function closeOrderWindow() {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0px";
      setOrderActive(false);
   }
   return (
      <div onClick={closeOrderWindow} className={`${styles.popup} ${isOrderActive ? styles.popup__active : ""}`}>
         <div onClick={(e) => e.stopPropagation()} className={styles.popup__body}>
            <button onClick={closeOrderWindow} className={styles.popup__close}>
               <IoIosClose />
            </button>
            <h3 className={styles.popup__title}>{title}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.popup__formGrid}>
               <div className={`${styles.popup__field} ${styles.popup__field__name}`}>
                  <label htmlFor="orderName">
                     Как к вам обращаться <span>*</span>
                  </label>
                  <input
                     className={styles.popup__input}
                     {...(register("name"),
                     {
                        required: true,
                     })}
                     type="text"
                     id="orderName"
                  />
                  {errors.name && errors.name.type === "required" && <span>This is required</span>}
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__city}`}>
                  <label htmlFor="orderCity">Город</label>
                  <input className={styles.popup__input} type="text" id="orderCity" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__mail}`}>
                  <label htmlFor="orderEmail">E-Mail</label>
                  <input className={styles.popup__input} type="text" id="orderEmail" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__tel}`}>
                  <label htmlFor="orderPhone">
                     Телефон <span>*</span>
                  </label>
                  <Controller
                     name="phone"
                     control={control}
                     rules={{ required: true }}
                     render={({ field: { onChange, onBlur, value, ref } }) => (
                        <PhoneInput
                           className={styles.popup__phoneInput}
                           onChange={onChange} // обновляет значение
                           onBlur={onBlur} // уведомляет о том, что поле было затронуто
                           value={value} // значение поля
                           limitMaxLength
                           defaultCountry="UZ"
                           id="orderPhone"
                        />
                     )}
                  />
                  {errors.phone && <span>Некорректно набран номер</span>}
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__desc}`}>
                  <label htmlFor="orderDesc">{comment}</label>
                  <textarea className={styles.popup__input} id="orderDesc"></textarea>
               </div>
               <div className={styles.popup__send}>
                  <button type="submit">Отправить</button>
               </div>
            </form>
         </div>
      </div>
   );
}
export default OrderPopup;
/*
<PhoneInput
                           className={styles.popup__phoneInput}
                           value={value}
                           limitMaxLength
                           countryCallingCodeEditable
                           onChange={onChange}
                           defaultCountry="UZ"
                           id="orderPhone"
                        /> */
