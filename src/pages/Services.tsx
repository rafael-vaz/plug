import Head from "../components/Head/Head";
import PartnersList from "../components/Partners/PartnersList";
import PriceEstimateContainer from "../components/PriceEstimate/PriceEstimateContainer";
import ServicePlanContainer from "../components/ServicePlan/ServicePlanContainer";
import ServicesInfoContainer from "../components/ServicesInfo/ServicesInfoContainer";
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
