import { NewsBanner } from "../../components/Banner/Banner";
import { PressReleaseBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import NewsRelease from "../../components/News/NewsRelease";
import { NewsSubNavigation } from "../../components/Sub_Navigation/SubNavigation";

const PressRelease = () => {
  return (
    <>
      <NewsBanner />
      <PressReleaseBreadCrumb />
      <NewsSubNavigation />
      <NewsRelease />
    </>
  );
};

export default PressRelease;
