import Loader from "react-js-loader";
// setInterval(()=>{},1000)
const PruebaLoading = () => {
   const Types = ["bubble-loop","rectangular-ping","bubble-spin","hourglass","box-rectangular",
"ekvalayzer","bubble-ping","spinner-default","spinner-circle","spinner-cub",
"bubble-top","heart","bubble-scale","box-up","box-rotate-z","box-rotate-y","box-rotate-x"]
   return (
      <div className="App" style={{ backgroundColor: "black" }}>
         <div className={"row"}>
            <div className={"item"}>
               <Loader type="box-up" bgColor={"blue"} title={""} color={'#FFFFFF'} size={100} />
            </div>
         </div></div>)
}
export default PruebaLoading