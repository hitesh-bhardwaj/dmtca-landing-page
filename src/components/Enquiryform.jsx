import { useForm } from "react-hook-form";
import { useState } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import { COUNTRIES } from "@/lib/countries";
import CountrySelector from "./ui/country-selector";
import BlackButton from "./Button/BlackButton";
import { useTranslation } from 'next-i18next';

// const formSchema = z.object({
//   name: z.string().min(1, { message: "Name is required." }),
//   email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email format." }),
//   company: z.string().min(1, "Company Name is required."),
//   country: z.string().min(1, "Country is required."),
//   terms: z.boolean().refine(value => value === true, "You must agree to the terms."),
//   pageURL: z.string(),
// });

// Update the ContactForm component
export default function EnquiryForm() {
  const { t } = useTranslation('form')
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("GB");
  // const [submitting, setSubmitting] = useState(false);
  // const [submissionError, setSubmissionError] = useState(null);
  // const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const form = useForm({
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
    <div className="w-[32%] bg-[white]/40 p-[1.5vw] pb-[3vw] rounded-[1vw] absolute right-[7%] bottom-[7%] glassmorphism fadeup mobile:static mobile:w-full mobile:px-[5vw] mobile:border mobile:border-gray-300 mobile:py-[10vw] mobile:rounded-[4vw] mobile:bg-black/10 tablet:w-[50%] tablet:px-[2vw] tablet:py-[3vw] tablet:bottom-[4%] rtl:left-[7%] rtl:right-auto">
      <div className="flex flex-col mb-[3vw] mobile:mb-[7vw]">
        <h2 data-para-anim className="text-[3.5vw] font-light text-center mobile:text-[9.5vw] tablet:text-[4.5vw]">
          {t('title')}
        </h2>
      </div>

      <Form {...form}>
        <form className="space-y-8 ">

          {/* Form fields */}
          {/* Name field */}
          <div className="w-full flex gap-[1.2vw] items-center mobile:flex mobile:items-center">
            <Select onValueChange={handleValueChange} >
              <SelectTrigger aria-label="Select Title" className="w-[7vw] placeholder:text-[2vw] mobile:text-[4vw] mobile:w-[25vw] tablet:w-[10vw]">
                <SelectValue placeholder={t('salutation')} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{t('salutation')}</SelectLabel>
                  <SelectItem value="Mr.">Mr.</SelectItem>
                  <SelectItem value="Miss">Miss</SelectItem>
                  <SelectItem value="Mrs.">Mrs.</SelectItem>
                  <SelectItem value="Ms.">Ms.</SelectItem>
                  <SelectItem value="Mx">Mx</SelectItem>
                  <SelectItem value="Dr.">Dr.</SelectItem>
                  <SelectItem value="Prof.">Prof.</SelectItem>
                  <SelectItem value="Sir">Sir</SelectItem>
                  <SelectItem value="Lord">Lord</SelectItem>
                  <SelectItem value="Lady">Lady</SelectItem>
                  <SelectItem value="H R H">H R H</SelectItem>
                  <SelectItem value="H E">H E</SelectItem>
                  <SelectItem value="H H">H H</SelectItem>
                  <SelectItem value="Sheikh">Sheikh</SelectItem>
                  <SelectItem value="Sheikha">Sheikha</SelectItem>
                  <SelectItem value="Dipl.">Dipl.</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="w-[21vw] mobile:w-[53vw] tablet:w-[35vw]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="required">
                    {/* <FormLabel>Full Name</FormLabel> */}
                    <FormControl>
                      <Input placeholder={t('name')} {...field} placeholderIcon={"/assets/icons/name-icon.svg"} />
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
            <div className="w-[21vw] mobile:w-[60vw] tablet:w-[35vw]">

              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className="required">
                    {/* <FormLabel>Company Name</FormLabel> */}
                    <FormControl>
                      <Input placeholder={t('mobile')} {...field} placeholderIcon={"/assets/icons/mobile-icon.svg"} />
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
                  <Input placeholder={t('email')} {...field} placeholderIcon={"/assets/icons/email-icon.svg"} className={"mobile:pl-[10vw] tablet:pl-[6vw]"} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Select onValueChange={handleValueChange}>
            <SelectTrigger aria-label="Select Service" className="w-full state placeholder:text-[2vw] pl-[3vw] mobile:text-[4vw] mobile:pl-[10vw] tablet:pl-[6vw] rtl:pr-[3vw] rtl:pl-[1vw]" placeholderIcon={"/assets/icons/state-icon.svg"}>
              <SelectValue placeholder={t('interested')}/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={t('interested')} >
                  {t('interested')}
                </SelectItem>
              </SelectGroup>

            </SelectContent>
          </Select>
          {/* Company field */}

          {/* Submit button */}
          <div className="w-full flex justify-center">
            <BlackButton
              link={"#"}
              btnText={t('btn')}
              type="submit"
              disbaled
            />
            {/* {submissionError && <p className="text-red-500">{submissionError}</p>}
            {submissionSuccess && <p className="text-green-500">Email sent successfully!</p>} */}
          </div>
        </form>
      </Form>
    </div>
  );
}