import React from 'react'

const WeeklyAcademyBlogContext = React.createContext({ prefix: '' })

export const WeeklyAcademyBlogProvider = WeeklyAcademyBlogContext.Provider
export const WeeklyAcademyBlogConsumer = WeeklyAcademyBlogContext.Consumer

export default WeeklyAcademyBlogContext
