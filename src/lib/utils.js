import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const useFullUrl = () => {
  const [fullUrl, setFullUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFullUrl(window.location.origin + router.asPath);
    }
  }, [router.asPath]);

  return fullUrl;
};