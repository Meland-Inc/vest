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
    const [timeout,  setTimeout] = useState(60);

    useEffect(() => {
        if (!localStorage.getItem(cacheKey)) {
            setShow(true)
        }

        if (!ref.current) {
            return;
        }

        const el = ref.current;

        if (timeout <= 0
            && Math.floor(el.scrollTop) >= Math.floor(el.scrollHeight - el.clientHeight - 300)
        ) {
            setBottomed(true);
        }
    }, [ref.current, timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(timeout => timeout - 1);
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    }, []);

    const readyThanYouLater = () => {
        localStorage.setItem(cacheKey, 'true');
        setShow(false);
    }

    const button = useMemo(() => {
        if (!ref.current) {
            return null;
        }

        return (
            <Button disabled={!bottomed} onClick={readyThanYouLater} variant="primary">
                OK, I understand and take own risk

                {timeout > 0 && `(${timeout} seconds.)`}
            </Button>
        )
    }, [ref.current, bottomed, timeout]);

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