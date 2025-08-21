import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card.jsx';
import { Button } from './components/ui/button.jsx';
import { motion } from 'framer-motion';

import JaxImg from './assets/JAX.png';
import AsiaImg from './assets/ASIA.png';
import CaponeImg from './assets/CAPONE.jpg';
import MsEuropeImg from './assets/MS.EUROPE.png';
import UpcomingBreedingImg from './assets/UPCOMING BREEDING ASIA X EXODUS.jpg';

export default function App() {
  const [page, setPage] = useState('dashboard');
  const [inquiryDog, setInquiryDog] = useState(null);

  const dogs = [
    { name: 'Jax', image: JaxImg, weight: '115 lbs', height: '21 in', color: 'Lilac Tri / Champagne Tri', birthday: 'May 14, 2022' },
    { name: 'Asia', image: AsiaImg, weight: '105 lbs', height: '20.5 in', color: 'Lilac Tri / Champagne Tri', birthday: 'June 22, 2023' },
    { name: 'Capone', image: CaponeImg, weight: '80 lbs', height: 'Still growing', color: 'Lilac Tri / Champagne Tri', birthday: 'February 10, 2025' },
    { name: 'Ms. Europe', image: MsEuropeImg, weight: '75 lbs', height: 'Still growing', color: 'Lilac Tri / Champagne Tri', birthday: 'February 10, 2025' },
  ];

  const puppies = [
    { name: 'Puppy 1', parents: 'Asia × Exodus', status: 'Available Soon' },
    { name: 'Puppy 2', parents: 'Asia × Exodus', status: 'Available Soon' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 shadow bg-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">League of Bullies</h1>
        <nav className="space-x-2 flex items-center">
          <Button className="bg-transparent text-gray-700 shadow-none hover:shadow-none" onClick={() => setPage('dashboard')}>Dashboard</Button>
          <Button className="bg-transparent text-gray-700 shadow-none hover:shadow-none" onClick={() => setPage('browse')}>Browse</Button>
          <Button className="bg-transparent text-gray-700 shadow-none hover:shadow-none" onClick={() => setPage('puppies')}>Puppies</Button>
          <Button className="bg-transparent text-gray-700 shadow-none hover:shadow-none" onClick={() => setPage('addstud')}>Add Stud</Button>
          <Button className="bg-transparent text-gray-700 shadow-none hover:shadow-none" onClick={() => setPage('addpuppy')}>Add Puppy</Button>
          <Button asChild><a href="mailto:Leagueofbullies@gmail.com">Email</a></Button>
          <Button asChild><a href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
        </nav>
      </header>

      <main className="p-6">
        {page === 'dashboard' && (
          <div className="space-y-8">
            <section className="text-center">
              <h2 className="text-3xl font-bold">Welcome to League of Bullies</h2>
              <p className="text-gray-600">Premium Bully Breeding – leagueofbullies.us</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Featured Studs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dogs.map((dog) => (
                  <Card key={dog.name} className="rounded-2xl">
                    <img src={dog.image} alt={dog.name} className="rounded-t-2xl w-full h-64 object-cover" />
                    <CardContent>
                      <h4 className="font-bold">{dog.name}</h4>
                      <p>{dog.color}</p>
                      <p>{dog.weight}</p>
                      <p>{dog.height}</p>
                      <p>{dog.birthday}</p>
                      <div className="flex gap-2 mt-2">
                        <Button asChild><a href="mailto:Leagueofbullies@gmail.com">Email</a></Button>
                        <Button asChild><a href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Upcoming Breedings</h3>
              <Card className="overflow-hidden rounded-2xl">
                <a href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener noreferrer">
                  <img src={UpcomingBreedingImg} alt="Upcoming Breeding Asia × Exodus" className="w-full h-auto" />
                </a>
                <CardContent className="space-y-2">
                  <h4 className="font-bold">Asia × Exodus</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Asia</p>
                      <p>105 lbs • 20.5 in</p>
                      <p>Lilac Tri / Champagne Tri</p>
                      <p>Birthday: June 22, 2023</p>
                    </div>
                    <div>
                      <p className="font-semibold">Exodus</p>
                      <p>135+ lbs • 2 years old</p>
                      <p>Chocolate Tri</p>
                      <p>Owner: Level Up Bullies</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button asChild><a href="mailto:Leagueofbullies@gmail.com">Inquire via Email</a></Button>
                    <Button asChild><a href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {page === 'browse' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Browse Studs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dogs.map((dog) => (
                <Card key={dog.name} className="rounded-2xl">
                  <img src={dog.image} alt={dog.name} className="rounded-t-2xl w-full h-64 object-cover" />
                  <CardContent>
                    <h4 className="font-bold">{dog.name}</h4>
                    <p>{dog.color}</p>
                    <p>{dog.weight}</p>
                    <p>{dog.height}</p>
                    <p>{dog.birthday}</p>
                    <div className="flex gap-2 mt-2">
                      <Button asChild><a href="mailto:Leagueofbullies@gmail.com">Email</a></Button>
                      <Button asChild><a href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {page === 'puppies' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Puppies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {puppies.map((puppy, idx) => (
                <Card key={idx} className="rounded-2xl">
                  <CardContent>
                    <h4 className="font-bold">{puppy.name}</h4>
                    <p>Parents: {puppy.parents}</p>
                    <p>{puppy.status}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {page === 'addstud' && (
          <div className="space-y-4 max-w-md mx-auto">
            <h3 className="text-xl font-bold">Add a Stud</h3>
            <input className="w-full border p-2 rounded-2xl" placeholder="Name" />
            <input className="w-full border p-2 rounded-2xl" placeholder="Weight" />
            <input className="w-full border p-2 rounded-2xl" placeholder="Height" />
            <input className="w-full border p-2 rounded-2xl" placeholder="Color" />
            <input className="w-full border p-2 rounded-2xl" placeholder="Birthday" />
            <Button>Add Stud</Button>
          </div>
        )}

        {page === 'addpuppy' && (
          <div className="space-y-4 max-w-md mx-auto">
            <h3 className="text-xl font-bold">Add a Puppy</h3>
            <input className="w-full border p-2 rounded-2xl" placeholder="Name" />
            <input className="w-full border p-2 rounded-2xl" placeholder="Parents" />
            <input className="w-full border p-2 rounded-2xl" placeholder="Status" />
            <Button>Add Puppy</Button>
          </div>
        )}
      </main>

      <footer className="p-4 text-center text-gray-600">
        © {new Date().getFullYear()} League of Bullies – leagueofbullies.us
      </footer>

      {inquiryDog && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Card className="bg-white p-6 rounded-2xl w-96">
            <h3 className="text-xl font-bold mb-2">Inquire about {inquiryDog.name}</h3>
            <p className="mb-4">Choose a contact method:</p>
            <div className="flex gap-2 mb-4">
              <Button asChild><a href="mailto:Leagueofbullies@gmail.com">Email</a></Button>
              <Button asChild><a href="https://instagram.com/leagueofbullies" target="_blank" rel="noopener noreferrer">Instagram</a></Button>
            </div>
            <Button onClick={() => setInquiryDog(null)}>Close</Button>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
