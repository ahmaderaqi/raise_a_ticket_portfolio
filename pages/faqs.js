import Layout from '@/components/layout/layout';
import React from 'react';

const FaqItem = ({ question, answer }) => {
    return (
        <div className="mb-4">
            <h3 className="text-lg font-semibold">{question}</h3>
            <p className="text-gray-600">{answer}</p>
        </div>
    );
};

const Faq = () => {
    const faqData = [
        {
            question: 'What is Raise A Ticket?',
            answer: 'Raise A Ticket is a software company that specializes in providing innovative solutions for managing customer support and issue tracking. Our platform helps businesses streamline their support processes and enhance customer satisfaction.'
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can reach our customer support team by navigating to the "Contact Us" section on our website. Alternatively, you can also send an email to support@raiseaticket.com.'
        },
        {
            question: 'Do you offer customizable solutions?',
            answer: 'Yes, we offer customizable solutions tailored to the unique needs of your business. Our team will work closely with you to understand your requirements and develop a solution that meets your specific goals.'
        },
        {
            question: 'Is Raise A Ticket suitable for small businesses?',
            answer: 'Absolutely! Raise A Ticket is designed to cater to businesses of all sizes. Our solutions can be scaled to fit the needs of small, medium, and large enterprises.'
        },
        {
            question: 'What industries can benefit from your services?',
            answer: 'Our services are versatile and can benefit a wide range of industries including IT, e-commerce, healthcare, finance, and more. If your business requires customer support and issue management, we can help.'
        },
        {
            question: 'Is there a free trial available?',
            answer: 'Yes, we offer a free trial period so you can experience the features and benefits of our platform before making a commitment.'
        },
        {
            question: 'How secure is my data on your platform?',
            answer: 'Data security is a top priority for us. We use industry-standard encryption and security measures to ensure your data is safe and protected.'
        },
    ];
    

    return (
        <Layout>
            <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h1>
                <div className="space-y-8">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </div>
        </Layout>
        
    );
};

export default Faq;
