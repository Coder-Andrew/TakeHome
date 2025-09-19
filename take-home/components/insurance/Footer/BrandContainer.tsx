import Image from 'next/image';


const BrandContainer = () => {
    const images = [
        {src: '/brands/bbb.svg', alt:"Better Bussiness Bereau logo"},
        {src: '/brands/fox.svg', alt:"Fox News logo"},
        {src: '/brands/nbc.svg', alt:"NBC logo"},
        {src: '/brands/abc.svg', alt:"ABC News logo"},
        {src: '/brands/cbs.svg', alt:"CBS News logo"},
        {src: '/brands/verified.svg', alt:"Verification badge"},
    ];

    return (
        <section aria-labelledby="brands-heading" className='mx-auto flex flex-wrap justify-center'>
            <h2 id="brands-heading" className="sr-only">Featured brands and accrediations</h2>
            { images.map((i, ind) => (
                <Image 
                    key={ind}
                    width={213}
                    height={131}
                    alt={i.alt}
                    src={i.src}
                />
            ))}
        </section>
    );
}
 
export default BrandContainer;