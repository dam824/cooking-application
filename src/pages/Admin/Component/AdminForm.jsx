 import styles from "./AdminForm.module.scss";
 import * as yup from 'yup';
 import {useForm} from 'react-hook-form';
 import {yupResolver} from '@hookform/resolvers/yup'
 import { ApiContext } from "../../../context/ApiContext";
 import { useContext } from "react";

const AdminForm = () => {

  const baseUri = useContext(ApiContext)

  const defaultValues = {
    title: '',
    image: ''
  }

  const recipeSchema = yup.object({
    title: yup.string().required('le titre de la recette doit etre renseigne').min(10, " le titre doit etre explicite").max(30, "le titre doit contenir moins de 30 caracteres"),
    image: yup.string().required('il faut renseigner une image').url("l image doit etre un lien valide")
  });


  const { formState: {errors, isSubmitting}, 
  register, 
  handleSubmit,
  reset,
  setError,
  clearErrors,
} = useForm({
  defaultValues,
    resolver: yupResolver(recipeSchema),
  });

  async function submit(values){
   try{
    clearErrors();
    const response = await fetch(baseUri, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if(response.ok) {
      reset(defaultValues);
    }else{
      setError('generic', {type: 'generic', message: "il y a eu une erreur"});
    }
   }catch(e){
    setError('generic', {type: 'generic', message: "il y a eu une erreur"})
   }
  }


  return (
    <form onSubmit={handleSubmit(submit)} className={`d-flex flex-column card p-20 ${styles.AdminForm}`}>
      <h2 className="mb-20">Ajouter une recette</h2>
      <div className="d-flex flex-column">
        <label htmlFor="">Titre de la recette</label>
        <input {...register('title')} type="text" />
        {errors.title && <p  className="form-error">{errors.title.message}</p>}
         
      </div>
      <div className="d-flex flex-column mb-20">
        <label htmlFor="">Image de la recette</label>
        <input {...register('image')} type="text" />
        {errors.title && <p  className="form-error">{errors.title.message}</p>}
      </div>
      {errors.generic && <p className="form-error">{errors.generic.message}</p>}
      <div className="d-flex flex-column mb-20">
         
        <button disabled={isSubmitting} className="btn btn-primary">Ajouter</button>
      </div>
    </form>
  )
}

export default AdminForm