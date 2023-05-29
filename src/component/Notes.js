import React from 'react'

export default function Notes({notes}) {
  return (
    <div>
      <section className="mb-5">
        <p>{notes}</p>
      </section>
    </div>
  )
}

