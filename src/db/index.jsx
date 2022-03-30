import React from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import Types from '../components/Loaders'
const Db = () => {
   return (
      <Api />
   )
}
class Api extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         error: null,
         isLoaded: false,
         item: "",
         click: false,
      }
   }
   async request() {
      await fetch("//source.unsplash.com/collection/3678981/800*600")
         .then((result) => {
            if (this.mounted) {
               this.setState(
                  {
                     isLoaded: true,
                     item: result.url,
                  });
            }
         },
            (error) => {
               this.setState({
                  isLoaded: true,
                  error,
               })
            }
         );
   }
   componentDidMount() {
      this.mounted = true;
      this.request();
   }
   componentDidUpdate(_, prevState) {
      if (prevState.click !== this.state.click) this.request();
   }
   render() {
      console.log(Types)
      const { error, isLoaded, item } = this.state;
      if (error) {
         return <main>Error: {error.message}</main>
      } else if (!isLoaded) {
         return (<main>
            {/* <PacmanLoader color="grey" size={150} /> */}
            <PacmanLoader
                  size='60'
                  color='pink'
                  css={{ width: "200px !important", height: "100px !important" }}
               />
         </main>)
      } else {
         return (
            <main>
               <img src={item} alt="home" style={{ width: "800px" , height:"400px"}} />
               <button
               className='btn btn-primary m-3'
                  onClick={() => this.setState((prevState) => {
                     return {
                        ...prevState,
                        click: !prevState.click,
                     }
                  })}>
                  Cambiar
               </button>
            </main>
         )
      }
   }

}
export default Db