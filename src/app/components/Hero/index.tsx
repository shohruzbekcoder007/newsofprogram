"use client"
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    mobile: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};
const sliderImageUrl = [
    {
        url: "https://codilime.com/static/2b5773beca118974180168ada813ba7b/an-introduction-to-low-level-programming.jpg",
        title: "Nimadir title yoziladi",
        exerpt: "Nimadir unga qushimcha narsalar yoziladi va titleni izohlab keladi"
    },
    {
        url: "https://codilime.com/static/2b5773beca118974180168ada813ba7b/an-introduction-to-low-level-programming.jpg",
        title: "Nimadir title yoziladi",
        exerpt: "Nimadir unga qushimcha narsalar yoziladi va titleni izohlab keladi"
    },
    {
        url:
            "https://codilime.com/static/2b5773beca118974180168ada813ba7b/an-introduction-to-low-level-programming.jpg",
        title: "Nimadir title yoziladi",
        exerpt: "Nimadir unga qushimcha narsalar yoziladi va titleni izohlab keladi"
    },
    {
        url: "https://codilime.com/static/2b5773beca118974180168ada813ba7b/an-introduction-to-low-level-programming.jpg",
        title: "Nimadir title yoziladi",
        exerpt: "Nimadir unga qushimcha narsalar yoziladi va titleni izohlab keladi"
    },
    {
        url:"https://codilime.com/static/2b5773beca118974180168ada813ba7b/an-introduction-to-low-level-programming.jpg",
        title: "Nimadir title yoziladi",
        exerpt: "Nimadir unga qushimcha narsalar yoziladi va titleni izohlab keladi"
    }
];
const Hero = () => {
    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
            >
                {sliderImageUrl.map((imageUrl, index) => {
                    return (
                        <Box sx={{ position: "relative", width: "100%", height: "70vh" }} key={index}>
                            <Image src={imageUrl.url} alt="movie" fill style={{ objectFit: "cover" }} />
                            <Box
                                position={"relative"}
                                color={"white"}
                                zIndex={999}
                                sx={{
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    padding: "50px"
                                }}
                                width={{xs: "100%", xl: "70%"}}
                            >
                                <Typography variant="h4">{imageUrl.title}</Typography>
                                <Typography variant="h5">{imageUrl.exerpt}</Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Hero;
