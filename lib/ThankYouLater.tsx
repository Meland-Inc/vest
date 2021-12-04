import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import thankYouLaterPng from '../resources/thank-you-later.png';
import styles from '../styles/ThankYouLater.module.css';
import { useMemo, useRef, useEffect, useState } from 'react';

const cacheKey = 'thank-you-later';

const ThankYouLater = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [bottomed, setBottomed] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem(cacheKey)) {
            setShow(true)
        }
        
        if (!ref.current) {
            return;
        }

        const el = ref.current;

        el.onscroll = () => {
            if (el.scrollTop == el.scrollHeight - el.clientHeight) {
                setBottomed(true);
            }
        }
    }, [ref.current]);

    const readyThanYouLater = () => {
        localStorage.setItem(cacheKey, 'true');
        setShow(false);
    }

    const button = useMemo(() => {
        if (!ref.current) {
            return null;
        }

        if (!bottomed) {
            return null;
        }

        return (
            <Button onClick={readyThanYouLater} variant="primary">
                Okay, I finished reading it.
            </Button>
        )
    }, [ref.current, bottomed]);

    if (!show) {
        return null;
    }

    return (
        <div className={styles.warp}>
            <div ref={ref} style={{
                position: 'relative',
                height: '100%',
                overflow: 'scroll',
            }}>
            <Image src={thankYouLaterPng.src} thumbnail />
            </div>
            {button}
        </div>
    )
};


export default ThankYouLater;