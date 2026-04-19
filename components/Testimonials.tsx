"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TestimonialSkeleton } from "./LoadingSkeletons";

const testimonials = [
  {
    id: 1,
    name: "Abanoub Talaat",
    role: "Full Stack Developer",
    company: "huma-volve",
    image: "/placeholder.svg?height=80&width=80&text=SC",
    rating: 5,
    testimonial:
      "A highly skilled Frontend Developer with strong expertise in React and modern frontend technologies. Demonstrates an excellent ability to build clean, scalable, and high-performance user interfaces. Consistently delivers high-quality work, follows best practices, and collaborates effectively with cross-functional teams. A reliable professional who adds real value to any project.",
  },
  {
    id: 2,
    name: "Hoda Yousry",
    role: "Frontend Developer",
    company: "huma-volve",
    image: "/placeholder.svg?height=80&width=80&text=MR",
    rating: 5,
    testimonial:
      "I had the chance to work with Rashad, and I was impressed by his front-end skills. He builds clean, responsive, and user-friendly interfaces, and always delivers on time. I truly recommend him for any front-end role.",
  },
  {
    id: 3,
    name: "wafaa  Hamdy",
    role: "Frontend Developer",
    company: "freelancer",
    image: "/placeholder.svg?height=80&width=80&text=EJ",
    rating: 5,
    testimonial:
      "I had the pleasure of working with Rashad during the same Frontend Development training. Rashad is a talented and dedicated frontend developer with a solid understanding of core frontend concepts and best practices. Collaborating with him was smooth and productive, and I benefited from his approach to problem-solving and teamwork throughout the projects. He is a reliable professional who would be a valuable addition to any frontend team.",
  },
  {
    id: 4,
    name: "Reda Salem",
    role: "Full Stack Developer",
    company: "Freelancer",
    image: "/placeholder.svg?height=80&width=80&text=DK",
    rating: 5,
    testimonial:
      "He is a passionate, motivated, and highly dedicated developer with a strong drive for continuous growth and improvement. Rashed pays great attention to detail, values clean and high-quality code, and always strives to deliver the best possible user experience. What truly sets him apart is his mindset — he is proactive, collaborative, and always eager to learn. I strongly believe he has a very promising future in the tech industry, and he would be a valuable asset to any team.",
  },
];

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isLoading]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Touch handlers for swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 dark:bg-gray-800/50 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Say
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have
            to say about working with me.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="max-w-4xl mx-auto">
            <TestimonialSkeleton />
          </div>
        ) : (
          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                size={24}
              />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight
                className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                size={24}
              />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: index === currentIndex ? 1 : 0,
                        scale: index === currentIndex ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.5 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                    >
                      <div className="absolute top-6 right-6 text-blue-600 dark:text-blue-400 opacity-20">
                        <Quote size={40} />
                      </div>

                      <div className="flex items-center mb-6">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-yellow-400 fill-current"
                            size={18}
                          />
                        ))}
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 dark:bg-blue-400 w-8"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
