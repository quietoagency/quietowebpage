import type { APIRoute } from "astro"
import * as z from "zod"
import { StepOneSchema, StepTwoSchema } from "../../lib/formSchema"
import { sendContactMail } from "../../lib/mailing"

export const prerender = false

const LeadSchema = z.object({ ...StepOneSchema.shape, ...StepTwoSchema.shape })

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null)
  const result = LeadSchema.safeParse(body)

  if (!result.success) {
    return new Response(JSON.stringify({ error: "Datos inválidos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    await sendContactMail(result.data)
  } catch (error) {
    return new Response(JSON.stringify({ error: "No se pudo enviar el mail" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
