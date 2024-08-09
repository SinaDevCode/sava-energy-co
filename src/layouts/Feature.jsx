import Product from "../images/OurFeature/products.png";
import ProductHover from "../images/OurFeature/products-active.png";
import Services from "../images/OurFeature/services.png";
import ServicesHover from "../images/OurFeature/services-active.png";
import LabEquipment from "../images/OurFeature/lab-equipments.png";
import LabEquipmentHover from "../images/OurFeature/lab-equipments-active.png";

function Feature() {
  return (
    <div className="p-8 flex flex-wrap justify-center w-full gap-8 bg-cyan">
      <div className="w-[350px] flex flex-col items-center p-6">
        <img src={Services} alt="" className="h-[150px]" />
        <h2 className="text-3xl font-bold mt-5 mb-3 text-gray">SERVICES</h2>
        <p className="text-justify text-sm text-gray">
          SAVA oilfield drilling fluid & cement materials are value-added
          materials which are customer-focused and solution-driven, respecting
          all specifications, environmental regulations and the strictest
          quality assurance criteria.
        </p>
      </div>
      <div className="w-[350px] flex flex-col items-center p-6">
        <img src={Product} alt="" className="h-[150px]" />
        <h2 className="text-3xl font-bold mt-5 mb-3 text-gray">PRODUCTS</h2>
        <p className="text-justify text-sm text-gray">
          SAVA helps oil and gas operators increase efficiency and lower costs
          by designing and engineering drilling fluid systems and additives that
          accommodate a wide range of drilling environments and demanding
          applications-HPHT, deep water, shale gas, heavy oil, depleted wells,
          and more.
        </p>
      </div>
      <div className="w-[350px] flex flex-col items-center p-6">
        <img src={LabEquipment} alt="" className="h-[150px]" />
        <h2 className="text-3xl font-bold mt-5 mb-3 text-gray">LAB EQUIPMENTS</h2>
        <p className="text-justify text-sm text-gray">
          Our drilling fluids testing equipment sales line includes innovative
          designs such as the inline Rheometer, VG Meter, Retorts, Aging Cells,
          Roller Ovens, Mud Balances, Filter Presses, HT HP Filter Press, Marsh
          Funnel-Cup, Sand Content kit, Mixer, spare parts and all other
          instruments required to evaluate drilling fluid properties.
        </p>
      </div>
    </div>
  );
}

export default Feature;
