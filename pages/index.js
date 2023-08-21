import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/Home'
import Layout from '@/components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home1() {
  return (
    <Layout>
      <div className='bg-white'>

        <Home />
        <div className='bg-white'>
          <section className="container mx-auto mt-8 p-4">
            <h1 className="text-3xl md:text-4xl text-center font-bold mb-8">
            The Revolution of Web Development
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    
                    Increasing Use of Websites and Web Apps
                  </h2>
                </div>
                <img
                  src="https://www.cronj.com/blog/wp-content/uploads/Increase-your-conversion-during-this-pandemic-with-ecommerce-website-design-1-scaled-e1603199220296.jpg" // Replace with your chart image URL
                  alt="Ecommerce Growth Chart"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  In today's digital age, websites and web apps have become an integral part of our daily lives. They provide information, services, and entertainment, making them essential tools for businesses and individuals alike.
                </p>
              </div>
              
              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                    
                    Profits from Well-designed Websites
                  </h2>
                </div>
                <img
                  src="https://revenuesandprofits.com/wp-content/uploads/2021/08/web-design.jpg" // Replace with your country usage image URL
                  alt="Ecommerce Usage by Country"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  A well-designed website can significantly boost a business's profits. It attracts customers, builds trust, and provides a platform for e-commerce. Investing in a user-friendly website can lead to increased sales and customer loyalty.
                </p>
              </div>
             
              <div className="bg-gray-50 border-2 rounded-lg shadow-md p-4">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Scaling Up Your Business with a Website
                  </h2>
                </div>
                <img
                  src="https://www.scnsoft.com/blog-pictures/ecommerce/types-of-ecommerce-general-overview-01-title.png" // Replace with your ecommerce overview image URL
                  alt="Ecommerce Overview"
                  className="w-full rounded-lg"
                />
                <p className="text-gray-700 text-lg mt-4">
                  Having a website opens doors to scaling up your business. It allows you to reach a wider audience, provide better customer support, and showcase your products or services. Utilize online marketing strategies to maximize your website's impact.
                </p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </Layout>


  )
}
