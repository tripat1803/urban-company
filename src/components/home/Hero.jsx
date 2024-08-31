import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { public_api } from "@/api/api_client";
import Link from "next/link";

function Card({ image, id, body }) {
	return (
		<Link href={`/services/${id}`}>
			<div className="flex flex-col items-center gap-2">
				<div className="l">
					{/* <Image
					className="w-12 h-14 object-cover"
					width={200}
					height={150}
					alt="Thisis"
					src={image}
				/> */}
				</div>
				<p className="text-md text-primary">{body}</p>
			</div>
		</Link>
	);
}

export default function Hero() {
	const [services, setServices] = useState([]);

	const fetchData = async () => {
		try {
			const response = await public_api.get("/public/home");
			setServices(response.data.gigs);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="max-h-[605px] h-[100vh] pt-12 flex justify-center px-8">
			<div className="flex justify-between gap-12 w-full max-w-screen-xl">
				<div className="w-[40%] flex flex-col gap-8">
					<h1 className="text-4xl">Home services at your doorstep</h1>
					<div className="border py-6 px-6 rounded-lg flex flex-col gap-6">
						<h6 className="text-xl font-semibold text-[rgba(84,84,84,1.00)]">
							What are you looking for?
						</h6>
						<div className="grid grid-cols-3 gap-4">
							{services.map((service, index) => (
								<Card
									image={
										"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
									}
									body={service.name}
									id={service.id}
									key={index}
								/>
							))}

							{/* <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} />
                            <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} />
                            <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} />
                            <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} />
                            <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} />
                            <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} />
                            <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} />
                            <Card image={"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"} body={"Women & Salon spa"} /> */}
						</div>
					</div>
				</div>
				<div className="w-[48%] flex justify-end rounded-lg overflow-hidden">
					<Image
						className="w-auto h-full object-cover rounded-lg"
						width={100}
						height={100}
                        alt={"new"}
						src={
							"https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
						}
					/>
				</div>
			</div>
		</div>
	);
}
