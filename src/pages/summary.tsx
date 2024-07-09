import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import PageContent from "~/components/PageContent";

const SummaryPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call with a 2-second delay
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
      const response = await fetch('/mock-api-response.json');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <PageContent>
      <div className="flex flex-col gap-4">
        <h1>Incentive Summary</h1>
        { loading ? 
          <Spinner size="large" />
          :
          <div className="flex flex-col gap-8">
          {data?.programs.map((program) => (
              <div key={program.id} className="flex flex-col gap-2">
                <h1>{program.name}</h1>
                <p className="text-sm text-gray-500">{program.description}</p>
                <Table aria-label={`${program.name} Incentives Table`}>
                  <TableHeader>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Benefit Type</TableColumn>
                    <TableColumn>Max Amount</TableColumn>
                    <TableColumn>Min Amount</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {program.incentives.map((incentive) => (
                      <TableRow key={incentive.id}>
                        <TableCell>{incentive.name}</TableCell>
                        <TableCell>{incentive.benefit_type}</TableCell>
                        <TableCell>
                          {(incentive.max_amount / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </TableCell>
                        <TableCell>
                          {(incentive.min_amount / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ))}
          </div>
        }
      </div>
    </PageContent>
  );
};

export default SummaryPage;
