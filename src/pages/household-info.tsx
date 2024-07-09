import { useState } from "react";
import { Button, Input, Select, SelectItem, RadioGroup, Radio } from '@nextui-org/react';
import PageContent from '~/components/PageContent';
import Link from 'next/link';

const HouseholdInfoPage = () => {
  const [householdIncome, setHouseholdIncome] = useState('');
  const [householdSize, setHouseholdSize] = useState<string>('1');
  const [taxFilingStatus, setTaxFilingStatus] = useState<string>('individual');

  const householdSizes = Array.from({ length: 10 }, (_, i) => ({
    key: (i + 1).toString(),
    label: (i + 1).toString(),
  }));

  return (
    <PageContent>
      <div className="flex flex-col gap-4">
        <h1>Step 2: Additional Information</h1>
        <Input
          fullWidth
          label="Household Income"
          placeholder="e.g. 3050000"
          value={householdIncome}
          onChange={(e) => setHouseholdIncome(e.target.value)}
        />
        <Select
          label="Household Size"
          placeholder="Select household size"
          value={householdSize}
          onChange={setHouseholdSize}
        >
          {householdSizes.map(size => (
            <SelectItem key={size.key}>
              {size.label}
            </SelectItem>
          ))}
        </Select>
        <RadioGroup
          label="Tax Filing Status"
          value={taxFilingStatus}
          onChange={setTaxFilingStatus}
        >
          <Radio value="individual">Individual</Radio>
          <Radio value="head_of_household">Head of Household</Radio>
          <Radio value="joint">Joint</Radio>
        </RadioGroup>
        <Link href="/summary">
          <Button color="primary">Submit</Button>
        </Link>
      </div>
    </PageContent>
  );
};

export default HouseholdInfoPage;
