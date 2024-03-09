import ProduceCard from '@/components/UI/ProduceCard';

const CardContainer = () => {
    return (
        <section id='CardContainer' className='w-full min-h-screen md:py-8 py-4 grid place-items-center'>
            <div className='container h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 w-[90%] gap-4 px-4'>
                <ProduceCard />
            </div>
        </section>
    )
}

export default CardContainer
