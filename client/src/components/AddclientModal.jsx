import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';

export default function AddclientModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-toggle='modal'
        data-target='#addClientModal'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Add Client</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        aria-labelledby='AddClientModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='AddClientModalLabel'>
                Add Client
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <from>
                <div className='mb-3'>
                  <label className='form-label'>
                    Name
                    <input
                      type='text'
                      className='from-control'
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>
                    Name
                    <input
                      type='text'
                      className='from-control'
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
