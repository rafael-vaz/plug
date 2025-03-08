import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";

import formatPhoneNumber from "../../utils/formatPhoneNumber";
import toastConfig from "../../utils/toastConfig";
import contactFormSchema from "../../schema/contactFormSchema";
import Button from "../Button/Button";
import Input from "../Input/Input";
import CountryMap from "../Select/CountryMap";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  type FormData = z.infer<typeof contactFormSchema>;

  const { register, reset, setValue, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = () => {
    toast.success("Dúvida enviada com sucesso!", {
      className: "toast-content",
    });
    reset();
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    Object.keys(errors).forEach((field) => {
      const errorMessage = errors[field as keyof FormData]?.message;
      if (errorMessage) {
        toast.error(errorMessage, { className: "toast-content" });
      }
    });
  };

  return (
    <form
      action="#"
      className={styles.contactForm}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h3 className={styles.contactFormTitle}>Dúvidas sobre nossos serviços</h3>
      <p className={styles.contactFormText}>
        Estamos prontos para responder suas perguntas. Preencha o formulário e
        entraremos em contato em breve.
      </p>
      <div className={styles.contactFormContent}>
        <div>
          <Input
            id="name"
            type="text"
            label="Nome completo"
            placeholder="Seu nome"
            register={register("name", { required: true })}
          />
          <Input
            id="phone"
            type="tel"
            label="Celular"
            placeholder="(00) 00000-0000"
            register={register("phone")}
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setValue("phone", formatPhoneNumber(target.value));
            }}
          />
        </div>
        <div>
          <Input
            id="email"
            type="email"
            label="E-mail"
            placeholder="exemplo@email.com"
            register={register("email", { required: true })}
          />
          <Select
            label="País"
            id="country"
            initialText="Selecione seu país"
            options={CountryMap}
            register={register("country", { required: true })}
          />
        </div>
      </div>
      <Textarea
        id="message"
        label="Mensagem"
        placeholder="Sua dúvida"
        register={register("message", { required: true })}
      />
      <Button text="Enviar dúvida" styleType="flat" type="submit" />
      <ToastContainer {...toastConfig} />
    </form>
  );
};

export default ContactForm;
