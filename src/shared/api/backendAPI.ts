// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// constants
import { backendBaseUrl } from "../libs/constants/backendBaseUrl";

export const backendAPI = createApi({
  reducerPath: "backendAPI",
  baseQuery: fetchBaseQuery({ baseUrl: backendBaseUrl }),
  endpoints: () => ({}),
});
