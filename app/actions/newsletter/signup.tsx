'use server';

import { z } from "zod"

const schema = z.object({
  email: z.string().email()
})

export async function signup(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email")
  })

  // Fake slow response
  await new Promise(res => setTimeout(res, 200))


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  return {
    success: true
  }
}
