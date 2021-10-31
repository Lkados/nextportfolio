import Navbar  from "../../shared/components/navbar";
import Footer from "../../shared/components/footer";

export default function Layout(props:any): JSX.Element {
  return (
    <>
      <Navbar />
      <main >{props.children}</main>
      <Footer/>
    </>
  )
}