import { useState } from "react";

export default function Input({
  input,
  type,
  children,
  textArea,
  resume,
  updateResume,
  onChange,
}) {
  if (!textArea) {
    return (
      <>
        <label htmlFor={input}>{children}</label>
        <input
          className="border-1 border-amber-600 rounded-md"
          type={type}
          name={input}
          onChange={onChange}
        />
      </>
    );
  }
  return (
    <>
      <label htmlFor={input}>{children}</label>

      <textarea
        id="description"
        name="description"
        rows="4"
        cols="50"
        className="border-1 border-amber-600 rounded-md"
      ></textarea>
    </>
  );
}
