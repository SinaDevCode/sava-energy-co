import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import image1 from "../assets/images/Services/pic1.png";
import image2 from "../assets/images/Services/pic2.png";
import image3 from "../assets/images/Services/pic3.png";
import image4 from "../assets/images/Services/bullet.png";
import image5 from "../assets/images/Services/cadr.png";

import "../styles/services.css";
const Services = () => {
	return (
		<>
			<Header />
			<div className="flex flex-col">
				<span className="relative my-8">
					<img
						src={image5}
						className="w-[620px]"
					/>
					<h2 className="absolute top-1/2 -translate-y-1/2 px-8 font-bold text-White text-xl">
						Drilling Fluid Measurement Unit
					</h2>
				</span>
				<div className="flex flex-col lg:flex-row justify-between items-center flex-wrap mt-8 lg:mt-16 lg:pl-32 lg:pr-40 gap-4 lg:gap-0">
					<img
						src={image1}
						className="h-[400px] w-auto lg:translate-x-16"
					/>
					<div className="flex flex-col px-20 lg:w-[600px] gap-6">
						<p className="text-justify">
							The Drilling Fluid Measurement Unit is an innovative
							laboratory equipment streamlining the measurement of
							various drilling fluid properties. Employing
							cutting-edge sensor technology, it accurately
							captures key of the drilling fluid parameters such
							as rheology, density, temperature, and pH values.
						</p>
						<p className="text-justify">
							This instrument facilitates automated data
							acquisition, empowering engineers and efficiency, it
							offers a significant improvement over manual
							methods. Moreover, its compatibility with other
							drilling fluid engineering software enables rapid,
							in-depth analysis of drilling fluid performance.
						</p>
					</div>
				</div>
				<div className="flex justify-between items-center flex-wrap-reverse mb-4 pl-16 pr-24">
					<div className="flex flex-col w-[500px] gap-6 ">
						<div className="flex items-center gap-2 -translate-x-6 md:translate-x-0">
							<img
								src={image4}
								className="w-8"
							/>
							<h2 className="text-2xl text-Cyan font-bold lg:my-4">
								Functions
							</h2>
						</div>
						<span className="relative md:translate-x-16">
							<ul className="text-justify text-Cyan font-medium circle">
								Measurement of fluid rotational viscosity
								(reading at 3, 6, 100, 200, 300, 600 rpm) and
								density (following API 13B standard) from root
								temperature to 65C.
							</ul>
						</span>
						<span className="relative md:translate-x-16">
							<ul className="text-justify text-Cyan font-medium circle">
								Fast calculation of initial cut, final cut, PV
								(Plastic Viscosity), and YP (Yield Point)
								values.
							</ul>
						</span>
					</div>
					<img
						src={image2}
						className="h-[350px] w-auto xl:-translate-x-48 mx-auto lg:mx-0"
					/>
				</div>
			</div>

			<div className="flex flex-col">
				<span className="relative my-8">
					<img
						src={image5}
						className="w-[620px]"
					/>
					<h2 className="absolute top-1/2 -translate-y-1/2 px-8 font-bold text-White text-xl wrap">
						Microchip Products
					</h2>
				</span>
				<div className="flex md:gap-48 pl-16 flex-wrap-reverse md:justify-start justify-center mt-8 md:mt-16">
					<div className="flex flex-col -translate-x-8 md:translate-x-0">
						<table>
							<thead>
								<th className="text-start">
									Microchip Mechanical Specifications
								</th>
							</thead>
							<tbody>
								<tr>
									<td>Shape</td>
									<td>Capsule</td>
								</tr>
								<tr>
									<td>Diameter, mm</td>
									<td>10-20</td>
								</tr>
								<tr>
									<td>Length, mm</td>
									<td>18-30</td>
								</tr>
								<tr>
									<td>Material</td>
									<td>Polymer</td>
								</tr>
								<tr>
									<td>Density, g/cm3</td>
									<td>1.3-1.8</td>
								</tr>
								<tr>
									<td>Rated pressure, psi</td>
									<td>15,000</td>
								</tr>
								<tr>
									<td>Rated temperature, degC</td>
									<td>150</td>
								</tr>
							</tbody>
						</table>
						<table>
							<thead>
								<th className="text-start text-DarkBlue">
									Microchip General Specifications
								</th>
							</thead>
							<tbody>
								<tr>
									<td>Battery capacity</td>
									<td>3.4mAh-48mAh</td>
								</tr>
								<tr>
									<td>Memory</td>
									<td>32KB-2MB</td>
								</tr>
								<tr>
									<td>Sampling rate</td>
									<td>Configurable</td>
								</tr>
							</tbody>
						</table>
						<div className="flex gap-4">
							<table>
								<thead className="text-DarkBlue">
									<th className="text-start">
										Temperature Specifications
									</th>
									<th>Measurement</th>
								</thead>
								<tbody>
									<tr>
										<td>Measurement range, degC</td>
										<td>0-150</td>
									</tr>
									<tr>
										<td>Accuracy, degC</td>
										<td>±0.5</td>
									</tr>
									<tr>
										<td>Resolution, degC</td>
										<td>0.1</td>
									</tr>
								</tbody>
							</table>
							<table>
								<thead className="text-DarkBlue">
									<th className="text-start">
										Pressure Specifications
									</th>
									<th>Measurement</th>
								</thead>
								<tbody>
									<tr>
										<td>Measurement range, psi</td>
										<td>0-10,000</td>
									</tr>
									<tr>
										<td>Accuracy, %FS</td>
										<td>±0.5</td>
									</tr>
									<tr>
										<td>Resolution, psi</td>
										<td>0.1</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="flex justify-center items-center relative">
						<p className="absolute hidden xl:block top-60">
							Downhole microchips
						</p>
						<span className="absolute bottom-0 hidden xl:flex flex-col items-center">
							<p>MicrochipDock</p>
							<p>(wireless charging and downloading device)</p>
						</span>
						<img
							src={image3}
							className="w-auto h-[500px]"
						/>
					</div>
				</div>
			</div>
			<div className="px-16 my-8 flex flex-col">
				<div className="flex items-center gap-2 mt-8 mb-4 lg:mt-20">
					<img
						src={image4}
						className="w-8"
					/>
					<h2 className="text-3xl font-medium lg:my-4 text-Grey">
						Features & Benefits
					</h2>
				</div>
				<div className="flex flex-wrap xl:justify-between px-5 flex-col xl:flex-row items-start gap-4">
					<div className="flex flex-col md:pl-10 gap-2">
						<ul className="disc">Ultra small size</ul>
						<ul className="disc">MEMS Technology</ul>
						<ul className="disc">Wide Operation Range</ul>
						<ul className="disc">Minimized power consumption</ul>
						<ul className="disc">Easy to use</ul>
						<ul className="disc">Reduce operation risk</ul>
						<ul className="disc">Reduce operation time and cost</ul>
						<ul className="disc">Maximize operation efficiency</ul>
						<ul className="text-nowrap disc">
							No tool installation and maintenance
						</ul>
					</div>
					<div className="flex flex-col md:translate-x-10">
						<ul className="feature">Innovative technology</ul>
						<p className="mb-2 text-Cyan max-w-[400px]">
							An innovative open platform to provide dynamic
							measurements over the entire drilled borehole
						</p>
						<ul className="feature">
							Near real-time diagnostic tool
						</ul>
						<p className="mb-2 text-Cyan max-w-[400px]">
							Function as a diagnostic tool for problems
							encountered during drilling and completion
							operations.
						</p>
						<ul className="feature">Convenient & Timesaving</ul>
						<p className="mb-2 text-Cyan max-w-[450px]">
							A simple and quick way to access download
							measurements without tripping operation and tool
							maintenance.
						</p>
						<ul className="feature">Low cost & High performance</ul>
						<p className="mb-2 text-Cyan max-w-[475px]">
							a micro-size, low cost product with high measurement
							accuracy and reliability, which can be used in many
							HPHT wells.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Services;
