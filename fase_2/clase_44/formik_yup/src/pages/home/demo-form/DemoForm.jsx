import { AlertDanger, AlertSuccess } from "@/components/alerts";
import { ButtonPrimary } from "@/components/buttons";
import { InputAge, InputMoney } from "@/components/inputs";
import { useFormik } from "formik";
import { useState } from "react";
import { initialValues } from "./demo-form.initial-values";
import "./demo-form.scss";
import { validationSchema } from "./demo-form.validation-schema";

const DemoForm = () => {
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
            setIsSubmitting(true);
            formik.resetForm();
            setTimeout(() => {
                setIsSubmitting(false);
            }, 3000);
        },
    });

    return (
        <form
            className="demo-form"
            onSubmit={formik.handleSubmit}>
            <InputAge
                name="age"
                label="Edad"
                value={formik.values.age}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age} />

            <InputMoney
                name="price"
                label="Precio"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price} />

            <ButtonPrimary
                type="submit"
                disabled={Object.keys(formik.errors).length > 0}
                className="submit-button">
                    Enviar Formulario
            </ButtonPrimary>

            <AlertSuccess
                open={isSubmitting}
                message="¡Formulario enviado con éxito!"/>

            <AlertDanger
                open={!formik.isValid}
                message="¡Formulario no enviado!"/>
        </form>
    );
};

export default DemoForm;