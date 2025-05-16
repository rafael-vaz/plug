import Head from "../components/head/head";
import PartnersList from "../components/partners/partners-list";
import PriceEstimateContainer from "../components/price-estimate/price-estimate-container";
import ServicePlanContainer from "../components/service-plan/service-plan-container";
import ServicesInfoContainer from "../components/services-info/services-info-container";
const Services = () => {
  return (
    <>
      <Head pageTitle="Serviços" />
      <ServicesInfoContainer />
      <ServicePlanContainer />
      <PriceEstimateContainer />
      <PartnersList />
    </>
  );
};

export default Services;
