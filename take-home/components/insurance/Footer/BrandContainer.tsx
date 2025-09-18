import Image from 'next/image';


const BrandContainer = () => {
    const images = [
        '/brands/bbb.svg',
        '/brands/fox.svg',
        '/brands/nbc.svg',
        '/brands/abc.svg',
        '/brands/cbs.svg',
        '/brands/verified.svg',
    ];

    return (
        <div className='mx-auto flex flex-wrap justify-center'>
            { images.map((i, ind) => (
                <Image 
                    key={ind}
                    width={213}
                    height={131}
                    alt="Brand Image"
                    src={i}
                />
            ))}
        </div>
    );
}
 
export default BrandContainer;