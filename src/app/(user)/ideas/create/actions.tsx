'use server'

import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()

export async function saveIdea(formData: FormData) {

  // const ideaSchema = z.object({
  //   idea: z.string({
  //     required_error: "Idea is required",
  //     invalid_type_error: 'Invalid string',
  //   }),
  //   about : z.string({
  //     required_error: "Description / About is required",
  //     invalid_type_error: 'Invalid ',
  //   }),
  // });


  // ideaSchema.parse
  const validatedFields = {
    idea: formData.get('idea'),
    about: formData.get('about'),      
  }

  console.log(validatedFields)

  // if (!validatedFields.success) {
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //   }
  // }

  // find user
  const user = await prisma.user.findUnique({
    where : {
      id : 1
    }
  })

  console.log(user)

  //Save Idea
  const idea = await prisma.idea.create({
    data: {
      name: validatedFields.idea,
      description: validatedFields.about,
      userId : user.id
    },
  })

  console.log(idea)

  // Redirect back
  return {
    status : true
  }
}
