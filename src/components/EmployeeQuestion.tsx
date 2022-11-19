import React, { useState } from "react";
import { employeeCalculate } from "../services/api";
import get from "lodash.get";

export const EmployeeQuestion = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [annualSalary, setAnnualSalary] = useState(0);
  const [superRate, setSuperRate] = useState(0);
  const [paymentStartDate, setPaymentStartDate] = useState("");
  const [output, setOutput] = useState("");
  const onClickSubmit = async () => {
    await employeeCalculate({
      firstName,
      lastName,
      annualSalary,
      superRate,
      paymentStartDate,
    }).then(async (res) => {
      setOutput(
        res
          .map((item) => {
            const {
              name,
              payPeriod,
              grossIncome,
              incomeTax,
              netIncome,
              superAnnual,
            } = item;
            return (
              name +
              "," +
              payPeriod +
              "," +
              grossIncome +
              "," +
              incomeTax +
              "," +
              superAnnual
            );
          })
          .join("\n")
      );
    });
  };

  return (
    <div className="bg-slate-100 m-5">
      <div className="m-5 pt-5">
        <label htmlFor="First Name" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          name="First Name"
          id="First Name"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="m-5">
        <label htmlFor="Last Name" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          name="Last Name"
          id="Last Name"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="m-5">
        <label htmlFor="Annual Salary" className="sr-only">
          Annual Salary
        </label>
        <input
          type="text"
          name="Annual Salary"
          id="Annual Salary"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Annual Salary"
          value={annualSalary}
          onChange={(e) => setAnnualSalary(+e.target.value)}
        />
      </div>
      <div className="m-5">
        <label htmlFor="Super Rate (%)" className="sr-only">
          Super Rate (%)
        </label>
        <input
          type="text"
          name="Super Rate (%)"
          id="Super Rate (%)"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Super Rate (%)"
          value={superRate}
          onChange={(e) => setSuperRate(+e.target.value)}
        />
      </div>
      <div className="m-5">
        <label htmlFor="Payment Start Date" className="sr-only">
          Payment Start Date
        </label>
        <input
          type="text"
          name="Payment Start Date"
          id="Payment Start Date"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Payment Start Date"
          value={paymentStartDate}
          onChange={(e) => setPaymentStartDate(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="w-full inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={onClickSubmit}
      >
        Submit
      </button>
      <h3 className="whitespace-pre">{output}</h3>
    </div>
  );
};
