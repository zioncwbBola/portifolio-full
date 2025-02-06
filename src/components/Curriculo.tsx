import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Icon } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profile Section */}
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg h-full">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 mx-auto">
              <Image 
                src="/logo01.png" 
                alt="ZionCWB" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <CardContent>
              <h1 className="mt-4 text-3xl font-bold">ANDRE <span className="text-yellow-500">LOPES</span></h1>
              <p className="mt-2 text-gray-400 dark:text-gray-300 text-sm">
                Hi! I’m Andre Lopes, a Bla blac.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Work Experience Section */}
        <div className="md:col-span-1">
          <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg h-full">
            <CardContent>
              <h2 className="text-xl font-bold text-yellow-500 mb-4">WORK EXPERIENCE</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-yellow-500 font-bold">2013</p>
                  <p className="font-semibold">GRUPPO ZENIT</p>
                  <p className="italic">Graphic Designer</p>
                  <p className="text-gray-400 text-sm">
                    Design of website and app mock-up starting from wireframe; Promotional video in Motion graphic
                  </p>
                </div>
                <div>
                  <p className="font-semibold">SOLE 24ORE</p>
                  <p className="italic">Graphic Designer</p>
                  <p className="text-gray-400 text-sm">
                    Support to creation of smartphone and tablet app interfaces
                  </p>
                </div>
                <div>
                  <p className="text-yellow-500 font-bold">2011</p>
                  <p className="font-semibold">GIOGATTO</p>
                  <p className="italic">Designer</p>
                  <p className="text-gray-400 text-sm">
                    Development of academic projects; Production of graphics and logos for products
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-1">
          <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg h-full">
            <CardContent>
              <h2 className="text-xl font-bold text-yellow-500 mb-4">CONTACT</h2>
              <div className="space-y-4 text-sm">
                <p>Fazendinha - Curitiba/PARANÁ</p>
                <p>andre.lgnd17165@gmail.com</p>
                <p>+55 (41) 9 9688 - 4267</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      
    </div>
  );
};

export default Resume;
