import NavBar from "components/navbar";
import DataTable from "components/dataTable"
import DonutChart from "components/donutschart"
import Footer from "components/footer"
import BarChart from "components/barchart"

function Dashboard() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso(%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas vendas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary"> Todas as vendas </h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;