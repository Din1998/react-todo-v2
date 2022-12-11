import CreateBoard from '../component/CreateBoard'

function Home() {
    return (
      <div className="home">
        <div className="wraper__1">
          <h1 className="heading">Task_M.</h1>
          <p className="title">Manege your everyday task,any whare.</p>
        </div>
        <CreateBoard />
      </div>
        
    );
  }
  
  export default Home;
  