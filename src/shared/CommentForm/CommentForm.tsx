import React, {useEffect} from 'react';
import {Formik, Field, Form, ErrorMessage, useFormikContext} from "formik";
import * as Yup from 'yup'
import styles from './commentform.css';

type Props = {
    value: string,
    onSubmitForm: () => void,
    formUpdate: (values: string) => void
}

export const CommentForm = ({onSubmitForm, formUpdate, value}: Props) => {

    const FormObserver: React.FC = () => {
        const values  = useFormikContext();
        useEffect(() => {
            const result = Object.values(values)
            formUpdate(result[0].comment)
        }, [values]);
        return null;
    };
    return (
        <Formik
            initialValues={{ comment: value }}
            validationSchema={Yup.object({
                comment: Yup.string()
                    .min(3, 'Не менее трех символов')
            })}
            onSubmit={(values,  {setSubmitting, setErrors} ) => {
                if (values.comment.length === 0) {
                    setErrors({comment:'Пустое поле'})
                    return
                }

                setSubmitting(false);
                onSubmitForm();
            }}
        >
            {({values, errors, touched}) => (
                <Form className={styles.form}  >
                    <label htmlFor="comment">Комментарий</label>
                    <Field id="comment" className={styles.input}
                           value={values.comment}
                           name="comment" type="text"
                           aria-invalid = {touched.comment  && errors.comment  ? true: undefined }
                    />
                    <div className={styles.errorMessage}>
                    <ErrorMessage name="comment" />
                    </div>
                    <button type="submit" className={styles.button} disabled = {touched.comment  && errors.comment  ? true: undefined }>Комментировать</button>
                <FormObserver/>
                </Form>
            )}
        </Formik>
    );
};

