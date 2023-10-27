import React from "react";
import "./App.css";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "./components/form-component";

function App() {
  const method = useForm();
  const { handleSubmit } = method;
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput name="name" label="name" />
      </form>
    </FormProvider>
  );
}

export default App;
