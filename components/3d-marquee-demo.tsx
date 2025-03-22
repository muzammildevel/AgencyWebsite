"use client"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"
import Image from "next/image"

export default function ThreeDMarqueeDemo() {
    const images = [
        "/companies/company01.jpg",
        "/companies/company02.jpg",
        "/companies/company03.jpg",
        "/companies/company04.jpg",
        "/companies/company05.jpg",
        "/companies/company06.jpg",
        "/companies/company07.jpg",
        "/companies/company08.jpg",
        "/companies/company09.jpg",
        "/companies/company010.jpg",
        "/companies/company011.jpg",
        "/companies/company012.jpg",
        "/companies/company01.jpg",
        "/companies/company02.jpg",
        "/companies/company03.jpg",
        "/companies/company04.jpg",
        "/companies/company05.jpg",
        "/companies/company06.jpg",
        "/companies/company07.jpg",
        "/companies/company08.jpg",
        "/companies/company09.jpg",
        "/companies/company010.jpg",
        "/companies/company011.jpg",
        "/companies/company012.jpg",
        "/companies/company01.jpg",
        "/companies/company02.jpg",
        "/companies/company03.jpg",
        "/companies/company04.jpg",
        "/companies/company05.jpg",
        "/companies/company06.jpg",
        "/companies/company07.jpg",
        "/companies/company08.jpg",
        "/companies/company09.jpg",
        "/companies/company010.jpg",
        "/companies/company011.jpg",
        "/companies/company012.jpg",
    ]
    return (
        <>
            <div className="section-heading">
                <div className="flex justify-center">
                    <div className="tag">Our Recent Projects</div>
                </div>
                <h2 className="section-title mt-5">Previous Work Proofs</h2>
                <p className="section-description mt-5">
                Explore the innovative projects we've recently completed, showcasing our dedication to delivering high-quality solutions that meet the unique needs of our clients.
                </p>
            </div>
            <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
                <ThreeDMarquee images={images} />
            </div>
        </>
    )
}

