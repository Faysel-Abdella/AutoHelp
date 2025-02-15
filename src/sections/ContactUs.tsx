"use client";
import { Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import USstates from "@/data/us-states";
import { z } from "zod";
import { contactSchema } from "@/app/validationSchema";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const {
    register,
    control,
    handleSubmit,
    reset, // Added reset for clearing form fields
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section
      className="relative py-32 px-4 bg-secondaryBackground flex items-center justify-center"
      id="contact-us"
    >
      <main className="relative z-40 flex flex-wrap items-start justify-center gap-10 bg-white rounded-large py-20 px-10">
        <section className="p-8 py-10 max-sm:py-0 max-sm:px-0">
          <h1 className="font-lora font-bold text-4xl max-md:text-2xl text-center leading-[52px] text-foreground">
            Claim Your Free Guide & <br className="max-md:hidden" />{" "}
            Consultation
          </h1>

          <div className="font-inter mt-6">
            <p className="font-bold text-2xl text-foreground text-center">
              Join 1000+ Newcomers
            </p>
            <p className="mt-4 font-medium text-xl max-md:text-lg text text-foreground text-center ">
              who saved <span className="font-bold">$4,200</span> on average!
            </p>
          </div>
        </section>

        <section className="w-full">
          {error && (
            <div className="bg-red-100 text-red-700 border border-red-600 rounded-md p-4 mb-5">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 border border-green-500 rounded-md p-4 mb-5">
              Form submitted successfully!
            </div>
          )}
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(async (data) => {
              try {
                setIsSubmitting(true);
                setError("");
                await axios.post("/api/contacts", data);
                setSuccess(true);
                reset(); // Reset all form inputs immediately
                // Optionally clear the success message after a short delay
                setTimeout(() => setSuccess(false), 2000);
              } catch (error) {
                console.error(error);
                setError("An unexpected error occurred. Please try again.");
              } finally {
                setIsSubmitting(false);
              }
            })}
          >
            <div className="flex max-md:flex-col justify-center items-center gap-12 max-[890px]:gap-[24px]">
              <div className="relative flex flex-col items-center justify-center gap-2 max-md:w-full">
                <input
                  placeholder="First Name*"
                  {...register("firstName")}
                  className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
                />
                {errors.firstName && (
                  <p className="absolute left-3 -bottom-5 text-red-600 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="relative flex flex-col items-center justify-center gap-2 max-md:w-full">
                <input
                  placeholder="Last Name*"
                  className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="absolute left-3 -bottom-5 text-red-600 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex max-md:flex-col items-center justify-center gap-12 max-[890px]:gap-[24px]">
              <div className="relative max-md:w-full flex flex-col items-center justify-center gap-2">
                <input
                  placeholder="Email*"
                  className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="absolute left-3 -bottom-5 text-red-600 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative max-md:w-full flex flex-col items-center justify-center gap-2">
                <input
                  placeholder="Phone (optional)"
                  {...register("phone")}
                  className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
                />
                {errors.phone && (
                  <p className="absolute left-3 -bottom-6 text-red-600 text-sm">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex max-md:flex-col justify-center items-center gap-12 max-[890px]:gap-[24px]">
              <div className="flex flex-col items-center justify-center gap-2 max-md:w-full">
                <input
                  placeholder="Preferred language (optional)"
                  {...register("preferredLanguage")}
                  className="placeholder:font-inter rounded-md py-4 px-6 outline-none bg-input max-md:w-full text-lg placeholder:text-base"
                />
                {errors.preferredLanguage && (
                  <p className="text-red-600 text-sm">
                    {errors.preferredLanguage.message}
                  </p>
                )}
              </div>

              <div className="relative flex flex-col items-center justify-center gap-2 max-md:w-full">
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      {...register("state")}
                    >
                      <SelectTrigger className="rounded-md py-7 px-6 outline-none bg-input md:w-[278px] max-md:w-full text-lg">
                        <SelectValue placeholder="State*" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {USstates.map(({ id, label, value }) => (
                          <SelectItem
                            key={id}
                            value={value}
                            className="cursor-pointer text-lg"
                          >
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.state && (
                  <p className="absolute left-3 -bottom-6 text-red-600 text-sm">
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 font-semibold text-lg py-4 px-24 bg-mainBlue rounded-large text-background relative disabled:opacity-50"
                disabled={isSubmitting}
              >
                <p>Send</p>
                <Send />
                {isSubmitting && (
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin absolute right-4"></div>
                )}
              </button>
            </div>
          </form>
        </section>
      </main>

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute top-28 -right-0"
      />

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute top-1/2 -translate-y-1/2 -left-20"
      />

      <Image
        src={"/icons/spread-dots.svg"}
        width="202"
        height="227"
        alt="spread dots"
        className="absolute bottom-3 right-20"
      />
    </section>
  );
};

export default ContactUs;
