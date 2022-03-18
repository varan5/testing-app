import React, { useEffect, useState } from 'react'
import { simpleGetCall } from '../../api/ApiServices'
import ApiConfig from '../../api/ApiConfig'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

export default function EnrolledCourses () {
  const [courseList, setCourseList] = useState([])
  const [displayLoader, setDisplayLoader] = useState(false)

  const getCourseList = async () => {
    setDisplayLoader(true)
    const getCourseListUrl = ApiConfig.GET_ALL_COURSE_LIST_INTRODUCTION
    console.log('Coures url: ', getCourseListUrl)
    try {
      const courses = await simpleGetCall(getCourseListUrl)
      console.log('Courses List: ', courses.data.courses)
      setCourseList(courses.data.courses)
      setDisplayLoader(false)
    } catch (error) {
      console.log('Error occured while getting list of courses: ', error)
      setDisplayLoader(false)
    }
  }

  const displayCourseContents = () => {
    return (
      <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
              Our Services
            </h2>
            <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Let's master skills to have a great future ahead !
            </p>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {courseList.map((course) => (
              <div
                key={course._id}
                className='flex flex-col rounded-lg shadow-lg overflow-hidden'
              >
                <Link to={`course-details/${course._id}`}>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-48 w-full object-cover'
                      src={course.introduction.imageUrl}
                      alt={course.title}
                    />
                  </div>
                </Link>
                <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    {/* <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p> */}

                    <Link to={`course-details/${course._id}`}>
                      <a href={course._id} className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                          {course.title}
                        </p>
                        <p className='text-l font-semibold text-gray-900'>
                          Course Rating: {course.information.ratingStars}
                        </p>
                        <p className='text-l font-semibold text-gray-900'>
                          Enrolled Students: {course.information.ratingCount}
                        </p>
                        <p className='text-l font-semibold text-gray-900'>
                          Original Price: {course.information.originalPrice}
                        </p>
                        <p className='text-l font-semibold text-gray-900'>
                          Discount Price: {course.information.discountedPrice}
                        </p>
                        {/* <Features /> */}
                        {/* <p className="mt-3 text-base text-gray-500">{post.description}</p> */}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    getCourseList()
  }, [])

  return displayLoader ? <Loader /> : displayCourseContents()
}
