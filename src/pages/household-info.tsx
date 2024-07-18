import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import PageContent from "~/components/PageContent";
import Link from "next/link";
import { useEligibility } from "~/contexts/eligibility";
import { useForm, Controller } from "react-hook-form";

type Inputs = {
  householdIncome: string;
  householdSize: string;
  taxFilingStatus: string;
};

const HouseholdInfoPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { setHouseholdIncome, setHouseholdSize, setTaxFilingStatus } =
    useEligibility();

  const onSubmitForm = (data: Inputs) => {
    setHouseholdIncome(data.householdIncome);
    setHouseholdSize(data.householdSize);
    setTaxFilingStatus(data.taxFilingStatus);
    console.log("Submitting form...", data);
  };

  useEffect(() => {
    console.log("Hello from useEffect");
    console.log("Errors: ", errors);
  }, [errors]);

  const householdSizes = Array.from({ length: 10 }, (_, i) => ({
    key: (i + 1).toString(),
    label: (i + 1).toString(),
  }));

  return (
    <PageContent>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-gray-900">
          Just a few more questions for ya
        </h1>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Controller
            name="householdIncome"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => (
              <Input
                fullWidth
                label="Household Income"
                placeholder="e.g. 3050000"
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                errorMessage={errors.householdIncome?.message}
              />
            )}
          />
          <Controller
            name="householdSize"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => (
              <Select
                label="Household Size"
                placeholder="Select household size"
                onChange={(e) => {
                  onChange(e.target.value);
                }}
              >
                {householdSizes.map((size) => (
                  <SelectItem key={size.key}>{size.label}</SelectItem>
                ))}
              </Select>
            )}
          />
          <Controller
            name="taxFilingStatus"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => (
              <RadioGroup label="Tax Filing Status" onChange={onChange}>
                <Radio value="individual">Individual</Radio>
                <Radio value="head_of_household">Head of Household</Radio>
                <Radio value="joint">Joint</Radio>
              </RadioGroup>
            )}
          />
          <Link href="#">
            <Button color="primary">Submit</Button>
          </Link>
        </form>
      </div>
    </PageContent>
  );
};

export default HouseholdInfoPage;
