"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import {minLength, z} from "zod";
import { _minLength } from "zod/v4/core";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Companion is required."),
  subject: z.string().min(1, "Subject is required."),
  topic: z.string().min(1, "Topic is required."),
  voice: z.string().min(1, "Voice is required."),
  style: z.string().min(1, "Style is required."),
  duration: z.number().min(1, "Duration is required."),
})


export function CompanionForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
  <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Companion Name</FormLabel>
        <FormControl>
          <Input placeholder="Enter the companion name" {...field} />
        </FormControl>
        <FormMessage />
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="subject"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Subject</FormLabel>
        <FormControl>
          <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
            <SelectTrigger className="input capitalize">
            <SelectValue placeholder="Select the Subject" />
          </SelectTrigger>
        <SelectContent>
          {
            subjects.map((subject) => (
              <SelectItem 
              value="subject"
              key={subject}
              className="capitalize"
              >{subject}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="topic"
    render={({ field }) => (
      <FormItem>
        <FormLabel>What should the companion help with?</FormLabel>
        <FormControl>
          <Textarea placeholder="Ex. Derivatives and Integrals" {...field} />
        </FormControl>
        <FormMessage />
        <FormMessage />
      </FormItem>
    )}
  />


    <FormField
    control={form.control}
    name="voice"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Voice</FormLabel>
        <FormControl>
          <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
            <SelectTrigger className="input">
            <SelectValue placeholder="Select the voice" />
          </SelectTrigger>
        <SelectContent>
              <SelectItem value="male">
                Male
              </SelectItem>

              <SelectItem value="female">
                Female
              </SelectItem>

        </SelectContent>
      </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />


    <FormField
    control={form.control}
    name="style"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Style</FormLabel>
        <FormControl>
          <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
            <SelectTrigger className="input">
            <SelectValue placeholder="Select the style" />
          </SelectTrigger>
        <SelectContent>
              <SelectItem value="formal">
                Formal
              </SelectItem>

              <SelectItem value="casual">
                Casual
              </SelectItem>

        </SelectContent>
      </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    

    <FormField
    control={form.control}
    name="duration"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Estimated Session Duration in Minutes</FormLabel>
        <FormControl>
         <Input 
            type="number"
            placeholder="15"
            {...field}
            className="input" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />

  <Button className="w-full cursor-pointer">Build your Companion</Button>


  </form>
  </Form>
  )}