// import React from 'react'
/* eslint-disable react/prop-types */
import { useEffect } from "react"
const Alert = ({text, type, removeAlert, list}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return (
    <div className={`text-center font-semibold text-gray-500 m-2 alert-${type}`}>
      {text}
    </div>
  )
}

export default Alert
