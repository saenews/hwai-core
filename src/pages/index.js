import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Blazing fast websites in three minutes! No Coding! No recurring cost!
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Build blazing fast secure websites within three minutes. No coding required! Upload images, add content and let AI do the rest for you.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Sign Up</Button>
          </p>
          <p className="mt-4 text-gray-600"> Already have a website? Migrate to hyperweb in just </p><a href="#">one click</a>.
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Key Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Blazing Fast</p>
              <p className="mt-4">
                 Build blazing fast websites built with the technologies used by Facebook, Twitter and Instagram. Hyperweb AI uses Reactjs and Gatsbyjs to build blazing fast websites. Typically our websites are <a href="https://www.gatsbyjs.org/blog/2017-09-13-why-is-gatsby-so-fast/" > eight times faster</a> than a wordpress website. Did you know pagespeed is <a href="https://neilpatel.com/blog/speed-is-a-killer/">extremely important</a> to rank top on google?
                
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Secure</p>
              <p className="mt-4">
                Do let hackers to exploit your platform. Hyperweb AI uses the serveless applications to ensure your data is safe and does not depend on random third party plugins and softwares. Hacking your website is as hard as hacking Amazon.com . 
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">No Recurring cost</p>
              <p className="mt-4">
                Pay for it only when you build. No recurring cost. Seriously!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Speed</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          How important is your website loading speed for your search engine ranking? 
          
          The answer is <b>extremely important</b>. Google and other search engines penalize sites that load slowly-but more importantly, your users do so. They stop visiting, bounce out of your website. You’ll lose out on sales and traffic if your site is slow. 34% of wesites are built with wordpress. A typical wordpress site is around 8 times slower to load than our website which is built with Reactjs. Migrating to a React based website can give you an unpresedented advantage against your competitor. 
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Security
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            2019 witnessed a whopping 1.9 Billion data breaches. Its extremely important to keep your data and your customer’s data is secure. Hyperweb reduces the vulneribility by minimized server based applications. All the websites are federated on the CDNs. The hacker has nothing to tamper with.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            No recurrent cost
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            A typical wordpress website static website costs you 30 USD per month. Which is ridiculous when you do not have any dynamic applications. Hyperweb hosts your 
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Extremely Secure.</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Build your website in just 3 minutes. Or your money back
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
