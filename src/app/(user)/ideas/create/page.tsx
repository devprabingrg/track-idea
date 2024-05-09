"use client"

import Image from "next/image";
import Link from 'next/link'
import Button from '@/components/Button'
import { useRef } from 'react'

import { useToast } from "@/components/ui/use-toast"
import { saveIdea } from './actions'

export default function CreateIdeas() {

  const formRef        = useRef<HTMLFormElement>(null)
  const { toast }      = useToast()

  const handleSubmit   = async(formData) => {

    const saved = await saveIdea(formData)

    console.log("aftr", saved)
    
    if(saved.status) {
      toast({
        title: "Success",
        description: "Ideas is saved successfully.",
        className: "bg-green-900 text-white",
      })

      formRef?.current?.reset();

    }


  }
  
  return (
    <section className="p-4 shadow">
      <div className="flex items-center mb-6">
        <Link href="/"
          className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg ">New Idea</h2>
      </div>
      <form 
        ref={formRef}
        action={handleSubmit}>
        <div className="md:flex mb-8">
          <div className="md:w-1/3">
            <legend className="uppercase tracking-wide text-sm">Idea</legend>
            <p className="text-xs font-light text-red">This field  is required.</p>
          </div>
          <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-xs font-bold">Idea</label>
              <input 
                required
                className="w-full text-gray-900 shadow-inner p-4 border-0" type="text" name="idea" placeholder="Acme Mfg. Co."/>
            </div>
          </div>

        </div>

        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <legend className="uppercase tracking-wide text-sm">About</legend>
          </div>
          <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <textarea 
              required
             name="about" className="w-full text-gray-900 shadow-inner p-4 border-0" placeholder="This ideas is about....." rows="6"></textarea>
          </div>
        </div>

        <div className="md:flex mb-6 ">
          <div className="md:flex-1 px-3 text-center md:text-right">
            <Button  
              title="Save"
              classes="button bg-blue-800 py-4 px-8 rounded text-white bg-brick hover:bg-brick-dark"></Button>
          </div>
        </div>
        
      </form>
    </section>

  );
}
