import { NewsBanner } from "../../components/Banner/Banner";
import { NewsProductsBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { NewsSubNavigation } from "../../components/Sub_Navigation/SubNavigation";

const NewsProduct = () => {
  return (
    <>
      <NewsBanner />
      <NewsProductsBreadCrumb />
      <NewsSubNavigation />
    </>
  );
};

export default NewsProduct;
