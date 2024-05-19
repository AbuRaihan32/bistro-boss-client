import bss from '../../../assets/home/chef-service.jpg'
const Boss = () => {
    return (
        <div className='relative '>
            <img src={bss} alt="" />
            <div className='text-center absolute bg-white py-12 top-[20%] right-[10%] w-[80%]'>
                <h1 className='text-4xl '>Bistro Boss</h1>
                <p className='px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Boss;