import { useState } from "react";
import GetStarted from "~/screens/get-started";
import BasicInfo from "~/screens/basic-info";
import HouseholdInfo from "~/screens/household-info";

type Screens = "home" | "basic-info" | "household-info";

export default function Home() {
  const [screenOptions, setScreenOptions] = useState<Screens>("home");
  switch (screenOptions) {
    case "home":
      return <GetStarted onSubmit={() => setScreenOptions("basic-info")} />;
    case "basic-info":
      return <BasicInfo onSubmit={() => setScreenOptions("household-info")} />;
    case "household-info":
      return <HouseholdInfo />;
    default:
      return <div>Something went wrong</div>;
  }
}
