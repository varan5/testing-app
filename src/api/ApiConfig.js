
const BASE_URL = 'http://localhost:5000/api'

const ApiConfig = {
  GET_ALL_COURSE_LIST_INTRODUCTION: BASE_URL + '/courses/all/home',
  GET_COURSE_DETAILS_INFORMATION: BASE_URL + '/courses/details',
  GET_ENROLLED_COURSE_CONTENTS: BASE_URL + '/courses/contents',
  POST_USER_CONTACT_MESSAGE: BASE_URL + '/contact/message'
}

export default ApiConfig

