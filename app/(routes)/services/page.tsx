import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                   <p className="mb-3 text-xl text-gray-300 text-justify">
                    Ofrezco desarrollo de aplicaciones web utilizando Laravel, aplicando buenas prácticas de programación para lograr soluciones escalables y seguras. Me especializo en la creación de sistemas personalizados, que van desde el diseño y optimización de bases de datos hasta la implementación de funcionalidades adaptadas a cada necesidad. También tengo experiencia en la configuración de sistemas de autenticación y seguridad, garantizando la protección de la información de los usuarios. Además, brindo mantenimiento y optimización de proyectos existentes, mejorando su rendimiento y asegurando un código claro, eficiente y fácil de mantener.
                    </p>

                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;