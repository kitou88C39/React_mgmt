import React from 'react';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddclientModal />
      </div>
      <Clients />
      <Projects />
    </>
  );
}
