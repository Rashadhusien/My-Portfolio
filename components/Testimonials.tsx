"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TestimonialSkeleton } from "./LoadingSkeletons";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    image: "/placeholder.svg?height=80&width=80&text=SC",
    rating: 5,
    testimonial:
      "Alex delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and enjoyable. The final product was both beautiful and highly functional.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=80&width=80&text=MR",
    rating: 5,
    testimonial:
      "Working with Alex was a game-changer for our business. He transformed our outdated website into a modern, responsive platform that significantly improved our user engagement and conversion rates.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Marketing Director",
    company: "Creative Agency",
    image: "/placeholder.svg?height=80&width=80&text=EJ",
    rating: 5,
    testimonial:
      "Alex's creativity and technical skills are unmatched. He brought our vision to life with pixel-perfect precision and delivered ahead of schedule. I highly recommend him for any web development project.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "E-commerce Plus",
    image: "/placeholder.svg?height=80&width=80&text=DK",
    rating: 5,
    testimonial:
      "The e-commerce platform Alex built for us has been instrumental in our growth. His expertise in React and modern web technologies resulted in a fast, secure, and user-friendly online store.",
  },
];

export default function Testimonials() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
