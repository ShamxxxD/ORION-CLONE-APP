import { NewsBanner } from "../../components/Banner/Banner";
import { NewsProductsBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import News from "../../components/News/News";
import { NewsSubNavigation } from "../../components/Sub_Navigation/SubNavigation";

const NewsProduct = () => {
  return (
    <>
      <NewsBanner />
      <NewsProductsBreadCrumb />
      <NewsSubNavigation />
      <News />
    </>
  );
};

export default NewsProduct;
