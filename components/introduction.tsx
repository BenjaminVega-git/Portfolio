import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-22 md:py-0 md:grid-cols-2">
                
                {/* Columna de la imagen */}
                <div className="flex items-end justify-center md:justify-start">
                    <Image 
                        src="/home-4.png" 
                        priority 
                        width="450" 
                        height="450" 
                        alt="Avatar" 
                    />
                </div>

                {/* Columna del texto */}
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> 
                        De la visión a la realidad con <br />
                        <TypeAnimation
                            sequence={[
                                'cada linea',
                                1000,
                                'cada proyecto',
                                1000,
                                'cada función',
                                1000,
                                'cada idea',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Soy un desarrollador apasionado por crear soluciones web eficientes y escalables. Tengo experiencia en Laravel y me gusta construir aplicaciones que sean intuitivas, seguras y fáciles de mantener
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
