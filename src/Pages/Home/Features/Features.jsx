
import icon1 from "../../../assets/icons/group.svg"
import icon2 from "../../../assets/icons/Group 38729.svg"
import icon3 from "../../../assets/icons/person.svg"
import icon4 from "../../../assets/icons/Wrench.svg"
import icon5 from "../../../assets/icons/check.svg"
import icon6 from "../../../assets/icons/deliveryt.svg"
const Features = () => {
    return (
        <div className="my-32 lg:px-0 px-4">
            <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-[#FF3811]">Core Features</h3>
                <h2 className="text-5xl font-bold">Why Choose Us</h2>
                <p className="text-xl">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-8">
                <div className="border-2 hover:bg-[#ff391175] border-black p-5 rounded-2xl text-center">
                    <div className="flex justify-center mb-4">
                    <img src={icon1} alt="" />
                    </div>
                    <h2 className="text-xl font-bold">Expert Team</h2>
                </div>
                <div className="border-2 hover:bg-[#ff391175] border-black p-5 rounded-2xl text-center">
                    <div className="flex justify-center mb-4">
                    <img src={icon2} alt="" />
                    </div>
                    <h2 className="text-xl font-bold">Timely Delivery</h2>
                </div>
                <div className="border-2 hover:bg-[#ff391175] border-black p-5 rounded-2xl text-center">
                    <div className="flex justify-center mb-4">
                    <img src={icon3} alt="" />
                    </div>
                    <h2 className="text-xl font-bold">24/7 Support</h2>
                </div>
                <div className="border-2 hover:bg-[#ff391175] border-black p-5 rounded-2xl text-center">
                    <div className="flex justify-center mb-4">
                    <img src={icon4} alt="" />
                    </div>
                    <h2 className="text-xl font-bold">Best Equipment</h2>
                </div>
                <div className="border-2 hover:bg-[#ff391175] border-black p-5 rounded-2xl text-center">
                    <div className="flex justify-center mb-4">
                    <img src={icon5} alt="" />
                    </div>
                    <h2 className="text-xl font-bold">100% Guranty</h2>
                </div>
                <div className="border-2 hover:bg-[#ff391175] border-black p-5 rounded-2xl text-center">
                    <div className="flex justify-center mb-4">
                    <img src={icon6} alt="" />
                    </div>
                    <h2 className="text-xl font-bold">Timely Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default Features;