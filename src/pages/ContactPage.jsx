import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img
                src="/src/images/DSC_1502.JPG"
                alt="Shamsul Huda Islamic Academy"
                className="absolute inset-0 w-full h-full object-cover"
              />

            </div>

            {/* Contact Information Section */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shamsul Huda Islamic Academy</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                  <p className="text-gray-600">
                    Kuttikkattoor, Kozhikode
                    <br />
                    Kuttikkattoor PO
                    <br />
                    Kozhikode Distl.
                    <br />
                    Pin: 673008
                    <br />
                    Kerala, India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <p className="text-gray-600">+91 0495 2351534</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <p className="text-gray-600">shamsulhudaacademy@yahoo.com</p>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-64"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%&height=256&hl=en&q=Kuttikatoor, Shamsul Huda Islamic Academy&t=h&z=14&ie=UTF8&iwloc=B&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

