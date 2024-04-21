import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function AddProjectModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState('new');

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_PROJECTS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all fields');
    }

    setName('');
    setDescription('');
    setStatus('new');
    setClientId('');
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#addProjectModal'
      >
        <div className='d-flex align-items-center'>
          <FaList className='icon' />
          <div>New Priject</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        aria-labelledby='AddProjectModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='AddProjectModalLabel'>
                New Project
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <from onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>
                    Name
                    <input
                      type='name'
                      className='from-control'
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>
                    Description
                    <textarea
                      className='from-control'
                      id='description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </label>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Stutas</label>
                  <select
                    id='status'
                    className='from-select'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value='new'>Not Started</option>
                    <option value='progress'>In Progress</option>
                    <option value='completed'>Completed</option>
                  </select>
                </div>
                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-primary'
                >
                  Submit
                </button>
              </from>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
