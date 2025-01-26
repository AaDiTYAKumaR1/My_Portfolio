'use client'; // Ensure this component runs on the client side
import { useToast } from "@/hooks/use-toast";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; 
import axios   from 'axios'

// Define validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});


type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const {toast} = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
  const onSubmit =async (data: FormData) => {
    console.log('Form submitted:', data);
    try {
        await  axios.post('http://localhost:3000/api/contactme', data);
      toast({
        title: "Email Sent successfully",
        description: "Happy Learning 😊",
      })
      form.reset({ name: "", email: "", message: "" });
    } catch (error) {
        console.error("error occured ",error);
        toast({
          title: "Email Not Sent",
          description: "Please try again later!",
        })
    }
  };

  return (

    <div className="min-w-[300px] lg:min-w-[840px]  mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
