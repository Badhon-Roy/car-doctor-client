import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="flex gap-4 items-center my-32">
            <div className="flex-1 relative">
                <img className="w-3/4 rounded-2xl" src={person} alt="" />
                <img className="absolute right-0 top-1/2 w-2/4 rounded-2xl border-8 border-white" src={parts} alt="" />
            </div>
            <div className="flex-1 px-6 space-y-4">
                <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
                <h2 className="text-5xl font-bold">We are qualified & of experience in this field</h2>
                <p className="text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className="text-xl">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn bg-[#FF3811] hover:bg-[#c03013] text-white normal-case text-xl">Get More Info</button>
            </div>
        </div>
    );
};

export default About;