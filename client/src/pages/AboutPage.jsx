import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import gowtham from '../assets/images/gow.jpg';
import naveen from '../assets/images/navee.jpg';

const teamMembers = [
  {
    name: 'Gowtham ',
    rollNo: '22BEMEC029',
    department: 'Mechanical Engineering',
    email: 'gowthamkumar075@gmail.com',
    github: 'https://github.com/gowtham075',
    contact: '+91 9444553360',
    image: gowtham,
    bio: 'Gowtham is a visionary designer with a passion for creating intuitive user experiences.',
  },
  {
    name: 'Naveen Kumar',
    rollNo: '22BEECE033',
    department: 'Electronics & Communication Engineering',
    email: 'naveenkumarp3052004@gmail.com',
    github: 'https://github.com/naveen-kumar-30',
    contact: '+91 7418780270',
    image: naveen,
    bio: 'Naveen Kumar specializes in building scalable web applications with a focus on performance.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-12 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold text-black text-center font-extrabold mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer"
            >
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                <img
                  className="w-full h-[400px] object-cover"
                  src={member.image}
                  alt={`${member.name}'s profile`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-indigo-600">{member.department}</p>
                  <p className="mt-2 text-gray-600">Roll No: {member.rollNo}</p>
                  <p className="mt-2 text-gray-600">Email: {member.email}</p>
                  <p className="mt-2 text-gray-600">Contact: {member.contact}</p>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
                  >
                    GitHub Profile
                  </a>
                  <p className="mt-4 text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
