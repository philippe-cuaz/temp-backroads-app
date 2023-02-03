import Title from "./Title";
import { services } from "../data";
import Service from "./Service";
import service from "studio/src/service";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />

        <div className="section-center services-center">
          {services.map(() => {
            return <Service key={service.id} {...service} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Services;
