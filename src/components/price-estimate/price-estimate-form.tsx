import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";

import slideUpVariants from "../../motion/slide-up-variants";
import priceEstimateFormSchema from "../../schemas/price-estimate-form-schema";
import formatPhoneNumber from "../../utils/format-phone-number";
import toastConfig from "../../utils/toast-config";
import Button from "../button/button";
import Input from "../input/input";
import CountryMap from "../select/country-map";
import OperatingSystemMap from "../select/operating-system-map";
import Select from "../select/select";
import Title from "../title/title";
import styles from "./price-estimate-form.module.css";

const PriceEstimateForm = () => {
  type FormData = z.infer<typeof priceEstimateFormSchema>;

  const { register, reset, setValue, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(priceEstimateFormSchema),
  });

  const onSubmit = () => {
    toast.success("Orçamento enviado com sucesso!", {
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
    <motion.form
      action="#"
      className={styles.priceEstimateForm}
      custom={0}
      variants={slideUpVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Title text="Solicite seu orçamento" data-orientation="left" />
      <div className={styles.priceEstimateFormContent}>
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
        <div>
          <Select
            label="Sistema operacional"
            id="operatingSystem"
            initialText="Selecione o SO utilizado"
            options={OperatingSystemMap}
            register={register("operatingSystem", { required: true })}
          />
          <div className={styles.priceEstimareFormCounters}>
            <div>
              <Input
                id="servers"
                type="number"
                label="Servidores"
                defaultValue={0}
                min={0}
                max={50}
                register={register("servers")}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  console.log(target.value);
                }}
              />
              <Input
                id="desktops"
                type="number"
                label="Desktops"
                defaultValue={0}
                min={0}
                max={50}
                register={register("desktops")}
              />
              <Input
                id="printers"
                type="number"
                label="Impressoras"
                defaultValue={0}
                min={0}
                max={50}
                register={register("printers")}
              />
            </div>
            <div>
              <Input
                id="routers"
                type="number"
                label="Roteadores"
                defaultValue={0}
                min={0}
                max={50}
                register={register("routers")}
              />
              <Input
                id="notebooks"
                type="number"
                label="Notebooks"
                defaultValue={0}
                min={0}
                max={50}
                register={register("notebooks")}
              />
              <Input
                id="switchs"
                type="number"
                label="Switchs"
                defaultValue={0}
                min={0}
                max={50}
                register={register("switchs")}
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        text={"Solicitar meu orçamento"}
        styleType={"gradient"}
        type="submit"
      />
      <ToastContainer {...toastConfig} />
    </motion.form>
  );
};

export default PriceEstimateForm;
