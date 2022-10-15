import React from 'react'

function Loader() {
  return (
    <div className="custom-spinner d-flex justify-content-center align-items-center">
        <div className="spinner-bg">  
            <div className="spinner-border text-primary me-3" role="status" style={{ width: "3rem", height: "3rem", zIndex: 20 }}>
            </div>
            <span className="sr-only align-self-center ">Loading...</span>
        </div>
    </div>
  )
}

export default Loader