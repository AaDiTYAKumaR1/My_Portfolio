import nodemailer from "nodemailer"

const sendmail= async(email,data,subject) => {
    const auth = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "aditysgoyal11@gmail.com",
        pass: "vpsu wtnc ayhx kscf",
      }  
    });
    const recevier={
        from:email,
        to:"aditysgoyal11@gmail.com",
        subject: subject,

        html: `  <p style="font-size: 16px;">Hi ${data.name},</p>
    <p style="font-size: 16px;">
      Thank you for reaching out to us. We have received your message, and our team will get back to you soon.
    </p>
    <p style="font-size: 16px;">
      Here is the message you sent:
    </p>
    <p style="font-size: 16px; color: #333; background: #f9f9f9; padding: 10px; border-radius: 5px;">
      "${data.content}"
    </p>
    <p style="font-size: 16px;">
      If you have any further queries, feel free to reply to this email.
    </p>
    <p style="font-size: 16px;">Best regards,</p>
    <p style="font-size: 16px;">Team iLearn</p> `,
      };
        
    
    auth.sendMail(recevier,( error,emailResponse) => {
        if(error)
        {
            throw error;
        }
        // console.log(emailResponse)
        
    })
    
}
export default sendmail