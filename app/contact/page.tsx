import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | ARCH STUDIO",
  description: "Get in touch with our architectural team to discuss your project needs or inquire about our services.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <SectionHeading
        title="Contact Us"
        subtitle="Have a project in mind? We'd love to hear from you. Fill out the form below or reach out directly."
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Location</p>
                  <p className="text-muted-foreground">
                    123 Architecture Lane
                    <br />
                    Design District, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@archstudio.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: By appointment
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-square relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.702714058323!2d-118.3765173!3d34.0745909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b93cca9c7ab1%3A0xe2ce39be5da2615e!2sDesign%20District%2C%20West%20Hollywood%2C%20CA%2090069!5e0!3m2!1sen!2sus!4v1648299961869!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ARCH STUDIO Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}