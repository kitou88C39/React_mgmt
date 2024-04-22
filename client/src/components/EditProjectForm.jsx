import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';

export default function EditProjectForm({ project }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState('new');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert('Please fill out all fields');
    }
  };
  return (
    <div className='mt-5'>
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
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
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
