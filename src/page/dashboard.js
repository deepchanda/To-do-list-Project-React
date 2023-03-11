import { Card,Form } from "../components";
const Dashboard = () => {
    const saveExpoHandler =(enterExpodata)=>{ 
        const exdata = {
          ...enterExpodata,
          id:Math.random().toString()
        };
        console.log(exdata);
    }
  return (
    <>
      <div className="p-4 mx-auto mt-4 w-6/12 bg-orange-200 shadow-lg border-2">
        <Form onsaveExpoHandler ={saveExpoHandler}/>
      </div>
      <div className="p-4 mx-auto mt-4 w-6/12 bg-cyan-300 shadow-lg border-2">
        <Card />
      </div>
    </>
  );
};
export default Dashboard;