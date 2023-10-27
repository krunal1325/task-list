import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
}

export function TextInput({ name, label, type = "text", ...props }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            className="px-2 py-1 border border-1 border-gray-400 text-gray-600"
            type={type}
            {...field}
            {...props}
          />
        )}
      />
      {errors?.[name] && <p>{errors?.[name]?.message as string}</p>}
    </div>
  );
}
