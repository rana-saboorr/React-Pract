import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
    const {userid}=useParams()
    return (
    <>
      <div>
        User: {userid}
      </div>
    </>
)
}

export default Users;