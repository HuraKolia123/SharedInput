// react
import { Input } from "@/shared/ui/Input";
import { ChangeEvent, FC, useState } from "react";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const [text, setText] = useState("");

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const [text2, setText2] = useState("");

  const onTextChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setText2(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Input
        isDisabled={true}
        value={text}
        onChange={onTextChange}
        isRequired={true}
        isError={true}
        placeholder="Enter a Email"
        type="text"
        label="Email"
        helperText="Enter a valid email"
      />

      <Input
        value={text2}
        onChange={onTextChange2}
        isBorderDisabled={true}
        placeholder="Enter a Email"
        type="text"
        label="Email"
        helperText="Enter a valid email"
      />
    </div>
  );
};
