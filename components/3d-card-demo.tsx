"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"
import { div } from "framer-motion/client"

export default function ThreeDCardDemo() {
    return (
        <>
            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            WeightWatchers (WW) International, Inc.
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            WeightWatchers provides science-backed weight loss programs with personalized meal plans, tracking tools, and coaching support.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company01.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://www.weightwatchers.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Cantor’s Driving School Nevada
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Cantor’s Driving School offers professional behind-the-wheel training with certified instructors, helping students become safe and confident drivers.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company02.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://www.cantorsdrivingschoolfl.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Barx Parx Indoor Dog Park & Dog Daycare
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Barx Parx is an indoor dog park offering dog daycare, training, grooming, and social events in a safe, fun environment.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company03.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://barxparx.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            The Cleaning Buffs
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            The Cleaning Buffs provide reliable residential and commercial cleaning services with attention to detail and customer satisfaction.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company04.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://thecleaningbuffs.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Designs by D&J
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Designs by D&J specializes in personalized event planning, floral arrangements, and elegant décor for all occasions. They bring visions to life with style.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company05.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://designsbydandjinfo.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            A to Z Renovations NY
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            A to Z Renovations offers remodeling services for kitchens, bathrooms, and full homes across NYC. They focus on quality craftsmanship and design.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company06.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://atozrenovationsny.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Sotto Mare Oysteria & Seafood Restaurant
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Sotto Mare serves classic Italian seafood dishes in a cozy, old-school North Beach setting. Famous for its fresh seafood and local charm.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company07.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://www.sottomaresf.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            CeraVe Skincare
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            CeraVe provides skincare products with essential ceramides to protect and restore the skin barrier. Suitable for all skin types.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company08.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://www.cerave.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Senior Helpers®
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Senior Helpers offers personalized in-home care services for seniors, including companion care, personal care, and dementia support.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company09.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://www.seniorhelpers.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            We Kare Medical Center
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            We Kare Medical Center provides comprehensive primary care, urgent care, and wellness services for patients of all ages.

                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company010.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://wekaremedicalcenter.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Norse Painting, LLC
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Norse Painting offers residential and commercial painting services with a focus on quality, reliability, and customer satisfaction.

                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company011.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://norsepainting.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>

            <div>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            Catran Agency
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            Catran Agency specializes in branding, design, and digital marketing strategies to help businesses grow and stand out.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={"/companies/company012.jpg"}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="https://catranagency.com/"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Visit Website
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as={Link}
                                href="/meeting"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Book For Me!
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </>
    )
}

