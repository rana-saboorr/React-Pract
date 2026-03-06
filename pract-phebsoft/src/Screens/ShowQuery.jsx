import React from 'react'

function ShowQuery({obj}) {
  return (
    <>
      <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
      <p><strong>Name:</strong> {obj.name}</p>
      <p><strong>Email:</strong> {obj.email}</p>
      <p><strong>Query:</strong> {obj.query}</p>
    </div>
    </>
  )
}

export default ShowQuery
