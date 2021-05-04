import Footer from 'components/footer'
import NavBar from 'components/navbar'
import DataTable from 'components/dataTable'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">bom dia</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
