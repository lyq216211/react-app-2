import { Form, Input, InputNumber } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";

const Form3 = () => {
  const [number, setNumber] = useState({ value: 11, status: "success", errorMessage: "" });
  const handleChange = (value) => {
    if (value === 11) {
      setNumber({ value, status: "success", errorMessage: "" });
    } else {
      setNumber({ value, status: "error", errorMessage: "The prime between 8 and 12 is 11!" });
    }
  };
  return (
    <div>
      <Form>
        <FormItem
          label="Prime between 8 & 12"
          name="count"
          validateStatus={number.status}
          help={
            number.status === "success"
              ? "A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself."
              : number.errorMessage
          }
        >
          <InputNumber min={8} max={12} value={number.value} onChange={handleChange}></InputNumber>
        </FormItem>
      </Form>
    </div>
  );
};

export default Form3;
