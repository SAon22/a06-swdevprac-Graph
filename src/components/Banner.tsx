import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.png'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>where every event finds its venue</h1>
                <h3 className='text-xl font-serif'>Finding the perfect venue has never been easier. Whether it's a wedding, corperate event, or private party, we connecting people to the perfect place.</h3>
            </div>
        </div>
    );
}