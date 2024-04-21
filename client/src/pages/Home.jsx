import Clients from '../components/Clients';
import Projects from '../components/Projects ';
import AddclientModal from '../components/AddClientModal';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddclientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
