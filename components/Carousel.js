import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import { images } from "./image-data";
import { carouselImages } from "@/public/images";


// export default function Carousel({ image }) {
export default function Carousel({ image }) {
    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={image}
                    src={image}
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </AnimatePresence>
        </>
    )
};