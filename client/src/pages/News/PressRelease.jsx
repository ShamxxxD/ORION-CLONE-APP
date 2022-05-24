import { NewsBanner } from "../../components/Banner/Banner";
import { PressReleaseBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { NewsSubNavigation } from "../../components/Sub_Navigation/SubNavigation";

const PressRelease = () => {
  return (
    <>
      <NewsBanner />
      <PressReleaseBreadCrumb />
      <NewsSubNavigation />
    </>
  );
};

export default PressRelease;
