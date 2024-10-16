import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import Link from "next/link";
import { useState } from 'react';
// import axios from 'axios';
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import CountrySelector from "../ui/country-selector";
import { COUNTRIES } from "@/lib/countries";
import CountrySelector from "./ui/country-selector";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email format." }),
  company: z.string().min(1, "Company Name is required."),
  country: z.string().min(1, "Country is required."),
  terms: z.boolean().refine(value => value === true, "You must agree to the terms."),
  pageURL: z.string(),
});

// Update the ContactForm component
export default function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("GB");
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      country: "GB",
      terms: false,
      pageURL: typeof window !== 'undefined' ? window.location.href : '', // Use window only in client-side context
    },
  });

  const handleValueChange = (value) => {
    setSelectedRole(value);
  };
  return (
    <div className="w-[32%] bg-[white]/40 p-[1.5vw] pb-[3vw] rounded-[1vw] absolute right-[7%] bottom-[7%] glassmorphism fadeup">
      <div className="flex flex-col mb-[3vw]">
        <h2 data-para-anim className="text-[3.5vw] font-light text-center">
          Enquire Now
        </h2>
        <div className="w-full bg-black h-[1px] lineDraw">

        </div>
      </div>

      <Form {...form}>
        <form className="space-y-8 ">

          {/* Form fields */}
          {/* Name field */}
          <div className="w-full flex gap-[1.2vw] items-center">
            <Select onValueChange={handleValueChange}>
              <SelectTrigger className="w-[7vw] placeholder:text-[2vw]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Roles</SelectLabel> */}
                  <SelectItem>
                    Mr.
                  </SelectItem>
                  {/* <SelectItem>
                        Mrs.
                      </SelectItem> */}
                </SelectGroup>

              </SelectContent>
            </Select>

            <div className="w-[21vw]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="required">
                    {/* <FormLabel>Full Name</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Name" {...field} placeholderIcon={"/assets/icons/name-icon.png"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
          </div>
          <div className="w-full flex gap-[1.2vw] items-center">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="required">
                  {/* <FormLabel>Country</FormLabel> */}
                  <FormControl>
                    <CountrySelector
                      id={"country-selector"}
                      open={isOpen}
                      onToggle={() => setIsOpen(!isOpen)}
                      onChange={(value) => {
                        setCountry(value);
                        field.onChange(value);
                      }}
                      selectedValue={COUNTRIES.find((option) => option.value === country)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-[21vw]">

              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className="required">
                    {/* <FormLabel>Company Name</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Mobile Number" {...field} placeholderIcon={"/assets/icons/mobile-icon.png"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          </div>

          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="required">
                {/* <FormLabel>Business Email</FormLabel> */}
                <FormControl>
                  <Input placeholder="Email" {...field} placeholderIcon={"/assets/icons/email-icon.png"} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-full state placeholder:text-[2vw] pl-[4vw]" placeholderIcon={"/assets/icons/state-icon.png"}>
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Roles</SelectLabel> */}
                <SelectItem>
                  Interested in
                </SelectItem>
                {/* <SelectItem>
                        Mrs.
                      </SelectItem> */}
              </SelectGroup>

            </SelectContent>
          </Select>
          {/* Company field */}

          {/* Submit button */}
          <div className="w-full flex justify-center fadeup">
            <Button type="submit" disabled={submitting} className="black-btn">
              <span data-primary className="flex justify-start w-full">
                Submit
              </span>
              <div aria-hidden="true" className="btn-circle">
                <div className="btn-circle-text">
                  Submit
                  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="btn-icon">
                    <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                    <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className="btn-path fill-current" />
                  </svg>
                </div>
              </div>
            </Button>
            {submissionError && <p className="text-red-500">{submissionError}</p>}
            {submissionSuccess && <p className="text-green-500">Email sent successfully!</p>}
          </div>
        </form>
      </Form>
    </div>
  );
}