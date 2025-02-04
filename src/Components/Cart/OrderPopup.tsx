import styles from "./Cart.module.scss";
import { IoIosClose } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import Loader from "../Utilities/Loader";
import { Items } from "./MainGrid";
import { postApplication } from "../Common/Application/application";
import { usePathname, useRouter } from "next/navigation";
type Props = {
     isOrderActive: boolean;
     setOrderActive: (bool: boolean) => void;
     title: string;
     comment: string;
     items?: Items;
     setItem?: Function;
     dollarVal?: number;
     total?: string | number | null;
};

type SubmitData = {
     name: string;
     city: string;
     email: string;
     phone: string;
     question: string;
     items?: Items;
     total?: string | number;
};

function OrderPopup({ isOrderActive, setOrderActive, title, comment, items, setItem, dollarVal, total }: Props) {
     const [isSubmitting, setSubmit] = useState(false);
     const [isOrderAccepted, setOrderAccept] = useState(false);
     const router = useRouter();
     const pathname = usePathname();
     const {
          register,
          formState: { errors },
          handleSubmit,
          control,
          setError,
     } = useForm();

     async function onSubmit(data: SubmitData) {
          let itemsData;
          if (items && items.length > 0 && dollarVal && total) {
               itemsData = items.map((item) => {
                    item.somPrice = item.price ? item.price * dollarVal : item.wifiPrice && item.wifiPrice * dollarVal;
                    return item;
               });
               data.items = itemsData;
               data.total = total;
          }
          if (!isValidPhoneNumber(data.phone)) {
               setError("phone", {
                    type: "manual",
                    message: "Неверный номер телефона",
               });
          } else {
               setSubmit(true);
               const res = await postApplication({
                    name: data.name,
                    phone: data.phone,
                    city: data.city,
                    total: data.total,
                    items: data.items,
                    description: data.question,
                    url: pathname,
               });
               setOrderAccept(true);
               setSubmit(false);
               if (items && setItem) setItem([]);
               router.push("/thanks");
          }
     }

     function closeOrderWindow() {
          if (isSubmitting) return;
          document.body.style.overflow = "visible";
          document.body.style.paddingRight = "0px";
          setOrderActive(false);
          setOrderAccept(false);
     }
     return (
          <div onClick={closeOrderWindow} className={`${styles.popup} ${isOrderActive ? styles.popup__active : ""}`}>
               <div onClick={(e) => e.stopPropagation()} className={styles.popup__body}>
                    <button onClick={closeOrderWindow} className={styles.popup__close}>
                         <IoIosClose />
                    </button>
                    <h3 className={styles.popup__title}>{title}</h3>
                    {isSubmitting ? (
                         <div className={styles.popup__isLoading}>
                              <Loader />
                         </div>
                    ) : isOrderAccepted ? (
                         <></>
                    ) : (
                         <form onSubmit={handleSubmit(onSubmit as () => void | unknown)} className={styles.popup__formGrid}>
                              <div className={`${styles.popup__field} ${styles.popup__field__name}`}>
                                   <label htmlFor="orderName">
                                        Как к вам обращаться <span>*</span>
                                   </label>
                                   <input
                                        className={styles.popup__input}
                                        {...register("name", {
                                             required: true,
                                        })}
                                        type="text"
                                        id="orderName"
                                   />
                              </div>
                              <div className={`${styles.popup__field} ${styles.popup__field__city}`}>
                                   <label htmlFor="orderCity">Город</label>
                                   <input className={styles.popup__input} {...register("city")} type="text" id="orderCity" />
                              </div>
                              <div className={`${styles.popup__field} ${styles.popup__field__mail}`}>
                                   <label htmlFor="orderEmail">E-Mail</label>
                                   <input className={styles.popup__input} {...register("mail")} type="text" id="orderEmail" />
                              </div>
                              <div className={`${styles.popup__field} ${styles.popup__field__tel}`}>
                                   <label htmlFor="orderPhone">
                                        Телефон <span>*</span>
                                   </label>
                                   <Controller
                                        name="phone"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                             <PhoneInput
                                                  className={styles.popup__phoneInput}
                                                  onChange={onChange}
                                                  onBlur={onBlur}
                                                  value={value}
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
                                   <textarea {...register("question")} className={styles.popup__input} id="orderDesc"></textarea>
                              </div>
                              <div className={styles.popup__send}>
                                   <button type="submit">Отправить</button>
                              </div>
                         </form>
                    )}
               </div>
          </div>
     );
}
export default OrderPopup;
