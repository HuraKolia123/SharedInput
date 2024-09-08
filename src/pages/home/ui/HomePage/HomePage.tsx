// react
import { Input } from "@/shared/ui/Input";
import { FC } from "react";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Input
        placeholder="Enter a Email"
        type="text"
        label="Email"
        helperText="Enter a valid email"
      />
    </div>
  );
};
