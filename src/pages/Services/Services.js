import React from 'react'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import QuizIcon from '@mui/icons-material/Quiz';
import CodeIcon from '@mui/icons-material/Code';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MapIcon from '@mui/icons-material/Map';

const Services = () => {

  const features = [
    {
      name: 'Beginner Driver Education Program',
      description: 'This program has 3 components. 1. Classroom 2. Drive Online home assignment and 3. In-Car training. Upon successful completion it may save you on auto insurance.',
      icon: MapIcon,
    },
    {
      name: 'Complete Refresher Program',
      description: 'This program helps new drivers to learn driving without attending the in-class. This is a customized program based on students who do not wish to be certified.',
      icon: CardMembershipIcon,
    },
    {
      name: 'Refresher Program',
      description: 'It’s right choice of program for those who like to brush up and improve their driving habits. Join this program, if you have some experience.',
      icon: GroupAddIcon,
    },
    {
      name: 'Driver Improvement Program',
      description: 'This course is recommended by the court in case your license is suspended or you have lost too many points.',
      icon: CodeIcon,
    },
    {
      name: 'Winter Time Driving Program',
      description:
        'This program is perfect to overcome Winter Time Driving Jitters for G2 & G class drivers who haven’t taken driver training ever or who could avoid some unexpected situations with professional training.',
      icon: AssignmentIcon,
    },
    {
      name: 'G Preparation Packages',
      description: 'In this package, you can combine either a single lesson or a few lessons and use the instructors car for road test at a local test center. Get exclusive lessons to refresh your skills.',
      icon: QuizIcon,
    },
    
  ]

  return (
    <div>

      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          {/* <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
           Our Services
          </p>
          {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                malesuada. Eleifend condimentum id viverra nulla.
              </p> */}
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6 ">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 features-card-container">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                          {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                          <feature.icon className="h-6 w-6 " aria-hidden="true" style={{ color: 'teal' }} />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services