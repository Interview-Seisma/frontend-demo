import axios, { AxiosResponse } from "axios";
import { CalculateRepsonse, Employee } from "./Employee";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const employeeCalculate = async ({
  firstName,
  lastName,
  annualSalary,
  superRate,
  paymentStartDate,
}: Employee) => {
  const resp: AxiosResponse<CalculateRepsonse[]> = await api.post(
    `/employee/calculate`,
    [{ firstName, lastName, annualSalary, superRate, paymentStartDate }]
  );
  console.log({ resp });
  return resp.data;
};
