import FeatureCard from "../components/FeatureCard";
import services from "../assets/images/home/services.webp";
import products from "../assets/images/home/products.webp";
import labEquipmentsImage from "../assets/images/home/lab-equipments.webp";
import activeServices from "../assets/images/home/services-active.webp";
import activeLabEquipmentsImage from "../assets/images/home/lab-equipments-active.webp";
import activeProducts from "../assets/images/home/products-active.webp";

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-Cyan py-12 gap-8">
      <FeatureCard
        inactive={services}
        active={activeServices}
        title="SERVICES"
        text="SAVA oilfield drilling fluid & cement materials are value-added materials which are customer-focused and solution-driven, respecting all specifications, environmental regulations and the strictest quality assurance criteria."
      ></FeatureCard>
      <FeatureCard
        inactive={products}
        active={activeProducts}
        title="PRODUCTS"
        text="SAVA helps oil and gas operators increase efficiency and lower costs by designing and engineering drilling fluid systems and additives that accommodate a wide range of drilling environments and demanding applications-HPHT, deep water, shale gas, heavy oil, depleted wells, and more."
      ></FeatureCard>
      <FeatureCard
        inactive={labEquipmentsImage}
        active={activeLabEquipmentsImage}
        title="LAB EQUIPMENTS"
        text="Our drilling fluids testing equipment sales line includes innovative designs such as the inline Rheometer, VG Meter, Retorts, Aging Cells, Roller Ovens, Mud Balances, Filter Presses, HT HP Filter Press, Marsh Funnel-Cup, Sand Content kit, Mixer, spare parts and all other instruments required to evaluate drilling fluid properties."
      ></FeatureCard>
    </div>
  );
};

export default Services;
