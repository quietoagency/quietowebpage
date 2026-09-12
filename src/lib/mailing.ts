import { Resend } from "resend";
import { referalOptions } from "./constants";

const resend = new Resend(import.meta.env.RESEND_API_KEY)
console.log(resend)

interface LeadData {
  name: string;
  email: string;
  companyName: string;
  phone: string;
  projectDetails: string;
  referal: string;
}

function getReferalLabel(referal: string) {
  return referalOptions.find((option) => option.value === referal)?.label ?? referal;
}

function buildLeadEmailHtml(leadData: LeadData) {
  const rows: [string, string][] = [
    ["Nombre", leadData.name],
    ["Email", leadData.email],
    ["Empresa", leadData.companyName],
    ["Teléfono", leadData.phone],
    ["Cómo nos encontró", getReferalLabel(leadData.referal)],
    ["Detalle del proyecto", leadData.projectDetails],
  ]

  return `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
      <h2 style="color: #1a1a1a; margin-bottom: 16px;">Nuevo lead desde el sitio</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 14px; vertical-align: top;">${label}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5; color: #1a1a1a; font-size: 14px;">${value}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `
}

export async function sendContactMail(leadData: LeadData) {
  const { error } = await resend.emails.send({
    from: 'hola@quietoagency.com',
    to: 'alejoevilches@gmail.com',
    subject: 'Quieto - Nuevo lead',
    html: buildLeadEmailHtml(leadData),
  })

  if (error) throw error
}
