import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[80vh] my-8">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-2xl" />
                <div className="absolute flex rounded-2xl items-center gap-4 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:w-1/2 md:2/3 space-y-5 p-16'>
                        <h2 className='md:text-6xl text-3xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className='md:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='text-xl'>
                            <button className='btn bg-[#FF3811] mr-4'>Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-2xl" />
                <div className="absolute flex rounded-2xl items-center gap-4 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:w-1/2 md:2/3 space-y-5 p-16'>
                        <h2 className='md:text-6xl text-3xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className='md:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='text-xl'>
                            <button className='btn bg-[#FF3811] mr-4'>Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-2xl" />
                <div className="absolute flex rounded-2xl items-center gap-4 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:w-1/2 md:2/3 space-y-5 p-16'>
                        <h2 className='md:text-6xl text-3xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className='md:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='text-xl'>
                            <button className='btn bg-[#FF3811] mr-4'>Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-2xl" />
                <div className="absolute flex rounded-2xl items-center gap-4 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:w-1/2 md:2/3 space-y-5 p-16'>
                        <h2 className='md:text-6xl text-3xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className='md:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='text-xl'>
                            <button className='btn bg-[#FF3811] mr-4'>Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-2xl" />
                <div className="absolute flex rounded-2xl items-center gap-4 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:w-1/2 md:2/3 space-y-5 p-16'>
                        <h2 className='md:text-6xl text-3xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className='md:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='text-xl'>
                            <button className='btn bg-[#FF3811] mr-4'>Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-2xl" />
                <div className="absolute flex rounded-2xl items-center gap-4 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white lg:w-1/2 md:2/3 space-y-5 p-16'>
                        <h2 className='md:text-6xl text-3xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p className='md:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='text-xl'>
                            <button className='btn bg-[#FF3811] mr-4'>Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;