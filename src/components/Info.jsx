import Logo01 from './img/Logo.svg'
import Logo02 from './img/Logo 01.svg'
import Logo03 from './img/Logo 02.svg'
import Logo04 from './img/Logo 03.svg'
import Logo05 from './img/Logo 04.svg'

export default function Info(){
    return(
        <>
           <section className="min-h-72 w-full flex justify-around flex-wrap">
              <div className="md:w-1/5 flex justify-center items-center">
                <img src={Logo01} alt="" className="h-11 w-44"/>
              </div>
              <div className="md:w-1/5 flex justify-center items-center">
                <img src={Logo02} alt="" className="h-11 w-44"/>
              </div>
              <div className="md:w-1/5 flex justify-center items-center">
                <img src={Logo03} alt="" className="h-11 w-44"/>
              </div>
              <div className="md:w-1/5 flex justify-center items-center">
                <img src={Logo04} alt="" className="h-11 w-44"/>
              </div>
              <div className="md:w-1/5 flex justify-center items-center">
                <img src={Logo05} alt="" className="h-11 w-44"/>
              </div>
           </section>
        </>
    )
}