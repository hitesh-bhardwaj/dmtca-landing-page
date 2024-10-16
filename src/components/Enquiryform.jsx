// import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import CountrySelector from "../ui/country-selector";
// import { COUNTRIES } from "@/lib/countries";

const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required."}),
    email: z.string().min(1, {message: "Email is required."}).email({message: "Invalid email format."}),
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

    // const onSubmit = async (data) => {
    //     setSubmitting(true);
    //     const countryName = COUNTRIES.find(c => c.value === country)?.title || 'Not specified';

    //     const formData = {
    //         name: data.name,
    //         email: data.email,
    //         company: data.company,
    //         countryName, 
    //         pageURL: data.pageURL,
    //     };
        
    //     const message = `
    //             <h1>New Contact Form Submission</h1>
    //             <p><strong>Name:</strong> ${data.name}</p>
    //             <p><strong>Email:</strong> ${data.email}</p>
    //             <p><strong>Company Name:</strong> ${data.company}</p>
    //             <p><strong>Country:</strong> ${countryName}</p>
    //             <p><strong>Terms Agreement:</strong> ${data.terms ? 'Agreed' : 'Not Agreed'}</p>
    //         `;
    //     try {
    //         // Send email
    //         await axios.post('/api/send-email', {
    //             message: message,
    //             subject: "Contact Form Submission",
    //         });     

    //         // Send data to Mailchimp
    //         await axios.post('/api/mail-chimp', formData);
            
    //         form.reset();
    //         setSubmitting(false);
    //         setSubmissionSuccess(true);
    //     } catch (error) {
    //         // console.error('Error sending email:', error);
    //         setSubmitting(false);
    //         setSubmissionError('Error sending email. Please try again later.');
    //     }
    // };

  return (
    <div className="w-[30%] bg-[white]/40 p-[1.5vw] pb-[5vw] rounded-[1.5vw] absolute right-[10%] bottom-[10%] glassmorphism">
        <div className="flex flex-col mb-[3vw]">
            <h2 className="text-[3.5vw] font-light text-center">
            Enquire Now
        </h2>
        <div className="w-full bg-black h-[1px]">

        </div>
            </div>

    <Form {...form}>
      <form  className="space-y-8 ">
        
        {/* Form fields */}
        {/* Name field */}
        <div className="w-[18vw]">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="required">
              {/* <FormLabel>Full Name</FormLabel> */}
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            
        </div>

        <div className="w-[18vw]">

        <FormField 
            control={form.control}
            name="number"
            render= {({ field }) => (
                <FormItem className="required">
                    {/* <FormLabel>Company Name</FormLabel> */}
                    <FormControl>
                        <Input placeholder="Number" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        </div>
        {/* Email field */}
        <FormField 
            control={form.control}
            name="email"
            render= {({ field }) => (
                <FormItem className="required">
                    {/* <FormLabel>Business Email</FormLabel> */}
                    <FormControl>
                        <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Company field */}

        {/* Country Selector Field */}
        {/* <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
                <FormItem className="required">
                    <FormLabel>Country</FormLabel>
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
        /> */}

        {/* Terms checkbox field */}
        {/* <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="terms">
                <div className="flex items-center gap-2">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <FormLabel>
                        <span>I agree to the</span>
                        <Link href="/privacy-policy" target="_blank" className="text-primary relative after:absolute after:bg-primary after:h-[1px] after:left-0 after:bottom-[-2px] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full"> Privacy Policy</Link>
                    </FormLabel>
                </div>
                <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* Submit button */}
        <div className="w-full flex justify-center">

        <Button type="submit" disabled={submitting} className=" black-btn">
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