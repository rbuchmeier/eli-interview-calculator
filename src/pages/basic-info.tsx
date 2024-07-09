import { useState } from "react"
import { Button, Input, RadioGroup, Radio } from '@nextui-org/react';
import PageContent from '~/components/PageContent';
import Link from 'next/link';

const BasicInfoPage = () => {
  const [propertyType, setPropertyType] = useState<string>('single_family');

  return (
    <PageContent>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-gray-900">Start by telling us a bit about you</h1>
        <Input fullWidth label="Street Address" placeholder="e.g. 123 Main St." />
        <Input fullWidth label="City" placeholder="e.g. Denver" />
        <Input fullWidth label="State" placeholder="e.g. CO" />
        <Input fullWidth label="Zip Code" placeholder="e.g. 80012" />
        <RadioGroup
          label="Property Type"
          value={propertyType}
          onChange={setPropertyType}
        >
          <Radio value="single_family">Single Family</Radio>
          <Radio value="multifamily">Multifamily</Radio>
          <Radio value="commercial">Commercial</Radio>
        </RadioGroup>
        <Link href="/household-info">
          <Button color="primary">Next</Button>
        </Link>
      </div>
    </PageContent>
  );
};

export default BasicInfoPage;
