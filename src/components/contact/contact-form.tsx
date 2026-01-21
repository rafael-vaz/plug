import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";

import contactFormSchema from "../../schemas/contact-form-schema";
import formatPhoneNumber from "../../utils/format-phone-number";
import toastConfig from "../../utils/toast-config";
import Button from "../button/button";
import Input from "../input/input";
import CountryMap from "../select/country-map";
import Select from "../select/select";
import Textarea from "../textarea/textarea";
import styles from "./contact-form.module.css";

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
      <h2 className={styles.contactFormTitle}>Dúvidas sobre nossos serviços</h2>
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
