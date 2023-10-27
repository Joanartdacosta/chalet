// import { EmailTemplate } from "../../components/contacts/EmailTemplate";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function POST(request) {
//   try {
//     const body = await request.json();
//     console.log("sim, esta a funcionar");
//     console.log("body", body);
//     const { email, name, message } = body;
//     const data = await resend.emails.send({
//       from: "Acme <chalet@chaletdesigninteriores.com>",
//       to: ["jrtdacosta@gmail.com"],
//       subject: "CHALET - Mensagem",
//       react: EmailTemplate({ firstName: name, email, message }),
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json(error);
//   }

//   if (data.status === "success") {
//     return NextResponse.json({ message: "Email was sent" });
//   }
//   return NextResponse.json(data);
// } catch (error) {
//   console.log("error", error);
// }

// import { EmailTemplate } from "../../components/contacts/EmailTemplate";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req, res) => {
//   try {
//     const data = await resend.emails.send({
//       from: "Acme <chalet@chaletdesigninteriores.com>",
//       to: ["jrtdacosta@gmail.com"],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }),
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

import { Resend } from "resend";
import { EmailTemplate } from "../../components/contacts/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

resend.emails.send({
  from: "onboarding@chaletdesigninteriores.com",
  to: "jrtdacosta@gmail.com",
  subject: "Hello World",
  react: EmailTemplate({ firstName: "John" }),
});
